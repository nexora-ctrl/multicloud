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
let currentSort = 'popular';
let catalogState = 'ready'; // 'loading' | 'ready' | 'error'
let catalogErrorMessage = '';
let catalogProducts = [...productsList];
let spotlightPkgIndex = 0;

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
  currentSort = 'popular';
  spotlightPkgIndex = 0;
  catalogProducts = [...productsList];
  catalogState = 'ready';
  catalogErrorMessage = '';

  return `
    <div class="page-header">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Jejak Navigasi">
          <a href="#/">Beranda</a>
          ${icons.chevronRight('icon', 14, 2)}
          <span class="current" aria-current="page">Produk</span>
        </nav>
        <div class="page-header-content">
          <h1 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 0.75rem;">Katalog Produk Digital</h1>
          <p style="font-size: 1.125rem; color: var(--text-secondary); line-height: 1.6;">
            Jelajahi piranti desain kreatif seperti Canva Premium, langganan kecerdasan buatan berlisensi resmi, perkakas pengembang, dan lisensi piranti lunak bergaransi penuh.
          </p>
        </div>
      </div>
    </div>

    <div class="container" style="padding-bottom: 5rem;">
      <!-- Sorotan Layanan Baru: Canva Premium -->
      <section id="canva-spotlight-section" aria-label="Sorotan Layanan Canva Premium"></section>

      <!-- Bilah Alat Penyaring & Pencarian -->
      <div class="catalog-toolbar">
        <div class="filter-pills" id="product-category-pills" role="group" aria-label="Saring berdasarkan kategori produk">
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
                placeholder="Contoh: Canva Premium, Cursor, VPS..."
              />
            </div>
          </div>

          <div class="toolbar-field toolbar-field-sort">
            <label class="toolbar-label" for="products-sort-select">Urutkan Katalog</label>
            <select class="form-select" id="products-sort-select">
              <option value="popular">Unggulan & Terbaru</option>
              <option value="price-asc">Harga: Terendah</option>
              <option value="price-desc">Harga: Tertinggi</option>
              <option value="rating">Nilai Ulasan Tertinggi</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Kepala Daftar Katalog -->
      <div class="catalog-section-bar">
        <h2 class="catalog-section-heading" id="catalog-results-heading">Daftar Katalog Produk</h2>
        <span class="catalog-count-pill" id="catalog-results-count" aria-live="polite"></span>
      </div>

      <!-- Kisi Produk -->
      <div class="grid-3" id="products-grid-container">
        <!-- Dirender oleh updateProductsGrid -->
      </div>
    </div>
  `;
}

