/**
 * MultiCloud - Pengelola Keadaan Aplikasi (State Store)
 * Terintegrasi secara dwiarah dengan Basis Data Supabase PostgreSQL.
 * Menggunakan penyimpanan lokal peramban (localStorage) sebagai persistensi instan.
 */

import { supabaseService } from './supabase.js';

const STATE_KEY = 'multicloud_app_state_v2';

const defaultState = {
  currentUser: {
    id: 'usr_001',
    name: 'Ahmad Fauzan',
    email: 'ahmad.fauzan@devstudio.id',
    role: 'user', // 'user' | 'admin'
    company: 'DevStudio Indonesia',
    phone: '+62 812-3456-7890',
    joinedDate: '2025-08-14',
    avatar: 'AF'
  },
  orders: [
    {
      id: 'ORD-2026-0891',
      date: '2026-11-04T14:32:00',
      itemTitle: 'Cursor AI Pro (Akses Resmi Berlisensi)',
      category: 'ai-tools',
      package: '1 Bulan Perorangan',
      amount: 320000,
      paymentMethod: 'QRIS Instan',
      status: 'Selesai',
      licenseKey: 'CRS-PRO-89F12-OFFICIAL',
      invoiceNumber: 'INV/20261104/MC/891',
      userName: 'Ahmad Fauzan',
      userEmail: 'ahmad.fauzan@devstudio.id'
    },
    {
      id: 'ORD-2026-0840',
      date: '2026-10-22T09:15:00',
      itemTitle: 'Peladen VPS Cloud NVMe Ultra (AMD EPYC)',
      category: 'cloud-hosting',
      package: 'Paket Pemula (2 vCPU / 4GB RAM)',
      amount: 120000,
      paymentMethod: 'BCA Virtual Account',
      status: 'Selesai',
      licenseKey: 'IP: 103.187.144.52 (Akses SSH Aktif)',
      invoiceNumber: 'INV/20261022/MC/840',
      userName: 'Ahmad Fauzan',
      userEmail: 'ahmad.fauzan@devstudio.id'
    },
    {
      id: 'ORD-2026-0792',
      date: '2026-09-18T11:40:00',
      itemTitle: 'Gerbang WhatsApp Business API Pro',
      category: 'api-services',
      package: 'Paket Pemula (5.000 Pesan)',
      amount: 150000,
      paymentMethod: 'Mandiri Virtual Account',
      status: 'Selesai',
      licenseKey: 'KUNCI-API: mc_live_wa_99182aa410',
      invoiceNumber: 'INV/20260918/MC/792',
      userName: 'Ahmad Fauzan',
      userEmail: 'ahmad.fauzan@devstudio.id'
    }
  ],
  services: [
    {
      id: 'srv_act_1',
      name: 'Peladen VPS Cloud NVMe Ultra',
      type: 'VPS Cloud',
      ip: '103.187.144.52',
      datacenter: 'Jakarta IDC 3D',
      spec: '2 vCPU, 4GB RAM, 50GB NVMe',
      status: 'Aktif',
      expiresAt: '2026-12-22',
      userEmail: 'ahmad.fauzan@devstudio.id',
      autoRenew: true
    },
    {
      id: 'srv_act_2',
      name: 'Gerbang WhatsApp Business API',
      type: 'Gerbang API',
      quotaUsed: '2.140 / 5.000 Pesan Terkirim',
      status: 'Aktif',
      expiresAt: '2026-12-18',
      userEmail: 'ahmad.fauzan@devstudio.id',
      autoRenew: true
    }
  ],
  digitalProducts: [
    {
      id: 'prod_act_1',
      name: 'Cursor AI Pro Access',
      accountEmail: 'ahmad.fauzan@devstudio.id',
      licenseType: 'Lisensi Perorangan Resmi',
      status: 'Aktif',
      expiresAt: '2026-12-04'
    }
  ],
  transactions: [
    {
      id: 'TRX-9921',
      orderId: 'ORD-2026-0891',
      userEmail: 'ahmad.fauzan@devstudio.id',
      description: 'Pembayaran Cursor AI Pro 1 Bulan',
      method: 'QRIS',
      amount: 320000,
      status: 'Berhasil',
      date: '04 Nov 2026, 14:35 WIB'
    },
    {
      id: 'TRX-9844',
      orderId: 'ORD-2026-0840',
      userEmail: 'ahmad.fauzan@devstudio.id',
      description: 'Perpanjangan Peladen VPS Cloud Pemula',
      method: 'BCA VA',
      amount: 120000,
      status: 'Berhasil',
      date: '22 Okt 2026, 09:20 WIB'
    },
    {
      id: 'TRX-9701',
      orderId: 'ORD-2026-0792',
      userEmail: 'ahmad.fauzan@devstudio.id',
      description: 'Langganan Gerbang WhatsApp API',
      method: 'Mandiri VA',
      amount: 150000,
      status: 'Berhasil',
      date: '18 Sep 2026, 11:42 WIB'
    }
  ],
  tickets: [
    {
      id: 'TCK-4012',
      subject: 'Bantuan konfigurasi Reverse DNS (PTR) Peladen VPS',
      department: 'Dukungan Teknis Komputasi Awan',
      priority: 'Biasa',
      status: 'Terjawab',
      lastUpdate: '23 Okt 2026, 14:10 WIB'
    },
    {
      id: 'TCK-3980',
      subject: 'Penyesuaian alamat URL Webhook Gerbang WhatsApp API',
      department: 'Dukungan API Pengembang',
      priority: 'Rendah',
      status: 'Selesai',
      lastUpdate: '20 Sep 2026, 16:30 WIB'
    }
  ],
  adminStats: {
    totalRevenue: 'Rp 48.950.000',
    activeUsers: '1.420 Pengguna',
    activeServicesCount: '3.190 Layanan',
    pendingOrdersCount: 2
  }
};

class StateStore {
  constructor() {
    this.state = this.loadState();
    this.listeners = [];
    this.syncWithSupabase();
  }

  loadState() {
    try {
      const data = localStorage.getItem(STATE_KEY);
      if (data) {
        return { ...defaultState, ...JSON.parse(data) };
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
      const dbOrders = await supabaseService.getOrders();
      if (dbOrders && dbOrders.length > 0) {
        // Gabungkan atau replace orders dari Supabase dengan data lokal
        // Utamakan data dari Supabase
        const existingMap = new Map();
        dbOrders.forEach(o => existingMap.set(o.id, o));
        
        // Pertahankan order lokal jika belum ada di dbOrders
        this.state.orders.forEach(o => {
          if (!existingMap.has(o.id)) {
            existingMap.set(o.id, o);
          }
        });

        this.state.orders = Array.from(existingMap.values());
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
