/**
 * MultiCloud - Halaman Katalog Produk Digital (Products View)
 * Ditulis sesuai kaidah Bahasa Indonesia baku (KBBI).
 */

import { icons } from '../icons.js';
import { productCategories, productsList } from '../data/products.js';
import { openOrderModal } from '../components/modal.js';
import { supabaseService } from '../supabase.js';

let currentCategory = 'all';
let currentSearch = '';
let currentSort = 'price-asc';
let catalogState = 'ready'; // 'loading' | 'ready' | 'error'
let catalogErrorMessage = '';
let catalogProducts = [...productsList];

function formatRp(num) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(num);
}

function getBadgeClass(badge) {
  if (badge === 'Terlaris') return 'badge-bestseller';
  if (badge === 'Baru') return 'badge-new';
  return 'badge-popular';
}

export function renderProductsPage(initialCategory = 'all') {
  const validCat = productCategories.some(c => c.id === initialCategory) ? initialCategory : 'all';
  currentCategory = validCat;
  currentSearch = '';
  currentSort = 'price-asc';
  catalogProducts = [...productsList];
  catalogState = 'ready';
  catalogErrorMessage = '';

  return `
    <div class="page-header page-header-compact">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Jejak Navigasi">
          <a href="#/">Beranda</a>
          ${icons.chevronRight('icon', 14, 2)}
          <span class="current" aria-current="page">Produk</span>
        </nav>
        <div class="page-header-content">
          <h1 style="font-size: 2.25rem; font-weight: 800; margin-bottom: 0.5rem;">Katalog Produk Digital</h1>
          <p style="font-size: 1.0625rem; color: var(--text-secondary); line-height: 1.55;">
            Pilih layanan dan lisensi resmi yang Anda butuhkan, lalu klik <strong>Pesan</strong> atau <strong>Rincian</strong> untuk melihat pilihan paket.
          </p>
        </div>
      </div>
    </div>

    <div class="container" style="padding-bottom: 5rem;">
      <!-- Bilah Alat Penyaring & Pencarian -->
      <div class="catalog-toolbar">
        <div class="filter-pills" id="product-category-pills" role="group" aria-label="Saring kategori produk">
          ${productCategories.map(cat => `
            <button
              type="button"
              class="filter-pill ${currentCategory === cat.id ? 'active' : ''}"
              data-cat="${cat.id}"
              aria-pressed="${currentCategory === cat.id}"
            >
              ${cat.label}
            </button>
          `).join('')}
        </div>

        <div class="catalog-search-sort">
          <div class="toolbar-field toolbar-field-grow">
            <label class="toolbar-label" for="products-search-input">Cari Produk</label>
            <div class="search-wrapper">
              <span class="search-icon">${icons.search('icon', 18, 2)}</span>
              <input
                type="search"
                class="form-input search-input"
                id="products-search-input"
                placeholder="Cari nama produk..."
              />
            </div>
          </div>

          <div class="toolbar-field toolbar-field-sort">
            <label class="toolbar-label" for="products-sort-select">Urutkan</label>
            <select class="form-select" id="products-sort-select">
              <option value="price-asc" selected>Harga: Terendah</option>
              <option value="price-desc">Harga: Tertinggi</option>
              <option value="popular">Paling Populer</option>
              <option value="rating">Ulasan Tertinggi</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Ringkasan Jumlah Produk -->
      <div class="catalog-section-bar">
        <span class="catalog-count-pill" id="catalog-results-count" aria-live="polite"></span>
      </div>

      <!-- Kisi Produk -->
      <div class="grid-2" id="products-grid-container">
        <!-- Dirender oleh updateProductsGrid -->
      </div>
    </div>
  `;
}