function renderCanvaSpotlight() {
  const spotlightEl = document.getElementById('canva-spotlight-section');
  if (!spotlightEl) return;

  const canvaProduct = catalogProducts.find(p => p.id === 'prod-canva-premium');
  const shouldShow =
    canvaProduct &&
    catalogState === 'ready' &&
    currentSearch === '' &&
    (currentCategory === 'all' || currentCategory === 'design-creative');

  if (!shouldShow) {
    spotlightEl.innerHTML = '';
    spotlightEl.style.display = 'none';
    return;
  }

  spotlightEl.style.display = 'block';
  const selectedPkg = canvaProduct.packages[spotlightPkgIndex] || canvaProduct.packages[0];

  spotlightEl.innerHTML = `
    <div class="product-spotlight">
      <div class="product-spotlight-info">
        <div class="product-spotlight-badges">
          <span class="badge badge-new">Layanan Baru: Desain & Kreatif</span>
          <span class="badge badge-success">
            ${icons.shieldCheck('icon', 13, 2)}
            <span>Undangan Resmi ke Surel Pribadi</span>
          </span>
        </div>

        <div class="product-spotlight-title-row">
          <div class="card-icon-box" style="width: 52px; height: 52px;">
            ${icons.palette('icon', 26, 2)}
          </div>
          <div>
            <h2 class="product-spotlight-title">
              <a href="#/products/${canvaProduct.id}">${canvaProduct.name}</a>
            </h2>
            <p class="product-spotlight-tagline">${canvaProduct.tagline}</p>
          </div>
        </div>

        <p class="product-spotlight-desc">${canvaProduct.shortDescription}</p>

        <ul class="product-spotlight-features">
          ${canvaProduct.features.slice(0, 4).map(feat => `
            <li>
              <span class="feature-check-icon">${icons.checkCircle('icon', 17, 2)}</span>
              <span>${feat}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="product-spotlight-OrderBox">
        <div class="spotlight-box-header">
          <span class="spotlight-box-label">Pilih Durasi Langganan Canva Premium</span>
          <span class="spotlight-box-sub">Tanpa kata sandi akun, ruang desain pribadi tetap terpisah</span>
        </div>

        <div class="spotlight-pkg-list" role="radiogroup" aria-label="Pilihan paket Canva Premium">
          ${canvaProduct.packages.map((pkg, idx) => `
            <label class="spotlight-pkg-option ${idx === spotlightPkgIndex ? 'selected' : ''}" data-pkg-idx="${idx}">
              <input
                type="radio"
                name="spotlight-canva-package"
                value="${idx}"
                ${idx === spotlightPkgIndex ? 'checked' : ''}
              />
              <div class="spotlight-pkg-meta">
                <div class="spotlight-pkg-top">
                  <span class="spotlight-pkg-name">${pkg.name}</span>
                  <strong class="spotlight-pkg-price">${formatRp(pkg.price)}</strong>
                </div>
                <span class="spotlight-pkg-note">${pkg.note}</span>
              </div>
            </label>
          `).join('')}
        </div>

        <div class="spotlight-total-bar">
          <span>Tagihan Paket Terpilih</span>
          <strong id="spotlight-selected-price">${formatRp(selectedPkg.price)}</strong>
        </div>

        <div class="spotlight-actions">
          <button type="button" class="btn btn-primary btn-md" id="spotlight-buy-canva-btn">
            ${icons.shoppingCart('icon', 17, 2)}
            <span>Beli Canva Premium</span>
          </button>
          <a href="#/products/${canvaProduct.id}" class="btn btn-outline btn-md">
            <span>Lihat Rincian & FAQ</span>
          </a>
        </div>
      </div>
    </div>
  `;

  const pkgInputs = spotlightEl.querySelectorAll('input[name="spotlight-canva-package"]');
  pkgInputs.forEach(input => {
    input.addEventListener('change', (e) => {
      spotlightPkgIndex = parseInt(e.target.value, 10) || 0;
      renderCanvaSpotlight();
      const restored = document.querySelector(`input[name="spotlight-canva-package"][value="${spotlightPkgIndex}"]`);
      if (restored) restored.focus();
    });
  });

  const buyBtn = document.getElementById('spotlight-buy-canva-btn');
  if (buyBtn) {
    buyBtn.onclick = () => {
      const chosen = canvaProduct.packages[spotlightPkgIndex] || canvaProduct.packages[0];
      openOrderModal({
        itemTitle: canvaProduct.name,
        category: canvaProduct.category,
        packageName: chosen.name,
        amount: chosen.price
      });
    };
  }
}

function updateProductsGrid() {
  const container = document.getElementById('products-grid-container');
  const countEl = document.getElementById('catalog-results-count');
  if (!container) return;

  renderCanvaSpotlight();

  if (catalogState === 'loading') {
    if (countEl) countEl.textContent = 'Memuat data...';
    container.innerHTML = `
      <div class="catalog-state-box" role="status" aria-live="polite">
        <div class="catalog-state-icon">
          ${icons.refresh('icon', 26, 2)}
        </div>
        <h3 class="catalog-state-title">Memuat Katalog Produk</h3>
        <p class="catalog-state-desc">Menyiapkan daftar lisensi resmi dan paket layanan terbaru untuk Anda.</p>
      </div>
    `;
    return;
  }

  if (catalogState === 'error') {
    if (countEl) countEl.textContent = 'Kendala pemuatan';
    container.innerHTML = `
      <div class="catalog-state-box catalog-state-error" role="alert">
        <div class="catalog-state-icon error">
          ${icons.alertCircle('icon', 26, 2)}
        </div>
        <h3 class="catalog-state-title">Gagal Memuat Katalog Produk</h3>
        <p class="catalog-state-desc">${catalogErrorMessage || 'Terjadi gangguan saat menyinkronkan katalog. Silakan muat ulang daftar produk.'}</p>
        <button type="button" class="btn btn-primary btn-sm" id="retry-catalog-load-btn">
          ${icons.refresh('icon', 16, 2)}
          <span>Muat Ulang Katalog</span>
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
    const order = { 'Baru': 1, 'Terlaris': 2, 'Populer': 3 };
    filtered.sort((a, b) => (order[a.badge] || 99) - (order[b.badge] || 99));
  }

  if (countEl) {
    countEl.textContent = `${filtered.length} produk tersedia`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="catalog-state-box">
        <div class="catalog-state-icon">
          ${icons.search('icon', 26, 2)}
        </div>
        <h3 class="catalog-state-title">Tidak Menemukan Produk</h3>
        <p class="catalog-state-desc">Tidak ada produk yang cocok dengan kata kunci atau kategori yang dipilih.</p>
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
          <span class="badge ${getBadgeClass(prod.badge)}">
            ${prod.badge}
          </span>
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
        ` : `
          <span class="product-rating-empty">Belum ada ulasan</span>
        `}
      </div>

      <div class="product-card-head">
        <div class="card-icon-box" style="width: 42px; height: 42px;">
          ${icons[prod.icon] ? icons[prod.icon]('icon', 22, 2) : icons.package('icon', 22, 2)}
        </div>
        <div>
          <h3 class="product-title">
            <a href="#/products/${prod.id}">${prod.name}</a>
          </h3>
          <div class="product-tagline">${prod.tagline}</div>
        </div>
      </div>

      <p class="product-desc">${prod.shortDescription}</p>

      <div class="product-features-mini">
        ${(prod.features || []).slice(0, 3).map(feat => `
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
          <a href="#/products/${prod.id}" class="btn btn-outline btn-sm">Lihat Rincian</a>
          <button type="button" class="btn btn-primary btn-sm product-card-order-btn" data-id="${prod.id}">
            ${icons.shoppingCart('icon', 16, 2)}
            <span>Pesan Paket</span>
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
