/**
 * MultiCloud - Pengelola Keadaan Aplikasi (State Store)
 * Terintegrasi secara dwiarah dengan Basis Data Supabase PostgreSQL.
 * Menggunakan penyimpanan lokal peramban (localStorage) sebagai persistensi instan.
 */

import { supabaseService } from './supabase.js';

const STATE_KEY = 'multicloud_app_state_v3';

const defaultState = {
  currentUser: null,
  orders: [],
  services: [],
  digitalProducts: [],
  transactions: [],
  tickets: [],
  adminStats: {
    totalRevenue: 'Rp 0',
    activeUsers: '0 Pengguna',
    activeServicesCount: '0 Layanan',
    pendingOrdersCount: 0
  }
};

class StateStore {
  constructor() {
    this.state = this.loadState();
    this.listeners = [];
    this.syncWithSupabase();
    if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
      window.addEventListener('storage', (e) => {
        if (e.key === STATE_KEY && e.newValue) {
          this.state = this.loadState();
          this.notify();
        }
      });
    }
  }

  loadState() {
    const normalizeOtomatis = (str) => {
      if (typeof str !== 'string') return str;
      return str
        .replace(/Otomasi/g, 'Otomatis')
        .replace(/otomasi/g, 'otomatis')
        .replace(/Otomatis\+/g, 'Otomatis +')
        .replace(/Otomatis\(/g, 'Otomatis (');
    };
    try {
      const data = localStorage.getItem(STATE_KEY);
      if (data) {
        const parsed = { ...defaultState, ...JSON.parse(data) };
        if (Array.isArray(parsed.orders)) {
          parsed.orders = parsed.orders.map(o => ({
            ...o,
            package: normalizeOtomatis(o.package),
            itemTitle: normalizeOtomatis(o.itemTitle)
          }));
        }
        if (Array.isArray(parsed.services)) {
          parsed.services = parsed.services.map(s => ({
            ...s,
            spec: normalizeOtomatis(s.spec),
            name: normalizeOtomatis(s.name)
          }));
        }
        if (Array.isArray(parsed.transactions)) {
          parsed.transactions = parsed.transactions.map(t => ({
            ...t,
            description: normalizeOtomatis(t.description)
          }));
        }
        return parsed;
      }
    } catch (e) {
      console.warn('Gagal membaca data dari localStorage:', e);
    }
    return defaultState;
  }

  saveState() {
    try {
      localStorage.setItem(STATE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.error('Gagal menyimpan data ke localStorage:', e);
    }
    this.notify();
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(cb => {
      try { cb(this.state); } catch (err) { console.error(err); }
    });
  }

  getState() {
    return this.state;
  }

  async syncWithSupabase() {
    if (supabaseService.isConfigured()) {
      await supabaseService.cleanupLegacySeedData();
      await supabaseService.syncLocalCatalogToSupabase();
      const dbOrders = await supabaseService.getOrders();
      if (dbOrders) {
        const legacyIds = new Set(['ORD-2026-0891', 'ORD-2026-0840', 'ORD-2026-0792']);
        const existingMap = new Map();
        dbOrders.forEach(o => {
          if (!legacyIds.has(o.id)) existingMap.set(o.id, o);
        });

        this.state.orders.forEach(o => {
          if (!legacyIds.has(o.id) && !existingMap.has(o.id)) {
            existingMap.set(o.id, o);
          }
        });

        this.state.orders = Array.from(existingMap.values()).sort(
          (a, b) => new Date(b.date || 0) - new Date(a.date || 0)
        );
        this.saveState();
      }
    }
  }

  // Masuk Akun Pengguna Biasa
  login(email, role = 'user', userData = null) {
    if (userData) {
      this.state.currentUser = userData;
    } else if ((email || '').toLowerCase() === 'ahmad.fauzan@devstudio.id' && role === 'user') {
      this.state.currentUser = {
        id: 'usr_001',
        name: 'Ahmad Fauzan',
        email: 'ahmad.fauzan@devstudio.id',
        role: 'user',
        company: 'DevStudio Indonesia',
        phone: '+62 812-3456-7890',
        joinedDate: '2025-08-14',
        avatar: 'AF'
      };
    } else {
      this.state.currentUser = {
        id: role === 'admin' ? 'adm_001' : 'usr_' + Math.floor(100 + Math.random() * 900),
        name: role === 'admin' ? 'Administrator MultiCloud' : (email.split('@')[0] || 'Pengguna MultiCloud'),
        email: email,
        role: role,
        company: role === 'admin' ? 'Kantor Pusat MultiCloud' : 'Mitra Pengembang',
        phone: '+62 812-9876-5432',
        joinedDate: new Date().toISOString().slice(0, 10),
        avatar: role === 'admin' ? 'AD' : 'MC'
      };
    }
    this.saveState();
  }

  // Masuk Akun Administrator Khusus
  setAdminUser(adminProfile) {
    this.state.currentUser = {
      id: adminProfile.id || 'adm_001',
      name: adminProfile.name || 'Administrator MultiCloud',
      email: adminProfile.email || 'admin@multicloud.id',
      role: 'admin',
      company: adminProfile.company || 'Kantor Pusat MultiCloud',
      phone: adminProfile.phone || '+62 812-9876-5432',
      joinedDate: '2025-10-01',
      avatar: 'AD'
    };
    this.saveState();
  }

  logout() {
    this.state.currentUser = null;
    this.saveState();
  }

  isAdmin() {
    return this.state.currentUser && this.state.currentUser.role === 'admin';
  }

  // Buat Pesanan Baru
  async createOrder(orderData) {
    const id = 'ORD-2026-' + Math.floor(1000 + Math.random() * 9000);
    const invoiceNumber = `INV/${new Date().toISOString().slice(0, 10).replace(/-/g, '')}/MC/${Math.floor(100 + Math.random() * 900)}`;

    const newOrder = {
      id,
      date: new Date().toISOString(),
      itemTitle: orderData.itemTitle,
      category: orderData.category || 'digital-products',
      package: orderData.packageName || 'Paket Standar',
      amount: orderData.amount,
      breakdown: orderData.breakdown || null,
      paymentMethod: orderData.paymentMethod || 'QRIS Instan',
      status: 'Menunggu Pembayaran',
      licenseKey: 'Menunggu konfirmasi verifikasi',
      invoiceNumber,
      userName: orderData.userName || this.state.currentUser?.name || 'Pelanggan',
      userEmail: orderData.userEmail || this.state.currentUser?.email || 'surel@pelanggan.id'
    };

    this.state.orders.unshift(newOrder);

    const newTrx = {
      id: 'TRX-' + Math.floor(1000 + Math.random() * 9000),
      orderId: id,
      userEmail: newOrder.userEmail,
      description: `Pemesanan ${orderData.itemTitle} (${orderData.packageName})`,
      method: orderData.paymentMethod || 'QRIS Instan',
      amount: orderData.amount,
      status: 'Menunggu Pembayaran',
      date: new Date().toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' }) + ' WIB'
    };
    this.state.transactions.unshift(newTrx);

    this.saveState();

    // Asinkronus simpan ke basis data Supabase
    try {
      await supabaseService.createOrder(newOrder);
    } catch (e) {
      console.error('[MultiCloud] Galat simpan order ke Supabase:', e);
    }

    return newOrder;
  }

  // Verifikasi Konfirmasi Pembayaran
  async confirmOrderPayment(orderId) {
    const order = this.state.orders.find(o => o.id === orderId);
    if (order) {
      order.status = 'Selesai';
      const licenseKey = 'MC-LIC-' + Math.random().toString(36).substring(2, 10).toUpperCase() + '-VERIFIED';
      order.licenseKey = licenseKey;

      const trx = this.state.transactions.find(t => t.orderId === orderId);
      if (trx) {
        trx.status = 'Berhasil';
      }

      // Tambahkan ke daftar layanan atau produk aktif pengguna spesifik
      if (order.category === 'cloud-hosting' || order.category === 'api-services') {
        const startDate = new Date(order.date || Date.now());
        const endDate = new Date(startDate);
        endDate.setMonth(endDate.getMonth() + 1);

        const formatDateShort = (d) => {
          const dd = String(d.getDate()).padStart(2, '0');
          const mm = String(d.getMonth() + 1).padStart(2, '0');
          const yyyy = d.getFullYear();
          return `${dd}/${mm}/${yyyy}`;
        };

        const periodStr = `${formatDateShort(startDate)} - ${formatDateShort(endDate)}`;
        const expStr = endDate.toISOString().slice(0, 10);
        const startStr = startDate.toISOString().slice(0, 10);

        this.state.services.unshift({
          id: 'srv_' + Math.floor(1000 + Math.random() * 9000),
          orderId: order.id,
          name: order.itemTitle,
          type: order.category === 'cloud-hosting' ? 'Komputasi Awan Dedicated' : 'Gerbang API',
          status: 'Aktif',
          spec: order.package,
          domain: 'vps.syienta.com',
          ip: '103.187.144.' + Math.floor(10 + Math.random() * 80),
          datacenter: 'Jakarta Tier-4 IDC 3D',
          userEmail: order.userEmail,
          startDate: startStr,
          expiresAt: expStr,
          periodText: periodStr,
          autoRenew: true, // Default aktif
          autoRenewDaysNotice: 3
        });
      } else {
        this.state.digitalProducts.unshift({
          id: 'prod_' + Math.floor(1000 + Math.random() * 9000),
          name: order.itemTitle,
          accountEmail: order.userEmail || this.state.currentUser?.email || 'user@multicloud.id',
          licenseType: 'Lisensi Resmi (' + order.package + ')',
          status: 'Aktif',
          expiresAt: '2026-12-31'
        });
      }

      this.saveState();

      // Perbarui status di Supabase
      try {
        await supabaseService.updateOrderStatus(orderId, 'Selesai', licenseKey);
      } catch (e) {
        console.error('[MultiCloud] Galat update order ke Supabase:', e);
      }
    }
  }

  toggleAutoRenew(serviceId) {
    const service = this.state.services.find(s => s.id === serviceId);
    if (service) {
      service.autoRenew = !service.autoRenew;
      this.saveState();
      return service.autoRenew;
    }
    return false;
  }

  // Perpanjang Layanan (Renew Service)
  renewService(serviceId, months = 1) {
    const service = this.state.services.find(s => s.id === serviceId);
    if (service) {
      const currentExpiry = new Date(service.expiresAt || Date.now());
      // Jika sudah lewat hari ini, mulai dari hari ini, jika belum tambahkan ke masa aktif berjalan
      const baseDate = currentExpiry > new Date() ? currentExpiry : new Date();
      const newExpiry = new Date(baseDate);
      newExpiry.setMonth(newExpiry.getMonth() + months);

      const oldExpiryStr = service.expiresAt;
      service.expiresAt = newExpiry.toISOString().slice(0, 10);

      const formatDateShort = (d) => {
        const dd = String(d.getDate()).padStart(2, '0');
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        const yyyy = d.getFullYear();
        return `${dd}/${mm}/${yyyy}`;
      };

      const startD = new Date(baseDate);
      service.periodText = `${formatDateShort(startD)} - ${formatDateShort(newExpiry)}`;

      // Tambahkan faktur perpanjangan otomatis ke orders & transactions
      const renewalInvoiceNo = `INV/${new Date().toISOString().slice(0, 10).replace(/-/g, '')}/MC/${Math.floor(100 + Math.random() * 900)}`;
      const renewalOrder = {
        id: 'ORD-REN-' + Math.floor(1000 + Math.random() * 9000),
        invoiceNumber: renewalInvoiceNo,
        date: new Date().toISOString(),
        itemTitle: service.name,
        category: 'cloud-hosting',
        package: `Perpanjangan ${months} Bulan (${service.periodText})`,
        amount: 2944874,
        paymentMethod: 'Auto-Debit (BCA)',
        status: 'Selesai',
        licenseKey: 'MC-RENEWED-' + Math.random().toString(36).substring(2, 8).toUpperCase(),
        userName: this.state.currentUser?.name || 'Pelanggan',
        userEmail: service.userEmail || this.state.currentUser?.email,
        periodText: service.periodText,
        breakdown: {
          base: 2600000,
          automation: 53040,
          vat: 291834
        }
      };

      this.state.orders.unshift(renewalOrder);

      this.state.transactions.unshift({
        id: 'TRX-' + Math.floor(1000 + Math.random() * 9000),
        orderId: renewalOrder.id,
        userEmail: renewalOrder.userEmail,
        description: `Perpanjangan ${service.name} (${service.periodText})`,
        method: 'Auto-Debit BCA',
        amount: 2944874,
        status: 'Berhasil',
        date: new Date().toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' }) + ' WIB'
      });

      this.saveState();
      return service;
    }
    return null;
  }

  addTicket(ticketData) {
    const newTicket = {
      id: 'TCK-' + Math.floor(1000 + Math.random() * 9000),
      subject: ticketData.subject,
      department: ticketData.department || 'Dukungan Teknis',
      priority: ticketData.priority || 'Biasa',
      status: 'Sedang Diproses',
      lastUpdate: 'Baru saja'
    };
    this.state.tickets.unshift(newTicket);
    this.saveState();
    return newTicket;
  }
}

export const store = new StateStore();
