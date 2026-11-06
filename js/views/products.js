/**
 * MultiCloud - Halaman Katalog Produk Digital (Products View)
 * Ditulis sesuai kaidah Bahasa Indonesia baku (KBBI).
 */

import { icons } from '../icons.js';
import { productCategories, productsList } from '../data/products.js';
import { openOrderModal } from '../components/modal.js';

let currentCategory = 'all';
let currentSearch = '';
let currentSort = 'popular';

export function renderProductsPage(initialCategory = 'all') {
  currentCategory = initialCategory;
  currentSearch = '';
  currentSort = 'popular';

  return `
    <div class="page-header">
      <div class="container">
        <div class="breadcrumbs">
          <a href="#/">Beranda</a>
          ${icons.chevronRight('icon', 14, 2)}
          <span class="current">Produk</span>
        </div>
        <div class="page-header-content">
          <h1 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 0.75rem;">Katalog Produk Digital</h1>
          <p style="font-size: 1.125rem; color: var(--text-secondary); line-height: 1.6;">
            Jelajahi produk kecerdasan buatan berlisensi resmi, perkakas pengembang, dan lisensi piranti lunak dengan garansi legalitas 100% dan aktivasi instan.
          </p>
        </div>
      </div>
    </div>

    <div class="container" style="padding-bottom: 5rem;">
      <!-- Bilah Alat Penyaring & Pencarian -->
      <div class="catalog-toolbar">
        <div class="filter-pills" id="product-category-pills">
          ${productCategories.map(cat => `
            <button class="filter-pill ${currentCategory === cat.id ? 'active' : ''}" data-cat="${cat.id}">
              ${cat.label}
            </button>
          `).join('')}
        </div>

        <div class="catalog-search-sort">
          <div class="search-wrapper">
            <span class="search-icon">${icons.search('icon', 18, 2)}</span>
            <input type="text" class="form-input search-input" id="products-search-input" placeholder="Cari produk digital..." />
          </div>

          <div style="min-width: 170px;">
            <select class="form-select" id="products-sort-select" aria-label="Urutkan Produk">
              <option value="popular">Paling Populer</option>
              <option value="price-asc">Harga: Terendah</option>
              <option value="price-desc">Harga: Tertinggi</option>
              <option value="rating">Nilai Ulasan Tertinggi</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Kisi Produk -->
      <div class="grid-3" id="products-grid-container">
        <!-- Dirender oleh fungsi updateProductsGrid -->
      </div>
    </div>
  `;
}

function updateProductsGrid() {
  const container = document.getElementById('products-grid-container');
  if (!container) return;

  const formatRp = (num) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);

  let filtered = productsList.filter(prod => {
    const matchCat = currentCategory === 'all' || prod.category === currentCategory;
    const matchSearch = currentSearch === '' ||
      prod.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
      prod.shortDescription.toLowerCase().includes(currentSearch.toLowerCase()) ||
      prod.tagline.toLowerCase().includes(currentSearch.toLowerCase());
    return matchCat && matchSearch;
  });

  // Pengurutan
  if (currentSort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else {
    const order = { 'Terlaris': 1, 'Populer': 2, 'Baru': 3 };
    filtered.sort((a, b) => (order[a.badge] || 99) - (order[b.badge] || 99));
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
        <div style="width: 56px; height: 56px; border-radius: var(--radius-full); background-color: var(--bg-surface-secondary); color: var(--text-muted); display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto;">
          ${icons.search('icon', 28, 2)}
        </div>
        <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem;">Tidak Menemukan Produk</h3>
        <p style="color: var(--text-muted); font-size: 0.9375rem;">Coba gunakan kata kunci lain atau pilih penyaring Semua Produk.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(prod => `
    <div class="product-card">
      <div class="product-badges-row">
        <div class="product-badge-group">
          <span class="badge ${prod.badge === 'Terlaris' ? 'badge-bestseller' : 'badge-popular'}">
            ${prod.badge}
          </span>
          ${prod.isOfficialLicense ? `
            <span class="badge badge-success">
              ${icons.shieldCheck('icon', 12, 2)} Resmi
            </span>
          ` : ''}
        </div>
        <div class="product-rating">
          ${icons.star('icon', 14, 2)}
          <span>${prod.rating}</span>
          <span class="product-rating-count">(${prod.reviewsCount})</span>
        </div>
      </div>

      <h3 class="product-title">
        <a href="#/products/${prod.id}">${prod.name}</a>
      </h3>
      <div class="product-tagline">${prod.tagline}</div>
      <p class="product-desc">${prod.shortDescription}</p>

      <div class="product-features-mini">
        ${(prod.features || []).slice(0, 3).map(feat => `
          <div class="product-feature-pill">
            <span style="color: var(--color-success);">${icons.check('icon', 15, 2)}</span>
            <span>${feat}</span>
          </div>
        `).join('')}
      </div>

      <div class="product-card-footer">
        <div class="product-pricing">
          ${prod.originalPrice ? `<span class="original-price">${formatRp(prod.originalPrice)}</span>` : ''}
          <div>
            <span class="current-price">${formatRp(prod.price)}</span>
            <span style="font-size: 0.8125rem; color: var(--text-muted);">${prod.pricePeriod}</span>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <a href="#/products/${prod.id}" class="btn btn-outline btn-sm">Rincian</a>
          <button class="btn btn-primary btn-sm product-card-order-btn" data-id="${prod.id}">
            ${icons.shoppingCart('icon', 16, 2)}
            <span>Pesan Sekarang</span>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.product-card-order-btn').forEach(btn => {
    btn.onclick = () => {
      const prodId = btn.getAttribute('data-id');
      const prod = productsList.find(p => p.id === prodId);
      if (prod) {
        openOrderModal({
          itemTitle: prod.name,
          category: prod.category,
          packageName: prod.packages?.[0]?.name || 'Paket Standar',
          amount: prod.packages?.[0]?.price || prod.price
        });
      }
    };
  });
}

export function setupProductsPageEvents() {
  updateProductsGrid();

  const pills = document.querySelectorAll('#product-category-pills .filter-pill');
  pills.forEach(pill => {
    pill.onclick = () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.getAttribute('data-cat');
      updateProductsGrid();
    };
  });

  const searchInput = document.getElementById('products-search-input');
  if (searchInput) {
    searchInput.oninput = (e) => {
      currentSearch = e.target.value.trim();
      updateProductsGrid();
    };
  }

  const sortSelect = document.getElementById('products-sort-select');
  if (sortSelect) {
    sortSelect.onchange = (e) => {
      currentSort = e.target.value;
      updateProductsGrid();
    };
  }
}
