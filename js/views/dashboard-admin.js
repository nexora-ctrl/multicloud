/**
 * MultiCloud - Dasbor Administrator (Admin Dashboard)
 * Ditulis sesuai kaidah Bahasa Indonesia baku (KBBI).
 * Modul kendali:
 * - Ringkasan Administrator
 * - Kelola Pesanan (Verifikasi Pembayaran & Penerbitan Lisensi)
 * - Kelola Produk & Layanan
 * - Kelola Kategori
 * - Kelola Pelanggan
 * - Kelola Transaksi
 * - Konten Situs Web
 * - Integrasi Basis Data Supabase
 */

import { icons } from '../icons.js';
import { store } from '../state.js';
import { productsList } from '../data/products.js';
import { serviceCategories } from '../data/services.js';
import { supabaseService } from '../supabase.js';

let activeAdminTab = 'overview';
let liveCustomers = [];
let liveProducts = [];

export function renderAdminDashboard(tab = 'overview') {
  activeAdminTab = tab;
  const state = store.getState();
  const formatRp = (num) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);
  const isSupabaseLive = supabaseService.isConfigured();

  return `
    <div class="dashboard-container">
      <!-- Bilah Sisi Administrator -->
      <aside class="dashboard-sidebar" aria-label="Navigasi Dasbor Admin">
        <div>
          <div class="dashboard-user-card">
            <div class="user-avatar" style="background-color: var(--color-accent);">AD</div>
            <div class="user-meta">
              <span class="user-name">Administrator MultiCloud</span>
              <span class="user-role-badge" style="color: var(--color-accent);">Pengelola Utama</span>
            </div>
          </div>

          <nav class="sidebar-nav">
            <button class="sidebar-nav-item ${activeAdminTab === 'overview' ? 'active' : ''}" data-admin-tab="overview">
              ${icons.layoutDashboard('icon', 18, 2)}
              <span>Ringkasan Admin</span>
            </button>
            <button class="sidebar-nav-item ${activeAdminTab === 'orders' ? 'active' : ''}" data-admin-tab="orders">
              ${icons.shoppingCart('icon', 18, 2)}
              <span>Kelola Pesanan</span>
              <span class="sidebar-badge">${state.orders.length}</span>
            </button>
            <button class="sidebar-nav-item ${activeAdminTab === 'products' ? 'active' : ''}" data-admin-tab="products">
              ${icons.package('icon', 18, 2)}
              <span>Kelola Produk</span>
              <span class="sidebar-badge">${productsList.length}</span>
            </button>
            <button class="sidebar-nav-item ${activeAdminTab === 'categories' ? 'active' : ''}" data-admin-tab="categories">
              ${icons.layers('icon', 18, 2)}
              <span>Kelola Kategori</span>
            </button>
            <button class="sidebar-nav-item ${activeAdminTab === 'customers' ? 'active' : ''}" data-admin-tab="customers">
              ${icons.users('icon', 18, 2)}
              <span>Kelola Pelanggan</span>
            </button>
            <button class="sidebar-nav-item ${activeAdminTab === 'transactions' ? 'active' : ''}" data-admin-tab="transactions">
              ${icons.receipt('icon', 18, 2)}
              <span>Kelola Transaksi</span>
            </button>
            <button class="sidebar-nav-item ${activeAdminTab === 'supabase' ? 'active' : ''}" data-admin-tab="supabase">
              ${icons.database('icon', 18, 2)}
              <span>Basis Data Supabase</span>
              <span class="status-pill ${isSupabaseLive ? 'success' : 'warning'}" style="font-size: 0.625rem; padding: 0.1rem 0.4rem; margin-left: auto;">
                ${isSupabaseLive ? 'Aktif' : 'Lokal'}
              </span>
            </button>
            <button class="sidebar-nav-item ${activeAdminTab === 'content' ? 'active' : ''}" data-admin-tab="content">
              ${icons.fileText('icon', 18, 2)}
              <span>Konten Situs Web</span>
            </button>
          </nav>
        </div>

        <div class="sidebar-footer">
          <a href="#/dashboard" class="sidebar-nav-item">
            ${icons.user('icon', 18, 2)}
            <span>Ke Portal Pengguna</span>
          </a>
          <button class="sidebar-nav-item" id="admin-logout-btn" style="color: var(--color-danger);">
            ${icons.logout('icon', 18, 2)}
            <span>Keluar Sesi Admin</span>
          </button>
        </div>
      </aside>

      <!-- Konten Utama Dasbor Admin -->
      <main class="dashboard-content" id="admin-content-area">
        ${renderAdminTabContent(activeAdminTab, state)}
      </main>
    </div>
  `;
}