function updateProductsGrid() {
  const container = document.getElementById('products-grid-container');
  const countEl = document.getElementById('catalog-results-count');
  if (!container) return;

  if (catalogState === 'loading') {
    if (countEl) countEl.textContent = 'Memuat produk...';
    container.innerHTML = `
      <div class="catalog-state-box" role="status" aria-live="polite">
        <div class="catalog-state-icon">
          ${icons.refresh('icon', 26, 2)}
        </div>
        <h2 class="catalog-state-title">Memuat Katalog Produk</h2>
        <p class="catalog-state-desc">Menyiapkan daftar layanan dan lisensi resmi untuk Anda.</p>
      </div>
    `;
    return;
  }

  if (catalogState === 'error') {
    if (countEl) countEl.textContent = 'Gagal memuat';
    container.innerHTML = `
      <div class="catalog-state-box catalog-state-error" role="alert">
        <div class="catalog-state-icon error">
          ${icons.alertCircle('icon', 26, 2)}
        </div>
        <h2 class="catalog-state-title">Gagal Memuat Katalog Produk</h2>
        <p class="catalog-state-desc">${catalogErrorMessage || 'Terjadi gangguan saat memuat daftar produk. Silakan coba lagi.'}</p>
        <button type="button" class="btn btn-primary btn-sm" id="retry-catalog-load-btn">
          ${icons.refresh('icon', 16, 2)}
          <span>Muat Ulang</span>
        </button>
      </div>
    `;
    const retryBtn = document.getElementById('retry-catalog-load-btn');
    if (retryBtn) {
      retryBtn.onclick = () => {
        catalogState = 'ready';
        catalogProducts = [...productsList];
        updateProductsGrid();
      };
    }
    return;
  }

  let filtered = catalogProducts.filter(prod => {
    const matchCat = currentCategory === 'all' || prod.category === currentCategory;
    const q = currentSearch.toLowerCase();
    const matchSearch =
      q === '' ||
      prod.name.toLowerCase().includes(q) ||
      prod.shortDescription.toLowerCase().includes(q) ||
      prod.tagline.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  if (currentSort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'rating') {
    filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  } else {
    const order = { 'Terlaris': 1, 'Populer': 2, 'Baru': 3 };
    filtered.sort((a, b) => (order[a.badge] || 99) - (order[b.badge] || 99));
  }

  if (countEl) {
    countEl.textContent = `Menampilkan ${filtered.length} produk`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="catalog-state-box">
        <div class="catalog-state-icon">
          ${icons.search('icon', 26, 2)}
        </div>
        <h2 class="catalog-state-title">Produk Tidak Ditemukan</h2>
        <p class="catalog-state-desc">Tidak ada produk yang cocok dengan pencarian atau kategori yang dipilih.</p>
        <button type="button" class="btn btn-outline btn-sm" id="reset-catalog-filter-btn">
          <span>Tampilkan Semua Produk</span>
        </button>
      </div>
    `;
    const resetBtn = document.getElementById('reset-catalog-filter-btn');
    if (resetBtn) {
      resetBtn.onclick = () => {
        currentCategory = 'all';
        currentSearch = '';
        const searchInput = document.getElementById('products-search-input');
        if (searchInput) searchInput.value = '';
        document.querySelectorAll('#product-category-pills .filter-pill').forEach(p => {
          const isAll = p.getAttribute('data-cat') === 'all';
          p.classList.toggle('active', isAll);
          p.setAttribute('aria-pressed', String(isAll));
        });
        updateProductsGrid();
      };
    }
    return;
  }

  container.innerHTML = filtered.map(prod => `
    <article class="product-card">
      <div class="product-badges-row">
        <div class="product-badge-group">
          <span class="badge ${getBadgeClass(prod.badge)}">${prod.badge}</span>
          ${prod.isOfficialLicense ? `
            <span class="badge badge-success">
              ${icons.shieldCheck('icon', 12, 2)} Resmi
            </span>
          ` : ''}
        </div>
        ${prod.rating && prod.reviewsCount > 0 ? `
          <div class="product-rating" aria-label="Nilai ${prod.rating} dari ${prod.reviewsCount} ulasan">
            ${icons.star('icon', 14, 2)}
            <span>${prod.rating}</span>
            <span class="product-rating-count">(${prod.reviewsCount})</span>
          </div>
        ` : ''}
      </div>

      <div class="product-card-head">
        <div class="card-icon-box" style="width: 42px; height: 42px;">
          ${icons[prod.icon] ? icons[prod.icon]('icon', 22, 2) : icons.package('icon', 22, 2)}
        </div>
        <div>
          <h2 class="product-title">
            <a href="#/products/${prod.id}">${prod.name}</a>
          </h2>
          <div class="product-tagline">${prod.tagline}</div>
        </div>
      </div>

      <p class="product-desc">${prod.shortDescription}</p>

      <div class="product-features-mini">
        ${(prod.features || []).slice(0, 2).map(feat => `
          <div class="product-feature-pill">
            <span class="feature-check-icon">${icons.check('icon', 15, 2)}</span>
            <span>${feat}</span>
          </div>
        `).join('')}
      </div>

      <div class="product-card-footer">
        <div class="product-pricing">
          ${prod.originalPrice ? `<span class="original-price">${formatRp(prod.originalPrice)}</span>` : ''}
          <div>
            <span class="current-price">${formatRp(prod.price)}</span>
            <span class="price-period-text">${prod.pricePeriod}</span>
          </div>
        </div>
        <div class="product-card-actions">
          <a href="#/products/${prod.id}" class="btn btn-outline btn-sm">Rincian</a>
          <button type="button" class="btn btn-primary btn-sm product-card-order-btn" data-id="${prod.id}">
            ${icons.shoppingCart('icon', 16, 2)}
            <span>Pesan</span>
          </button>
        </div>
      </div>
    </article>
  `).join('');

  container.querySelectorAll('.product-card-order-btn').forEach(btn => {
    btn.onclick = () => {
      const prodId = btn.getAttribute('data-id');
      const prod = catalogProducts.find(p => p.id === prodId);
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

async function syncLiveProductsIfAvailable() {
  if (!supabaseService.isConfigured()) return;
  try {
    const dbProducts = await supabaseService.getProducts();
    if (Array.isArray(dbProducts) && dbProducts.length > 0) {
      const mergedMap = new Map();
      productsList.forEach(item => mergedMap.set(item.id, item));
      dbProducts.forEach(row => {
        if (row && row.id && !mergedMap.has(row.id)) {
          mergedMap.set(row.id, {
            id: row.id,
            slug: row.id,
            category: row.category_id || 'software-licenses',
            name: row.name,
            tagline: row.tagline || 'Produk Digital Resmi MultiCloud',
            badge: row.badge || 'Populer',
            rating: row.reviews_count > 0 ? Number(row.rating) : null,
            reviewsCount: Number(row.reviews_count || 0),
            shortDescription: row.short_description || '',
            fullDescription: row.full_description || row.short_description || '',
            price: Number(row.price || 0),
            originalPrice: row.original_price ? Number(row.original_price) : null,
            pricePeriod: row.price_period || '/bulan',
            icon: row.icon || 'package',
            isOfficialLicense: row.is_official_license !== false,
            packages: Array.isArray(row.packages) && row.packages.length > 0
              ? row.packages
              : [{ id: `${row.id}-std`, name: 'Paket Standar', price: Number(row.price || 0), period: '1 Bulan', note: 'Aktivasi resmi' }],
            features: Array.isArray(row.features) ? row.features : [],
            specifications: Array.isArray(row.specifications) ? row.specifications : [],
            faq: []
          });
        }
      });
      catalogProducts = Array.from(mergedMap.values());
      if (document.getElementById('products-grid-container')) {
        updateProductsGrid();
      }
    }
  } catch (err) {
    console.warn('[MultiCloud] Sinkronisasi produk opsional dilewati:', err);
  }
}

export function setupProductsPageEvents() {
  updateProductsGrid();
  syncLiveProductsIfAvailable();

  const pills = document.querySelectorAll('#product-category-pills .filter-pill');
  pills.forEach(pill => {
    pill.onclick = () => {
      pills.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-pressed', 'false');
      });
      pill.classList.add('active');
      pill.setAttribute('aria-pressed', 'true');
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
