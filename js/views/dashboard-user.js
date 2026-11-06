/**
 * MultiCloud - Dasbor Pengguna (User Dashboard)
 * Ditulis sesuai kaidah Bahasa Indonesia baku (KBBI).
 * Modul:
 * - Ringkasan Akun
 * - Pesanan Saya
 * - Layanan Saya
 * - Produk Saya
 * - Riwayat Transaksi
 * - Pengaturan Profil
 * - Tiket Bantuan
 */

import { icons } from '../icons.js';
import { store } from '../state.js';
import { printInvoiceReceipt } from '../components/modal.js';

let activeUserTab = 'overview';
let activeOrderFilter = 'pending'; // 'pending' | 'all' | 'completed'

export function renderUserDashboard(tab = 'overview') {
  activeUserTab = tab;
  const state = store.getState();
  const user = state.currentUser || {
    name: 'Pengembang Tamu',
    email: 'tamu@multicloud.id',
    company: 'Mandiri',
    avatar: 'PT'
  };

  // Filter data khusus milik pengguna yang sedang login berdasarkan email
  const userEmail = (user.email || '').toLowerCase().trim();
  const userOrders = state.orders.filter(o => (o.userEmail || '').toLowerCase().trim() === userEmail);
  const userPendingOrders = userOrders.filter(o => o.status !== 'Selesai');
  const userServices = state.services.filter(s => (s.userEmail || '').toLowerCase().trim() === userEmail);
  const userProducts = state.digitalProducts.filter(p => (p.accountEmail || '').toLowerCase().trim() === userEmail);
  const userTransactions = state.transactions.filter(t => (t.userEmail || '').toLowerCase().trim() === userEmail);
  const userTickets = (state.tickets || []).filter(t => !t.userEmail || (t.userEmail || '').toLowerCase().trim() === userEmail);

  return `
    <div class="dashboard-container">
      <!-- Bilah Sisi Pengguna -->
      <aside class="dashboard-sidebar" aria-label="Menu Dasbor Pengguna">
        <div>
          <!-- Profil Singkat Pengguna -->
          <div class="dashboard-user-card">
            <div class="user-avatar">${user.avatar || 'MC'}</div>
            <div class="user-meta">
              <span class="user-name">${user.name}</span>
              <span class="user-role-badge">Klien Terverifikasi</span>
            </div>
          </div>

          <!-- Navigasi Dasbor -->
          <nav class="sidebar-nav">
            <button class="sidebar-nav-item ${activeUserTab === 'overview' ? 'active' : ''}" data-tab="overview">
              ${icons.layoutDashboard('icon', 18, 2)}
              <span>Ringkasan Akun</span>
            </button>
            <button class="sidebar-nav-item ${activeUserTab === 'orders' ? 'active' : ''}" data-tab="orders">
              ${icons.shoppingCart('icon', 18, 2)}
              <span>Pesanan Saya</span>
              ${userPendingOrders.length > 0 ? `<span class="sidebar-badge" style="background-color: var(--color-warning); color: #fff;">${userPendingOrders.length}</span>` : ''}
            </button>
            <button class="sidebar-nav-item ${activeUserTab === 'services' ? 'active' : ''}" data-tab="services">
              ${icons.server('icon', 18, 2)}
              <span>Layanan Saya</span>
              ${userServices.length > 0 ? `<span class="sidebar-badge">${userServices.length}</span>` : ''}
            </button>
            <button class="sidebar-nav-item ${activeUserTab === 'products' ? 'active' : ''}" data-tab="products">
              ${icons.package('icon', 18, 2)}
              <span>Produk Saya</span>
              ${userProducts.length > 0 ? `<span class="sidebar-badge">${userProducts.length}</span>` : ''}
            </button>
            <button class="sidebar-nav-item ${activeUserTab === 'transactions' ? 'active' : ''}" data-tab="transactions">
              ${icons.receipt('icon', 18, 2)}
              <span>Riwayat Transaksi</span>
            </button>
            <button class="sidebar-nav-item ${activeUserTab === 'invoices' ? 'active' : ''}" data-tab="invoices">
              ${icons.fileText ? icons.fileText('icon', 18, 2) : icons.receipt('icon', 18, 2)}
              <span>Faktur / Invoice</span>
              ${userOrders.filter(o => o.status === 'Selesai').length > 0 ? `<span class="sidebar-badge">${userOrders.filter(o => o.status === 'Selesai').length}</span>` : ''}
            </button>
            <button class="sidebar-nav-item ${activeUserTab === 'tickets' ? 'active' : ''}" data-tab="tickets">
              ${icons.ticket('icon', 18, 2)}
              <span>Tiket Bantuan</span>
            </button>
            <button class="sidebar-nav-item ${activeUserTab === 'profile' ? 'active' : ''}" data-tab="profile">
              ${icons.settings('icon', 18, 2)}
              <span>Pengaturan Profil</span>
            </button>
          </nav>
        </div>

        <div class="sidebar-footer">
          <a href="#/docs" class="sidebar-nav-item" style="color: var(--text-muted);">
            ${icons.helpCircle('icon', 18, 2)}
            <span>Pusat Dokumentasi</span>
          </a>
          <button class="sidebar-nav-item" id="dash-logout-btn" style="color: var(--color-danger);">
            ${icons.logout('icon', 18, 2)}
            <span>Keluar Akun</span>
          </button>
        </div>
      </aside>

      <!-- Konten Utama Dasbor Pengguna -->
      <main class="dashboard-content" id="dashboard-content-area">
        ${renderTabContent(activeUserTab, state, { userOrders, userServices, userProducts, userTransactions, userTickets })}
      </main>
    </div>
  `;
}