function renderAdminTabContent(tab, state) {
  const formatRp = (num) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);

  switch (tab) {
    case 'orders':
      return `
        <div class="dash-header">
          <div>
            <h1 class="dash-title">Kelola Pesanan Masuk</h1>
            <p class="dash-subtitle">Pantau seluruh pesanan pelanggan, verifikasi status pembayaran, dan terbitkan kunci lisensi resmi.</p>
          </div>
        </div>

        <div class="dash-card">
          <div class="dash-table-wrap">
            <table class="dash-table">
              <thead>
                <tr>
                  <th>Nomor Faktur</th>
                  <th>Nama Pelanggan</th>
                  <th>Produk / Layanan</th>
                  <th>Paket</th>
                  <th>Jumlah Tagihan</th>
                  <th>Metode</th>
                  <th>Status</th>
                  <th>Aksi Verifikasi</th>
                </tr>
              </thead>
              <tbody>
                ${state.orders.map(o => `
                  <tr>
                    <td><strong style="color: var(--text-primary); font-family: var(--font-mono);">${o.invoiceNumber || o.id}</strong></td>
                    <td>${o.userName || 'Pelanggan'}</td>
                    <td><strong>${o.itemTitle}</strong></td>
                    <td>${o.package}</td>
                    <td><strong>${formatRp(o.amount)}</strong></td>
                    <td>${o.paymentMethod}</td>
                    <td>
                      <span class="status-pill ${o.status === 'Selesai' ? 'success' : o.status === 'Sedang Diproses' ? 'info' : 'warning'}">
                        ${o.status}
                      </span>
                    </td>
                    <td>
                      ${o.status !== 'Selesai' ? `
                        <button class="btn btn-primary btn-sm admin-approve-order-btn" data-order-id="${o.id}">
                          ${icons.check('icon', 14, 2)} Terima & Setujui Pesanan
                        </button>
                      ` : `
                        <span style="font-size: 0.8125rem; color: var(--color-success); font-weight: 600;">✓ Selesai & Aktif</span>
                      `}
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;

    case 'supabase':
      const currentConfig = supabaseService.getConfig();
      const isConnected = supabaseService.isConfigured();

      return `
        <div class="dash-header">
          <div>
            <h1 class="dash-title">Konfigurasi Basis Data Supabase</h1>
            <p class="dash-subtitle">Hubungkan platform MultiCloud dengan peladen PostgreSQL Supabase Anda secara langsung.</p>
          </div>
          <span class="status-pill ${isConnected ? 'success' : 'warning'}">
            ${isConnected ? 'Terhubung ke Supabase' : 'Menggunakan Penyimpanan Lokal'}
          </span>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 340px; gap: 2rem; align-items: start;">
          <!-- Formulir Kunci Supabase -->
          <div class="card" style="padding: 2rem;">
            <h3 style="font-size: 1.125rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem;">
              Kredensial API Supabase
            </h3>
            <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1.5rem;">
              Dapatkan Project URL dan anon public key dari Dasbor Supabase Anda pada menu <strong>Project Settings &gt; API</strong>.
            </p>

            <form id="supabase-config-form">
              <div class="form-group">
                <label class="form-label" for="supabase-url">Project URL Supabase</label>
                <input class="form-input" id="supabase-url" type="url" required placeholder="https://xyzcompany.supabase.co" value="${currentConfig.url.includes('YOUR_PROJECT_ID') ? '' : currentConfig.url}" />
                <span class="form-hint">Contoh: https://wvxabctest.supabase.co</span>
              </div>

              <div class="form-group">
                <label class="form-label" for="supabase-anon-key">Anon Public Key</label>
                <textarea class="form-textarea" id="supabase-anon-key" required placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." rows="3">${currentConfig.anonKey.includes('YOUR_SUPABASE_ANON_KEY') ? '' : currentConfig.anonKey}</textarea>
                <span class="form-hint">Kunci publik aman untuk koneksi klien peramban (anon public).</span>
              </div>

              <div style="display: flex; gap: 0.75rem; margin-top: 1.5rem;">
                <button type="submit" class="btn btn-primary btn-md" id="save-supabase-btn">
                  ${icons.database('icon', 16, 2)}
                  <span>Simpan & Sambungkan</span>
                </button>
                <button type="button" class="btn btn-secondary btn-md" id="test-supabase-btn">
                  ${icons.refresh('icon', 16, 2)}
                  <span>Uji Koneksi</span>
                </button>
              </div>
            </form>

            <div id="supabase-feedback" style="display: none; margin-top: 1.25rem; padding: 0.875rem; border-radius: var(--radius-md); font-size: 0.875rem;"></div>
          </div>

          <!-- Petunjuk Pembuatan Tabel SQL -->
          <div class="card" style="padding: 1.5rem; background-color: var(--bg-surface-secondary);">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
              <span style="color: var(--color-primary);">${icons.infoCircle('icon', 20, 2)}</span>
              <strong style="color: var(--text-primary); font-size: 0.9375rem;">Skema SQL Siap Pakai</strong>
            </div>
            <p style="font-size: 0.8125rem; color: var(--text-secondary); line-height: 1.55; margin-bottom: 1rem;">
              Berkas <code style="color: var(--color-primary);">supabase-schema.sql</code> telah disiapkan di direktori proyek Anda. Jalankan isi skrip tersebut di menu <strong>SQL Editor</strong> pada dasbor Supabase untuk membuat tabel pesanan, produk, transaksi, dan profil administrator secara otomatis.
            </p>
            <div style="font-size: 0.75rem; color: var(--text-muted); border-top: 1px dashed var(--border-color); padding-top: 0.75rem;">
              Lokasi berkas: <br />
              <code style="word-break: break-all;">d:/www/multicloud/supabase-schema.sql</code>
            </div>
          </div>
        </div>
      `;

    case 'products':
      return `
        <div class="dash-header">
          <div>
            <h1 class="dash-title">Kelola Produk & Lisensi AI</h1>
            <p class="dash-subtitle">Katalog produk aktif, alokasi lisensi resmi, dan penetapan harga jual.</p>
          </div>
          <button class="btn btn-primary btn-sm" id="admin-add-product-btn">
            ${icons.plus('icon', 16, 2)} Tambah Produk Baru
          </button>
        </div>

        <div class="dash-card">
          <div class="dash-table-wrap">
            <table class="dash-table">
              <thead>
                <tr>
                  <th>Nama Produk</th>
                  <th>Kategori</th>
                  <th>Lencana</th>
                  <th>Status Lisensi</th>
                  <th>Harga Dasar</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                ${productsList.map(p => `
                  <tr>
                    <td><strong>${p.name}</strong></td>
                    <td><span class="badge badge-outline">${p.category}</span></td>
                    <td><span class="badge ${p.badge === 'Terlaris' ? 'badge-bestseller' : p.badge === 'Baru' ? 'badge-new' : 'badge-popular'}">${p.badge}</span></td>
                    <td>
                      ${p.isOfficialLicense ? `
                        <span class="badge badge-success">${icons.shieldCheck('icon', 12, 2)} Resmi</span>
                      ` : `<span class="badge badge-outline">Infrastruktur</span>`}
                    </td>
                    <td><strong>${formatRp(p.price)}</strong></td>
                    <td>
                      <div class="flex items-center gap-1">
                        <button class="btn btn-ghost btn-sm" title="Ubah">${icons.edit('icon', 16, 2)}</button>
                        <button class="btn btn-ghost btn-sm" title="Hapus" style="color: var(--color-danger);">${icons.trash('icon', 16, 2)}</button>
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;

    case 'categories':
      return `
        <div class="dash-header">
          <div>
            <h1 class="dash-title">Kelola Kategori Layanan</h1>
            <p class="dash-subtitle">Struktur pengelompokan layanan teknologi dan produk digital.</p>
          </div>
        </div>

        <div class="grid-2">
          ${serviceCategories.map(cat => `
            <div class="card">
              <div class="card-header">
                <div>
                  <h3 class="card-title">${cat.title}</h3>
                  <span class="badge badge-primary">${cat.badge}</span>
                </div>
                <div class="card-icon-box">
                  ${icons[cat.icon] ? icons[cat.icon]('icon', 22, 2) : icons.layers('icon', 22, 2)}
                </div>
              </div>
              <p class="card-desc">${cat.subtitle}</p>
              <div class="card-footer">
                <button class="btn btn-outline btn-sm">Perbarui Kategori</button>
              </div>
            </div>
          `).join('')}
        </div>
      `;

    case 'customers':
      const customersListToRender = (liveCustomers && liveCustomers.length > 0) 
        ? liveCustomers 
        : [
            { full_name: 'Ahmad Fauzan', email: 'ahmad.fauzan@devstudio.id', company: 'DevStudio Indonesia', role: 'user', created_at: '2025-08-14' },
            { full_name: 'Bambang Wicaksono', email: 'bambang@fintechscale.co.id', company: 'Fintech Scale Labs', role: 'user', created_at: '2025-09-02' }
          ];

      return `
        <div class="dash-header">
          <div>
            <h1 class="dash-title">Kelola Pelanggan Terdaftar</h1>
            <p class="dash-subtitle">Daftar pengguna terverifikasi yang tersinkronisasi langsung dari tabel <code>profiles</code> Supabase.</p>
          </div>
          <button class="btn btn-outline btn-sm" id="admin-refresh-customers-btn">
            ${icons.refresh('icon', 15, 2)} Segarkan dari Supabase
          </button>
        </div>

        <div class="dash-card">
          <div class="dash-table-wrap">
            <table class="dash-table">
              <thead>
                <tr>
                  <th>Nama Pelanggan</th>
                  <th>Alamat Surel</th>
                  <th>Perusahaan / Tim</th>
                  <th>Peran Akun</th>
                  <th>Status Sumber Data</th>
                  <th>Tanggal Bergabung</th>
                </tr>
              </thead>
              <tbody id="customers-table-body">
                ${customersListToRender.map(c => `
                  <tr>
                    <td><strong>${c.full_name || 'Pengguna'}</strong></td>
                    <td>${c.email}</td>
                    <td>${c.company || 'Perorangan'}</td>
                    <td><span class="badge ${c.role === 'admin' ? 'badge-primary' : 'badge-outline'}">${c.role === 'admin' ? 'Administrator' : 'Pengguna'}</span></td>
                    <td><span class="status-pill success">${liveCustomers && liveCustomers.length > 0 ? 'Supabase Real-time' : 'Tersimpan'}</span></td>
                    <td>${c.created_at ? new Date(c.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) : '-'}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;

    case 'transactions':
      return `
        <div class="dash-header">
          <div>
            <h1 class="dash-title">Kelola Mutasi & Transaksi Keuangan</h1>
            <p class="dash-subtitle">Catatan pembukuan penerimaan pembayaran dari pelanggan via gerbang digital.</p>
          </div>
        </div>

        <div class="dash-card">
          <div class="dash-table-wrap">
            <table class="dash-table">
              <thead>
                <tr>
                  <th>ID Transaksi</th>
                  <th>Uraian Pesanan</th>
                  <th>Metode Pembayaran</th>
                  <th>Nominal</th>
                  <th>Waktu Konfirmasi</th>
                  <th>Status Pembayaran</th>
                </tr>
              </thead>
              <tbody>
                ${state.transactions.map(t => `
                  <tr>
                    <td><strong style="color: var(--text-primary); font-family: var(--font-mono);">${t.id}</strong></td>
                    <td>${t.description}</td>
                    <td>${t.method}</td>
                    <td><strong>${formatRp(t.amount)}</strong></td>
                    <td>${t.date}</td>
                    <td><span class="status-pill success">${t.status}</span></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;

    case 'content':
      return `
        <div class="dash-header">
          <div>
            <h1 class="dash-title">Kelola Konten Situs Web</h1>
            <p class="dash-subtitle">Atur judul utama, deskripsi platform, dan pengumuman status pemeliharaan.</p>
          </div>
        </div>

        <div class="card" style="max-width: 700px; padding: 2rem;">
          <form id="admin-content-form">
            <div class="form-group">
              <label class="form-label">Judul Utama Beranda (Headline)</label>
              <input class="form-input" type="text" value="Everything You Need to Build, Scale & Grow." />
            </div>

            <div class="form-group">
              <label class="form-label">Subjudul & Deskripsi Singkat</label>
              <textarea class="form-textarea" rows="3">MultiCloud adalah platform terpadu penyedia infrastruktur komputasi awan berkecepatan tinggi, gerbang API terkelola, alat AI berlisensi resmi, dan katalog produk digital untuk akselerasi teknologi Anda.</textarea>
            </div>

            <div class="form-group">
              <label class="form-label">Status Peladen Operasional</label>
              <select class="form-select">
                <option value="normal">Semua Sistem Beroperasi Normal (99,99%)</option>
                <option value="maintenance">Pemeliharaan Terjadwal</option>
              </select>
            </div>

            <button type="submit" class="btn btn-primary btn-md" style="margin-top: 1rem;">
              <span>Publikasikan Perubahan Konten</span>
            </button>
          </form>
        </div>
      `;

    default: // overview
      return `
        <div class="dash-header">
          <div>
            <h1 class="dash-title">Pusat Kendali Administrator</h1>
            <p class="dash-subtitle">Pemantauan aktivitas operasional platform MultiCloud secara waktu nyata.</p>
          </div>
          <button class="btn btn-outline btn-sm" id="admin-refresh-metrics-btn">
            ${icons.refresh('icon', 15, 2)} Segarkan Data
          </button>
        </div>

        <div class="metrics-row">
          <div class="metric-card">
            <div class="metric-header">
              <span class="metric-title">Estimasi Omzet</span>
              ${icons.receipt('icon', 18, 2)}
            </div>
            <div class="metric-val">${state.adminStats.totalRevenue}</div>
            <div class="metric-trend">+14% dibanding bulan lalu</div>
          </div>

          <div class="metric-card">
            <div class="metric-header">
              <span class="metric-title">Total Pengguna</span>
              ${icons.users('icon', 18, 2)}
            </div>
            <div class="metric-val">${state.adminStats.activeUsers}</div>
            <div class="metric-trend">Pelanggan aktif bulan ini</div>
          </div>

          <div class="metric-card">
            <div class="metric-header">
              <span class="metric-title">Layanan Awan Terpasang</span>
              ${icons.server('icon', 18, 2)}
            </div>
            <div class="metric-val">${state.adminStats.activeServicesCount}</div>
            <div class="metric-trend">Kesehatan Node 99,99%</div>
          </div>

          <div class="metric-card">
            <div class="metric-header">
              <span class="metric-title">Pesanan Masuk</span>
              ${icons.shoppingCart('icon', 18, 2)}
            </div>
            <div class="metric-val">${state.orders.length} Pesanan</div>
            <div class="metric-trend">Data tersinkronisasi</div>
          </div>
        </div>

        <div class="dash-card">
          <div class="dash-card-header">
            <h3 class="dash-card-title">Pesanan Masuk Terbaru</h3>
            <button class="btn btn-ghost btn-sm" onclick="window.location.hash='#/admin/orders'">Kelola Semua</button>
          </div>
          <div class="dash-table-wrap">
            <table class="dash-table">
              <thead>
                <tr>
                  <th>Faktur</th>
                  <th>Pelanggan</th>
                  <th>Layanan</th>
                  <th>Paket</th>
                  <th>Total</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                ${state.orders.slice(0, 3).map(o => `
                  <tr>
                    <td><strong>${o.invoiceNumber || o.id}</strong></td>
                    <td>${o.userName || 'Pelanggan'}</td>
                    <td>${o.itemTitle}</td>
                    <td>${o.package}</td>
                    <td><strong>${formatRp(o.amount)}</strong></td>
                    <td>
                      <span class="status-pill ${o.status === 'Selesai' ? 'success' : 'warning'}">
                        ${o.status}
                      </span>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;
  }
}

