/**
 * MultiCloud - Halaman Katalog Layanan (Services View)
 * Ditulis sesuai kaidah Bahasa Indonesia baku (KBBI).
 */

import { icons } from '../icons.js';
import { serviceCategories, servicesList } from '../data/services.js';
import { openServiceDetailModal } from '../components/modal.js';

let currentCategory = 'all';
let currentSearch = '';

export function renderServicesPage(initialCategory = 'all') {
  currentCategory = initialCategory;
  currentSearch = '';

  return `
    <div class="page-header">
      <div class="container">
        <div class="breadcrumbs">
          <a href="#/">Beranda</a>
          ${icons.chevronRight('icon', 14, 2)}
          <span class="current">Layanan</span>
        </div>
        <div class="page-header-content">
          <h1 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 0.75rem;">Katalog Layanan Digital</h1>
          <p style="font-size: 1.125rem; color: var(--text-secondary); line-height: 1.6;">
            Pilih dari rangkaian solusi infrastruktur Komputasi Awan, Layanan API, langganan kecerdasan buatan resmi, dan piranti lunak digital untuk mendukung akselerasi bisnis Anda.
          </p>
        </div>
      </div>
    </div>

    <div class="container" style="padding-bottom: 5rem;">
      <!-- Bilah Penyaring & Pencarian -->
      <div class="services-filter-bar">
        <div class="filter-pills" id="services-category-pills">
          <button class="filter-pill ${currentCategory === 'all' ? 'active' : ''}" data-cat="all">
            Semua Layanan (${servicesList.length})
          </button>
          ${serviceCategories.map(cat => `
            <button class="filter-pill ${currentCategory === cat.id ? 'active' : ''}" data-cat="${cat.id}">
              ${cat.title}
            </button>
          `).join('')}
        </div>

        <div style="min-width: 280px; max-width: 380px; width: 100%;">
          <div class="search-wrapper">
            <span class="search-icon">${icons.search('icon', 18, 2)}</span>
            <input type="text" class="form-input search-input" id="services-search-input" placeholder="Cari layanan (misal: VPS, WhatsApp, Cursor)..." />
          </div>
        </div>
      </div>

      <!-- Kisi Layanan -->
      <div class="grid-2" id="services-grid-container">
        <!-- Dirender oleh fungsi updateServicesGrid -->
      </div>
    </div>
  `;
}

function updateServicesGrid() {
  const container = document.getElementById('services-grid-container');
  if (!container) return;

  const formatRp = (num) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);

  const filtered = servicesList.filter(srv => {
    const matchCategory = currentCategory === 'all' || srv.category === currentCategory;
    const matchSearch = currentSearch === '' ||
      srv.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
      srv.description.toLowerCase().includes(currentSearch.toLowerCase()) ||
      srv.tagline.toLowerCase().includes(currentSearch.toLowerCase());
    return matchCategory && matchSearch;
  }).sort((a, b) => (a.startingPrice || 0) - (b.startingPrice || 0));

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
        <div style="width: 56px; height: 56px; border-radius: var(--radius-full); background-color: var(--bg-surface-secondary); color: var(--text-muted); display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto;">
          ${icons.search('icon', 28, 2)}
        </div>
        <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem;">Tidak Ada Layanan yang Cocok</h3>
        <p style="color: var(--text-muted); font-size: 0.9375rem;">Coba sesuaikan kata kunci pencarian atau ubah penyaring kategori Anda.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(srv => `
    <div class="service-card">
      <div class="service-card-top">
        <div class="card-icon-box">
          ${icons[srv.icon] ? icons[srv.icon]('icon', 22, 2) : icons.cloud('icon', 22, 2)}
        </div>
        ${srv.officialLicense ? `
          <span class="service-badge-official">
            ${icons.shieldCheck('icon', 13, 2)}
            <span>Resmi</span>
          </span>
        ` : `
          <span class="badge badge-outline">MultiCloud</span>
        `}
      </div>

      <h3 class="service-name">${srv.name}</h3>
      <div class="service-tagline">${srv.tagline}</div>
      <p class="service-description">${srv.description}</p>

      <div class="service-features-list">
        ${(srv.features || []).slice(0, 3).map(f => `
          <div class="service-feature-row">
            <span style="color: var(--color-success);">${icons.check('icon', 15, 2)}</span>
            <span>${f}</span>
          </div>
        `).join('')}
      </div>

      <div class="service-card-bottom">
        <div class="service-price-block">
          <span class="service-price-title">Mulai dari</span>
          <div>
            <span class="service-price-amount">${formatRp(srv.startingPrice)}</span>
            <span class="service-price-period">${srv.priceUnit}</span>
          </div>
        </div>
        <button class="btn btn-outline-primary btn-sm service-item-view-btn" data-id="${srv.id}">
          <span>Lihat Rincian</span>
          ${icons.arrowRight('icon', 16, 2)}
        </button>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.service-item-view-btn').forEach(btn => {
    btn.onclick = () => {
      const id = btn.getAttribute('data-id');
      const item = servicesList.find(s => s.id === id);
      if (item) openServiceDetailModal(item);
    };
  });
}

export function setupServicesPageEvents() {
  updateServicesGrid();

  const pills = document.querySelectorAll('#services-category-pills .filter-pill');
  pills.forEach(pill => {
    pill.onclick = () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.getAttribute('data-cat');
      updateServicesGrid();
    };
  });

  const searchInput = document.getElementById('services-search-input');
  if (searchInput) {
    searchInput.oninput = (e) => {
      currentSearch = e.target.value.trim();
      updateServicesGrid();
    };
  }
}
