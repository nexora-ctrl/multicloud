/**
 * MultiCloud - Halaman Rincian Produk (Product Detail View)
 * Ditulis sesuai kaidah Bahasa Indonesia baku (KBBI).
 */

import { icons } from '../icons.js';
import { productsList } from '../data/products.js';
import { openOrderModal } from '../components/modal.js';

let selectedPackageIndex = 0;

export function renderProductDetailPage(productId) {
  selectedPackageIndex = 0;
  const product = productsList.find(p => p.id === productId || p.slug === productId) || productsList[0];
  const formatRp = (num) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);

  const initialPkg = product.packages[0] || { name: 'Paket Standar', price: product.price, period: product.pricePeriod };

  return `
    <div class="page-header" style="margin-bottom: 2.5rem;">
      <div class="container">
        <div class="breadcrumbs">
          <a href="#/">Beranda</a>
          ${icons.chevronRight('icon', 14, 2)}
          <a href="#/products">Produk</a>
          ${icons.chevronRight('icon', 14, 2)}
          <span class="current">${product.name}</span>
        </div>
      </div>
    </div>

    <div class="container" style="padding-bottom: 5rem;">
      <div class="product-detail-layout">
        <!-- Kolom Utama: Rincian Produk, Spesifikasi, Fitur, FAQ -->
        <div class="product-detail-main">
          <div class="product-detail-hero-box">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 0.75rem;">
              <div style="display: flex; align-items: center; gap: 0.75rem;">
                <div class="card-icon-box" style="width: 56px; height: 56px;">
                  ${icons[product.icon] ? icons[product.icon]('icon', 30, 2) : icons.package('icon', 30, 2)}
                </div>
                <div>
                  <span class="badge ${product.badge === 'Terlaris' ? 'badge-bestseller' : 'badge-popular'}">
                    ${product.badge}
                  </span>
                  ${product.isOfficialLicense ? `
                    <span class="badge badge-success" style="margin-left: 0.5rem;">
                      ${icons.shieldCheck('icon', 12, 2)} Lisensi Sah & Resmi
                    </span>
                  ` : ''}
                </div>
              </div>

              <div class="product-rating" style="font-size: 0.9375rem;">
                ${icons.star('icon', 18, 2)}
                <span>${product.rating}</span>
                <span class="product-rating-count">(${product.reviewsCount} ulasan pembeli)</span>
              </div>
            </div>

            <h1 class="product-detail-title">${product.name}</h1>
            <div style="font-size: 1rem; color: var(--color-primary); font-weight: 600; margin-bottom: 1.25rem;">
              ${product.tagline}
            </div>

            <p class="product-detail-desc">
              ${product.fullDescription}
            </p>

            <!-- Bagian Spesifikasi Teknis -->
            <div class="product-specs-card">
              <h3 class="product-specs-title">Spesifikasi & Informasi Lisensi</h3>
              <div class="specs-grid">
                ${product.specifications.map(s => `
                  <div class="spec-item">
                    <span class="spec-key">${s.key}</span>
                    <span class="spec-value">${s.value}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Daftar Fitur -->
            <div style="margin-bottom: 2.5rem;">
              <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-bottom: 1.25rem;">
                Fitur & Manfaat Utama
              </h3>
              <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                ${product.features.map(f => `
                  <div style="display: flex; align-items: flex-start; gap: 0.75rem; font-size: 0.9375rem; color: var(--text-secondary);">
                    <span style="color: var(--color-success); margin-top: 2px;">${icons.checkCircle('icon', 18, 2)}</span>
                    <span>${f}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Tanya Jawab Produk -->
            ${product.faq && product.faq.length > 0 ? `
              <div style="border-top: 1px solid var(--border-color); padding-top: 2rem;">
                <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-bottom: 1.25rem;">
                  Pertanyaan Seputar Produk
                </h3>
                <div style="display: flex; flex-direction: column; gap: 1rem;">
                  ${product.faq.map(item => `
                    <div style="background-color: var(--bg-surface-secondary); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
                      <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                        <span style="color: var(--color-primary);">${icons.helpCircle('icon', 18, 2)}</span>
                        <span>${item.q}</span>
                      </div>
                      <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.55; margin-left: 1.625rem;">
                        ${item.a}
                      </p>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>
        </div>

        <!-- Kolom Samping: Pilihan Paket & Tombol Beli -->
        <div class="product-detail-sidebar">
          <div class="purchase-sidebar-card">
            <h3 class="purchase-sidebar-title">Pilih Paket Langganan</h3>

            <div class="package-radio-list" id="package-selector-list">
              ${product.packages.map((pkg, idx) => `
                <label class="package-option ${idx === 0 ? 'selected' : ''}" data-index="${idx}">
                  <input type="radio" name="product-package-choice" value="${idx}" ${idx === 0 ? 'checked' : ''} />
                  <div class="package-info">
                    <span class="package-name">${pkg.name}</span>
                    <span class="package-price">${formatRp(pkg.price)}</span>
                    <span class="package-note">${pkg.note || pkg.period}</span>
                  </div>
                </label>
              `).join('')}
            </div>

            <div style="border-top: 1px solid var(--border-color); padding-top: 1.25rem; margin-bottom: 1.5rem;">
              <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.25rem;">
                <span style="font-size: 0.875rem; color: var(--text-muted);">Total Tagihan:</span>
                <strong style="font-size: 1.5rem; font-weight: 800; color: var(--text-primary);" id="sidebar-display-price">
                  ${formatRp(initialPkg.price)}
                </strong>
              </div>
              <span style="font-size: 0.75rem; color: var(--text-muted);" id="sidebar-display-period">
                Durasi: ${initialPkg.period}
              </span>
            </div>

            <button class="btn btn-primary btn-block btn-lg" id="detail-page-order-btn" style="margin-bottom: 1rem;">
              ${icons.shoppingCart('icon', 18, 2)}
              <span>Beli Sekarang</span>
            </button>

            <div style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.8125rem; color: var(--text-muted); text-align: center;">
              <div style="display: flex; align-items: center; justify-content: center; gap: 0.35rem;">
                ${icons.shieldCheck('icon', 16, 2)}
                <span>Jaminan Aktivasi Resmi & Legal</span>
              </div>
              <div style="display: flex; align-items: center; justify-content: center; gap: 0.35rem;">
                ${icons.zap('icon', 16, 2)}
                <span>Aktivasi Cepat 5-15 Menit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function setupProductDetailPageEvents(productId) {
  const product = productsList.find(p => p.id === productId || p.slug === productId) || productsList[0];
  const formatRp = (num) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);

  const packageOptions = document.querySelectorAll('.package-option');
  const priceDisplay = document.getElementById('sidebar-display-price');
  const periodDisplay = document.getElementById('sidebar-display-period');

  packageOptions.forEach(opt => {
    opt.onclick = () => {
      packageOptions.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      const radio = opt.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;

      const idx = parseInt(opt.getAttribute('data-index'), 10);
      selectedPackageIndex = idx;
      const selectedPkg = product.packages[idx];

      if (priceDisplay && selectedPkg) {
        priceDisplay.textContent = formatRp(selectedPkg.price);
      }
      if (periodDisplay && selectedPkg) {
        periodDisplay.textContent = `Durasi: ${selectedPkg.period}`;
      }
    };
  });

  const orderBtn = document.getElementById('detail-page-order-btn');
  if (orderBtn) {
    orderBtn.onclick = () => {
      const selectedPkg = product.packages[selectedPackageIndex] || product.packages[0];
      openOrderModal({
        itemTitle: product.name,
        category: product.category,
        packageName: selectedPkg.name,
        amount: selectedPkg.price
      });
    };
  }
}