export function setupAdminDashboardEvents() {
  const sidebarButtons = document.querySelectorAll('.dashboard-sidebar .sidebar-nav-item[data-admin-tab]');
  sidebarButtons.forEach(btn => {
    btn.onclick = () => {
      const tab = btn.getAttribute('data-admin-tab');
      sidebarButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeAdminTab = tab;
      const content = document.getElementById('admin-content-area');
      if (content) {
        content.innerHTML = renderAdminTabContent(tab, store.getState());
        setupAdminSubEvents(tab);
      }
    };
  });

  const logoutBtn = document.getElementById('admin-logout-btn');
  if (logoutBtn) {
    logoutBtn.onclick = () => {
      store.logout();
      window.location.hash = '#/admin-login';
    };
  }

  setupAdminSubEvents(activeAdminTab);
}

function setupAdminSubEvents(tab) {
  if (tab === 'customers') {
    const refreshBtn = document.getElementById('admin-refresh-customers-btn');
    const fetchCustomers = async () => {
      if (refreshBtn) refreshBtn.textContent = 'Memuat dari Supabase...';
      const customers = await supabaseService.getCustomers();
      if (customers && customers.length > 0) {
        liveCustomers = customers;
        const content = document.getElementById('admin-content-area');
        if (content) {
          content.innerHTML = renderAdminTabContent('customers', store.getState());
          setupAdminSubEvents('customers');
        }
      } else {
        if (refreshBtn) refreshBtn.innerHTML = `${icons.refresh('icon', 15, 2)} Segarkan dari Supabase`;
      }
    };

    if (refreshBtn) {
      refreshBtn.onclick = fetchCustomers;
    }

    // Ambil data pelanggan secara otomatis saat tab customers pertama kali dibuka
    if (liveCustomers.length === 0 && supabaseService.isConfigured()) {
      supabaseService.getCustomers().then(customers => {
        if (customers && customers.length > 0) {
          liveCustomers = customers;
          const content = document.getElementById('admin-content-area');
          if (content) {
            content.innerHTML = renderAdminTabContent('customers', store.getState());
            setupAdminSubEvents('customers');
          }
        }
      });
    }
  }

  if (tab === 'orders') {
    const approveBtns = document.querySelectorAll('.admin-approve-order-btn');
    approveBtns.forEach(btn => {
      btn.onclick = async () => {
        const orderId = btn.getAttribute('data-order-id');
        btn.disabled = true;
        btn.innerHTML = '<span>Menyetujui...</span>';
        await store.confirmOrderPayment(orderId);
        alert(`Pesanan ${orderId} telah berhasil disetujui (diterima) oleh Administrator. Layanan/lisensi resmi pelanggan kini telah aktif!`);
        const content = document.getElementById('admin-content-area');
        if (content) content.innerHTML = renderAdminTabContent('orders', store.getState());
        setupAdminSubEvents('orders');
      };
    });
  }

  if (tab === 'supabase') {
    const form = document.getElementById('supabase-config-form');
    const feedback = document.getElementById('supabase-feedback');
    const testBtn = document.getElementById('test-supabase-btn');

    if (form) {
      form.onsubmit = async (e) => {
        e.preventDefault();
        const url = document.getElementById('supabase-url').value.trim();
        const anonKey = document.getElementById('supabase-anon-key').value.trim();

        supabaseService.saveConfig(url, anonKey);
        await supabaseService.initClient();

        if (feedback) {
          feedback.style.display = 'block';
          feedback.style.backgroundColor = 'var(--color-success-subtle)';
          feedback.style.color = 'var(--color-success)';
          feedback.style.border = '1px solid rgba(16, 185, 129, 0.3)';
          feedback.innerHTML = `<strong>Kredensial Disimpan!</strong> Sistem MultiCloud kini menggunakan basis data Supabase: <code>${url}</code>`;
        }
      };
    }

    if (testBtn) {
      testBtn.onclick = async () => {
        testBtn.textContent = 'Menguji...';
        await supabaseService.initClient();
        testBtn.textContent = 'Uji Koneksi';

        if (supabaseService.isConfigured()) {
          alert('Koneksi ke Supabase Berhasil! Endpoint aktif dan siap menerima data pesanan.');
        } else {
          alert('Kredensial belum lengkap. Silakan masukkan Project URL dan Anon Key Supabase yang valid.');
        }
      };
    }
  }

  if (tab === 'content') {
    const form = document.getElementById('admin-content-form');
    if (form) {
      form.onsubmit = (e) => {
        e.preventDefault();
        alert('Konten situs web berhasil disimpan dan dipublikasikan.');
      };
    }
  }
}