function renderTabContent(tab, state, filteredData = null) {
  const formatRp = (num) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);

  const user = state.currentUser || {};
  const userEmail = (user.email || '').toLowerCase().trim();

  const orders = filteredData?.userOrders || state.orders.filter(o => (o.userEmail || '').toLowerCase().trim() === userEmail);
  const services = filteredData?.userServices || state.services.filter(s => (s.userEmail || '').toLowerCase().trim() === userEmail);
  const products = filteredData?.userProducts || state.digitalProducts.filter(p => (p.accountEmail || '').toLowerCase().trim() === userEmail);
  const transactions = filteredData?.userTransactions || state.transactions.filter(t => (t.userEmail || '').toLowerCase().trim() === userEmail);
  const tickets = filteredData?.userTickets || (state.tickets || []).filter(t => !t.userEmail || (t.userEmail || '').toLowerCase().trim() === userEmail);

  switch (tab) {
    case 'orders':
      let displayOrders = orders;
      if (activeOrderFilter === 'pending') {
        displayOrders = orders.filter(o => o.status !== 'Selesai');
      } else if (activeOrderFilter === 'completed') {
        displayOrders = orders.filter(o => o.status === 'Selesai');
      }

      const pendingCount = orders.filter(o => o.status !== 'Selesai').length;
      const completedCount = orders.filter(o => o.status === 'Selesai').length;

      return `
        <div class="dash-header">
          <div>
            <h1 class="dash-title">Pesanan Saya</h1>
            <p class="dash-subtitle">Pantau proses tagihan faktur dan status aktivasi layanan digital Anda.</p>
          </div>
          <a href="#/products" class="btn btn-primary btn-sm">
            ${icons.plus('icon', 16, 2)} Pesan Produk Baru
          </a>
        </div>

        <!-- Filter Tab Kategori Pesanan -->
        <div style="display: flex; gap: 0.5rem; margin-bottom: 1.25rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
          <button class="btn btn-sm ${activeOrderFilter === 'pending' ? 'btn-primary' : 'btn-outline'} order-filter-btn" data-filter="pending">
            ${icons.clock('icon', 14, 2)} Menunggu / Sedang Diproses (${pendingCount})
          </button>
          <button class="btn btn-sm ${activeOrderFilter === 'completed' ? 'btn-primary' : 'btn-outline'} order-filter-btn" data-filter="completed">
            ${icons.check('icon', 14, 2)} Selesai & Aktif (${completedCount})
          </button>
          <button class="btn btn-sm ${activeOrderFilter === 'all' ? 'btn-primary' : 'btn-outline'} order-filter-btn" data-filter="all">
            Semua Riwayat (${orders.length})
          </button>
        </div>

        <div class="dash-card">
          <div class="dash-table-wrap">
            <table class="dash-table">
              <thead>
                <tr>
                  <th>Nomor Faktur</th>
                  <th>Item / Layanan</th>
                  <th>Pilihan Paket</th>
                  <th>Total Biaya</th>
                  <th>Metode Pembayaran</th>
                  <th>Status</th>
                  <th>Tindakan / Lisensi</th>
                </tr>
              </thead>
              <tbody>
                ${displayOrders.length === 0 ? `
                  <tr>
                    <td colspan="7" style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
                      ${activeOrderFilter === 'pending'
                        ? 'Tidak ada pesanan yang sedang menunggu. Semua pesanan Anda telah selesai dan aktif di tab <strong>Layanan Saya</strong> atau <strong>Produk Saya</strong>.'
                        : 'Tidak ada data pesanan pada filter ini.'}
                    </td>
                  </tr>
                ` : displayOrders.map(o => `
                  <tr>
                    <td><strong style="color: var(--text-primary); font-family: var(--font-mono);">${o.invoiceNumber || o.id}</strong></td>
                    <td><strong style="color: var(--text-primary);">${o.itemTitle}</strong></td>
                    <td>${o.package}</td>
                    <td><strong style="color: var(--text-primary);">${formatRp(o.amount)}</strong></td>
                    <td>${o.paymentMethod}</td>
                    <td>
                      <span class="status-pill ${o.status === 'Selesai' ? 'success' : o.status === 'Sedang Diproses' ? 'info' : 'warning'}">
                        ${o.status === 'Selesai' ? icons.check('icon', 12, 2) : icons.clock('icon', 12, 2)}
                        <span>${o.status}</span>
                      </span>
                    </td>
                    <td>
                      ${o.status === 'Selesai' ? `
                        <div style="display: flex; gap: 0.35rem; align-items: center;">
                          <button class="btn btn-outline btn-xs print-user-invoice-btn" data-order-id="${o.id}" title="Cetak Faktur Resmi">
                            ${icons.printer ? icons.printer('icon', 13, 2) : icons.fileText('icon', 13, 2)}
                            <span>Cetak Faktur</span>
                          </button>
                          <a href="#/dashboard/${o.category === 'cloud-hosting' || o.category === 'api-services' ? 'services' : 'products'}" class="btn btn-secondary btn-xs" style="text-decoration: none; display: inline-flex; align-items: center; gap: 0.25rem;">
                            ${icons.externalLink('icon', 12, 2)} Buka
                          </a>
                        </div>
                      ` : `
                        <span class="code-pill warning">
                          ${icons.clock('icon', 12, 2)}
                          <span>Menunggu Persetujuan Admin</span>
                        </span>
                      `}
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;

    case 'services':
      return `
        <div class="dash-header">
          <div>
            <h1 class="dash-title">Layanan Aktif Saya</h1>
            <p class="dash-subtitle">Daftar infrastruktur peladen awan, VPS Dedicated, dan integrasi API yang sedang berjalan.</p>
          </div>
          <a href="#/services" class="btn btn-primary btn-sm">
            ${icons.plus('icon', 16, 2)} Tambah Layanan
          </a>
        </div>

        ${services.length === 0 ? `
          <div class="dash-card" style="text-align: center; padding: 3rem; color: var(--text-muted);">
            <p style="margin-bottom: 1rem;">Anda belum memiliki layanan komputasi awan atau peladen aktif.</p>
            <a href="#/services" class="btn btn-outline btn-sm">Jelajahi Katalog Layanan</a>
          </div>
        ` : `
          <div class="grid-2">
            ${services.map(s => {
              const expDate = new Date(s.expiresAt || Date.now());
              const today = new Date();
              const diffTime = expDate - today;
              const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
              const isNearExpiry = diffDays <= 7 && diffDays >= 0;

              return `
              <div class="card" style="border-top: 3px solid ${isNearExpiry ? 'var(--color-warning)' : 'var(--color-primary)'};">
                <div class="card-header">
                  <div>
                    <h3 class="card-title">${s.name}</h3>
                    <span class="status-pill success">${s.status}</span>
                  </div>
                  <div class="card-icon-box">
                    ${icons.server('icon', 20, 2)}
                  </div>
                </div>

                ${isNearExpiry ? `
                  <div style="background-color: var(--color-warning-subtle); color: #d97706; padding: 0.6rem 0.85rem; border-radius: var(--radius-md); font-size: 0.8125rem; margin-bottom: 0.85rem; display: flex; align-items: center; gap: 0.5rem;">
                    ${icons.bell('icon', 16, 2)}
                    <span><strong>Pemberitahuan:</strong> Masa aktif berakhir dalam <strong>${diffDays} hari</strong> lagi!</span>
                  </div>
                ` : ''}

                <div style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1rem; display: flex; flex-direction: column; gap: 0.35rem;">
                  ${s.ip ? `<div><strong>Alamat IP Khusus:</strong> <span style="font-family: var(--font-mono);">${s.ip}</span></div>` : ''}
                  ${s.datacenter ? `<div><strong>Pusat Data:</strong> ${s.datacenter}</div>` : ''}
                  ${s.spec ? `<div><strong>Paket Spesifikasi:</strong> ${s.spec}</div>` : ''}
                  ${s.quotaUsed ? `<div><strong>Penggunaan Kuota:</strong> ${s.quotaUsed}</div>` : ''}
                  <div style="background-color: var(--bg-surface-secondary); padding: 0.5rem 0.75rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); margin-top: 0.25rem;">
                    <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Periode Tagihan & Masa Aktif Layanan:</div>
                    <strong style="color: var(--color-primary); font-family: var(--font-mono); font-size: 0.875rem;">
                      ${s.periodText || `${s.startDate || s.expiresAt} - ${s.expiresAt}`}
                    </strong>
                  </div>
                </div>

                <!-- Pengaturan Pembayaran Otomatis (Auto-Renew) -->
                <div style="background-color: var(--bg-surface-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 0.75rem 1rem; margin-bottom: 1rem; display: flex; justify-content: space-between; align-items: center;">
                  <div>
                    <strong style="font-size: 0.8125rem; color: var(--text-primary); display: block;">Perpanjangan Otomatis (Auto-Renew)</strong>
                    <span style="font-size: 0.75rem; color: var(--text-muted);">
                      ${s.autoRenew ? 'Tagihan otomatis dibuat & masa aktif diupdate otomatis' : 'Layanan tidak akan diperpanjang otomatis'}
                    </span>
                  </div>
                  <label class="toggle-switch" style="position: relative; display: inline-block; width: 44px; height: 24px;">
                    <input type="checkbox" class="toggle-autorenew-input" data-service-id="${s.id}" ${s.autoRenew ? 'checked' : ''} style="opacity: 0; width: 0; height: 0;">
                    <span class="toggle-slider" style="position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: ${s.autoRenew ? 'var(--color-primary)' : '#cbd5e1'}; border-radius: 24px; transition: .2s;">
                      <span style="position: absolute; content: ''; height: 18px; width: 18px; left: ${s.autoRenew ? '23px' : '3px'}; bottom: 3px; background-color: white; border-radius: 50%; transition: .2s;"></span>
                    </span>
                  </label>
                </div>

                <div class="card-footer" style="display: flex; gap: 0.5rem; justify-content: space-between; align-items: center;">
                  <button class="btn btn-primary btn-sm user-renew-service-btn" data-service-id="${s.id}">
                    ${icons.refresh ? icons.refresh('icon', 14, 2) : icons.repeat('icon', 14, 2)} Perpanjang Sekarang
                  </button>
                  <button class="btn btn-ghost btn-sm" style="color: var(--color-primary);">Akses Konsol Web</button>
                </div>
              </div>
            `;
            }).join('')}
          </div>
        `}
      `;

    case 'products':
      return `
        <div class="dash-header">
          <div>
            <h1 class="dash-title">Produk & Lisensi AI Saya</h1>
            <p class="dash-subtitle">Akses lisensi resmi akun kecerdasan buatan dan piranti lunak yang terdaftar.</p>
          </div>
          <a href="#/products" class="btn btn-primary btn-sm">
            ${icons.plus('icon', 16, 2)} Beli Lisensi Baru
          </a>
        </div>

        ${products.length === 0 ? `
          <div class="dash-card" style="text-align: center; padding: 3rem; color: var(--text-muted);">
            <p style="margin-bottom: 1rem;">Anda belum memiliki lisensi produk digital aktif.</p>
            <a href="#/products" class="btn btn-outline btn-sm">Lihat Pilihan Produk</a>
          </div>
        ` : `
          <div class="grid-2">
            ${products.map(p => `
              <div class="card">
                <div class="card-header">
                  <div>
                    <h3 class="card-title">${p.name}</h3>
                    <span class="status-pill success">${p.status}</span>
                  </div>
                  <div class="card-icon-box accent">
                    ${icons.sparkles('icon', 20, 2)}
                  </div>
                </div>
                <div style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1rem; display: flex; flex-direction: column; gap: 0.35rem;">
                  <div><strong>Surel Akun Tertaut:</strong> ${p.accountEmail}</div>
                  <div><strong>Tipe Lisensi:</strong> ${p.licenseType}</div>
                  <div><strong>Masa Berlaku:</strong> ${p.expiresAt}</div>
                </div>
                <div class="card-footer">
                  <button class="btn btn-outline btn-sm">Periksa Status Lisensi</button>
                  <button class="btn btn-secondary btn-sm">Perpanjang Langganan</button>
                </div>
              </div>
            `).join('')}
          </div>
        `}
      `;

    case 'transactions':
      return `
        <div class="dash-header">
          <div>
            <h1 class="dash-title">Riwayat Transaksi Keuangan</h1>
            <p class="dash-subtitle">Catatan mutasi pelunasan pembayaran tagihan layanan digital Anda.</p>
          </div>
        </div>

        <div class="dash-card">
          <div class="dash-table-wrap">
            <table class="dash-table">
              <thead>
                <tr>
                  <th>Nomor Transaksi</th>
                  <th>Keterangan Pesanan</th>
                  <th>Kanal Pembayaran</th>
                  <th>Nominal</th>
                  <th>Waktu Konfirmasi</th>
                  <th>Status Pembayaran</th>
                </tr>
              </thead>
              <tbody>
                ${transactions.length === 0 ? `
                  <tr>
                    <td colspan="6" style="text-align: center; padding: 2.5rem; color: var(--text-muted);">
                      Belum ada riwayat transaksi keuangan.
                    </td>
                  </tr>
                ` : transactions.map(t => `
                  <tr>
                    <td><strong style="color: var(--text-primary); font-family: var(--font-mono);">${t.id}</strong></td>
                    <td><strong style="color: var(--text-primary);">${t.description}</strong></td>
                    <td>${t.method}</td>
                    <td><strong style="color: var(--text-primary);">${formatRp(t.amount)}</strong></td>
                    <td>${t.date}</td>
                    <td>
                      <span class="status-pill ${t.status === 'Berhasil' ? 'success' : 'warning'}">
                        ${t.status}
                      </span>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;

    case 'invoices':
      const completedOrders = orders.filter(o => o.status === 'Selesai');
      return `
        <div class="dash-header">
          <div>
            <h1 class="dash-title">Daftar Faktur Resmi (Invoice)</h1>
            <p class="dash-subtitle">Arsip dokumen faktur pajak sah yang dapat diunduh dan dicetak dalam format PDF.</p>
          </div>
        </div>

        <div class="dash-card">
          <div class="dash-table-wrap">
            <table class="dash-table">
              <thead>
                <tr>
                  <th>Nomor Faktur</th>
                  <th>Produk / Layanan</th>
                  <th>Paket Durasi</th>
                  <th>Total Biaya</th>
                  <th>Metode Pembayaran</th>
                  <th>Status Faktur</th>
                  <th>Aksi Unduh / Cetak</th>
                </tr>
              </thead>
              <tbody>
                ${completedOrders.length === 0 ? `
                  <tr>
                    <td colspan="7" style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
                      Belum ada faktur yang lunas/terverifikasi. Faktur resmi akan terbit setelah pesanan berhasil disetujui.
                    </td>
                  </tr>
                ` : completedOrders.map(inv => `
                  <tr>
                    <td><strong style="color: var(--text-primary); font-family: var(--font-mono);">${inv.invoiceNumber || inv.id}</strong></td>
                    <td><strong style="color: var(--text-primary);">${inv.itemTitle}</strong></td>
                    <td>${inv.package}</td>
                    <td><strong style="color: var(--text-primary);">${formatRp(inv.amount)}</strong></td>
                    <td>${inv.paymentMethod}</td>
                    <td>
                      <span class="status-pill success">
                        ${icons.check('icon', 12, 2)}
                        <span>LUNAS</span>
                      </span>
                    </td>
                    <td>
                      <button class="btn btn-outline-primary btn-sm print-user-invoice-btn" data-order-id="${inv.id}" style="display: inline-flex; align-items: center; gap: 0.35rem;">
                        ${icons.printer ? icons.printer('icon', 14, 2) : icons.fileText('icon', 14, 2)}
                        <span>Cetak PDF</span>
                      </button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;

    case 'tickets':
      return `
        <div class="dash-header">
          <div>
            <h1 class="dash-title">Tiket Bantuan Pelanggan</h1>
            <p class="dash-subtitle">Komunikasi langsung dengan teknisi ahli MultiCloud bersiaga 24 jam.</p>
          </div>
          <button class="btn btn-primary btn-sm" id="create-new-ticket-btn">
            ${icons.plus('icon', 16, 2)} Buat Tiket Bantuan
          </button>
        </div>

        <div class="dash-card">
          <div class="dash-table-wrap">
            <table class="dash-table">
              <thead>
                <tr>
                  <th>Nomor Tiket</th>
                  <th>Subjek Kendala</th>
                  <th>Departemen</th>
                  <th>Prioritas</th>
                  <th>Status</th>
                  <th>Pembaruan Terakhir</th>
                </tr>
              </thead>
              <tbody>
                ${tickets.length === 0 ? `
                  <tr>
                    <td colspan="6" style="text-align: center; padding: 2.5rem; color: var(--text-muted);">
                      Tidak ada tiket bantuan yang terbuka.
                    </td>
                  </tr>
                ` : tickets.map(t => `
                  <tr>
                    <td><strong style="color: var(--text-primary); font-family: var(--font-mono);">${t.id}</strong></td>
                    <td><strong style="color: var(--text-primary);">${t.subject}</strong></td>
                    <td>${t.department}</td>
                    <td>${t.priority}</td>
                    <td>
                      <span class="status-pill ${t.status === 'Selesai' ? 'success' : 'info'}">
                        ${t.status}
                      </span>
                    </td>
                    <td>${t.lastUpdate}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;

    case 'profile':
      const u = state.currentUser;
      return `
        <div class="dash-header">
          <div>
            <h1 class="dash-title">Pengaturan Profil Pengguna</h1>
            <p class="dash-subtitle">Kelola informasi data diri, alamat surel, nomor telepon, dan perusahaan Anda.</p>
          </div>
        </div>

        <div class="card" style="max-width: 650px; padding: 2rem;">
          <form id="profile-settings-form">
            <div class="form-group">
              <label class="form-label" for="prof-name">Nama Lengkap</label>
              <input class="form-input" id="prof-name" type="text" value="${u?.name || ''}" />
            </div>

            <div class="form-group">
              <label class="form-label" for="prof-email">Alamat Surel Terdaftar</label>
              <input class="form-input" id="prof-email" type="email" value="${u?.email || ''}" disabled style="background-color: var(--bg-surface-secondary);" />
            </div>

            <div class="form-group">
              <label class="form-label" for="prof-phone">Nomor Telepon / WhatsApp</label>
              <input class="form-input" id="prof-phone" type="tel" value="${u?.phone || '+62 812-3456-7890'}" />
            </div>

            <div class="form-group">
              <label class="form-label" for="prof-company">Nama Perusahaan / Organisasi</label>
              <input class="form-input" id="prof-company" type="text" value="${u?.company || 'Pengembang Mandiri'}" />
            </div>

            <button type="submit" class="btn btn-primary btn-md" style="margin-top: 1rem;">
              <span>Simpan Perubahan Data</span>
            </button>
          </form>
        </div>
      `;

    default: // overview
      // Periksa apakah ada layanan yang mendekati masa kedaluwarsa untuk memunculkan notifikasi
      const expiringServices = services.filter(s => {
        const expDate = new Date(s.expiresAt || Date.now());
        const diffDays = Math.ceil((expDate - new Date()) / (1000 * 60 * 60 * 24));
        return diffDays <= 7 && diffDays >= 0;
      });

      return `
        <div class="dash-header">
          <div>
            <h1 class="dash-title">Ringkasan Akun</h1>
            <p class="dash-subtitle">Selamat datang kembali, <strong>${state.currentUser?.name || 'Pengembang'}</strong>!</p>
          </div>
          <div class="flex items-center gap-2">
            <a href="#/services" class="btn btn-outline btn-sm">Beli Layanan</a>
            <a href="#/products" class="btn btn-primary btn-sm">Buka Katalog</a>
          </div>
        </div>

        ${expiringServices.length > 0 ? `
          <div style="background-color: var(--color-warning-subtle); border: 1px solid #f59e0b; border-radius: var(--radius-lg); padding: 1.25rem; margin-bottom: 1.5rem; display: flex; align-items: flex-start; gap: 1rem;">
            <div style="color: #d97706; flex-shrink: 0; margin-top: 2px;">
              ${icons.bell('icon', 22, 2)}
            </div>
            <div style="flex-grow: 1;">
              <strong style="color: #b45309; font-size: 0.9375rem; display: block; margin-bottom: 0.25rem;">
                Pemberitahuan Tagihan & Masa Aktif Layanan
              </strong>
              <div style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.5;">
                Anda memiliki <strong>${expiringServices.length} layanan</strong> yang akan berakhir dalam 7 hari ke depan. Fitur <strong>Perpanjangan Otomatis (Auto-Renew)</strong> aktif untuk memastikan peladen Anda tetap online tanpa gangguan.
              </div>
            </div>
            <button class="btn btn-sm btn-outline" onclick="window.location.hash='#/dashboard/services'" style="white-space: nowrap;">
              Kelola di Layanan Saya
            </button>
          </div>
        ` : ''}

        <div class="metrics-row">
          <div class="metric-card">
            <div class="metric-header">
              <span class="metric-title">Total Pesanan</span>
              ${icons.shoppingCart('icon', 18, 2)}
            </div>
            <div class="metric-val">${orders.length}</div>
            <div class="metric-trend">Seluruh transaksi Anda</div>
          </div>

          <div class="metric-card">
            <div class="metric-header">
              <span class="metric-title">Peladen Awan Aktif</span>
              ${icons.server('icon', 18, 2)}
            </div>
            <div class="metric-val">${services.length}</div>
            <div class="metric-trend">Keterandalan SLA 99,99%</div>
          </div>

          <div class="metric-card">
            <div class="metric-header">
              <span class="metric-title">Lisensi AI Berjalan</span>
              ${icons.sparkles('icon', 18, 2)}
            </div>
            <div class="metric-val">${products.length}</div>
            <div class="metric-trend">Status Resmi Terverifikasi</div>
          </div>

          <div class="metric-card">
            <div class="metric-header">
              <span class="metric-title">Tiket Bantuan</span>
              ${icons.ticket('icon', 18, 2)}
            </div>
            <div class="metric-val">${tickets.length}</div>
            <div class="metric-trend">Dukungan teknis aktif</div>
          </div>
        </div>

        <div class="dash-card">
          <div class="dash-card-header">
            <h3 class="dash-card-title">Pesanan Terakhir</h3>
            <button class="btn btn-ghost btn-sm" onclick="window.location.hash='#/dashboard/orders'">Lihat Semua</button>
          </div>
          <div class="dash-table-wrap">
            <table class="dash-table">
              <thead>
                <tr>
                  <th>Nomor Faktur</th>
                  <th>Layanan</th>
                  <th>Paket</th>
                  <th>Total Biaya</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                ${orders.length === 0 ? `
                  <tr>
                    <td colspan="5" style="text-align: center; padding: 2rem; color: var(--text-muted);">
                      Belum ada pesanan terbaru.
                    </td>
                  </tr>
                ` : orders.slice(0, 3).map(o => `
                  <tr>
                    <td><strong style="color: var(--text-primary); font-family: var(--font-mono);">${o.invoiceNumber || o.id}</strong></td>
                    <td><strong style="color: var(--text-primary);">${o.itemTitle}</strong></td>
                    <td>${o.package}</td>
                    <td><strong style="color: var(--text-primary);">${formatRp(o.amount)}</strong></td>
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

export function setupUserDashboardEvents() {
  const sidebarButtons = document.querySelectorAll('.dashboard-sidebar .sidebar-nav-item[data-tab]');
  sidebarButtons.forEach(btn => {
    btn.onclick = () => {
      const tab = btn.getAttribute('data-tab');
      sidebarButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeUserTab = tab;
      const content = document.getElementById('dashboard-content-area');
      if (content) {
        content.innerHTML = renderTabContent(tab, store.getState());
        setupSubEvents(tab);
      }
    };
  });

  const logoutBtn = document.getElementById('dash-logout-btn');
  if (logoutBtn) {
    logoutBtn.onclick = () => {
      store.logout();
      window.location.hash = '#/';
    };
  }

  setupSubEvents(activeUserTab);
}

function setupSubEvents(tab) {
  if (tab === 'orders') {
    const filterBtns = document.querySelectorAll('.order-filter-btn');
    filterBtns.forEach(btn => {
      btn.onclick = () => {
        activeOrderFilter = btn.getAttribute('data-filter');
        const content = document.getElementById('dashboard-content-area');
        if (content) {
          content.innerHTML = renderTabContent('orders', store.getState());
          setupSubEvents('orders');
        }
      };
    });

    const printBtns = document.querySelectorAll('.print-user-invoice-btn');
    printBtns.forEach(btn => {
      btn.onclick = () => {
        const orderId = btn.getAttribute('data-order-id');
        const order = store.getState().orders.find(o => o.id === orderId);
        if (order) printInvoiceReceipt(order);
      };
    });
  }

  if (tab === 'invoices') {
    const printBtns = document.querySelectorAll('.print-user-invoice-btn');
    printBtns.forEach(btn => {
      btn.onclick = () => {
        const orderId = btn.getAttribute('data-order-id');
        const order = store.getState().orders.find(o => o.id === orderId);
        if (order) printInvoiceReceipt(order);
      };
    });
  }

  if (tab === 'services') {
    const toggles = document.querySelectorAll('.toggle-autorenew-input');
    toggles.forEach(chk => {
      chk.onchange = () => {
        const serviceId = chk.getAttribute('data-service-id');
        const isAuto = store.toggleAutoRenew(serviceId);
        alert(`Perpanjangan Otomatis (Auto-Renew) untuk layanan ini sekarang ${isAuto ? 'AKTIF' : 'NONAKTIF'}.`);
        const content = document.getElementById('dashboard-content-area');
        if (content) {
          content.innerHTML = renderTabContent('services', store.getState());
          setupSubEvents('services');
        }
      };
    });

    const renewBtns = document.querySelectorAll('.user-renew-service-btn');
    renewBtns.forEach(btn => {
      btn.onclick = () => {
        const serviceId = btn.getAttribute('data-service-id');
        const updated = store.renewService(serviceId, 1);
        if (updated) {
          alert(`Layanan berhasil diperpanjang 1 bulan!\nPeriode baru: ${updated.periodText}\nMasa aktif baru hingga: ${updated.expiresAt}\nFaktur pembayaran baru otomatis diterbitkan di menu Faktur.`);
          const content = document.getElementById('dashboard-content-area');
          if (content) {
            content.innerHTML = renderTabContent('services', store.getState());
            setupSubEvents('services');
          }
        }
      };
    });
  }

  if (tab === 'tickets') {
    const btn = document.getElementById('create-new-ticket-btn');
    if (btn) {
      btn.onclick = () => {
        const subject = prompt('Tuliskan ringkasan kendala teknis atau pertanyaan Anda:');
        if (subject) {
          store.addTicket({ subject, department: 'Dukungan Komputasi Awan & Lisensi', priority: 'Biasa' });
          alert('Tiket bantuan berhasil dibuat. Tim teknis MultiCloud akan segera menindaklanjuti.');
          const content = document.getElementById('dashboard-content-area');
          if (content) content.innerHTML = renderTabContent('tickets', store.getState());
        }
      };
    }
  }

  if (tab === 'profile') {
    const form = document.getElementById('profile-settings-form');
    if (form) {
      form.onsubmit = (e) => {
        e.preventDefault();
        alert('Informasi profil Anda berhasil diperbarui.');
      };
    }
  }
}
