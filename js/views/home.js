/**
 * MultiCloud - Halaman Beranda (Homepage View)
 * Disusun sesuai kaidah Bahasa Indonesia baku (KBBI).
 * Memuat 14 bagian pokok:
 * 1. Navbar dengan logo MultiCloud (global)
 * 2. Menu navigasi (global)
 * 3. Tombol Masuk dan Daftar (global)
 * 4. Hero section dengan judul utama: "Everything You Need to Build, Scale & Grow."
 * 5. Deskripsi singkat tentang MultiCloud
 * 6. Tombol Jelajahi Layanan dan Mulai Sekarang
 * 7. Bagian kategori layanan
 * 8. Bagian layanan unggulan
 * 9. Bagian produk populer
 * 10. Bagian alasan memilih MultiCloud
 * 11. Bagian statistik platform
 * 12. Bagian Pertanyaan Umum (FAQ)
 * 13. Ajakan Bertindak (Call to Action)
 * 14. Footer lengkap (global)
 */

import { icons } from '../icons.js';
import { serviceCategories, servicesList } from '../data/services.js';
import { productsList } from '../data/products.js';
import { platformStats, platformFaqs, whyChooseUs } from '../data/faqs.js';
import { openServiceDetailModal, openOrderModal } from '../components/modal.js';

export function renderHomePage() {
  const formatRp = (num) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);

  const featuredServices = servicesList.filter(s => s.popular).slice(0, 4);
  const popularProducts = productsList.filter(p => p.badge === 'Terlaris' || p.badge === 'Populer').slice(0, 3);

  return `
    <!-- 4, 5, 6. BAGIAN HERO (HERO SECTION) -->
    <section class="hero-section" aria-label="Bagian Utama Beranda">
      <div class="container hero-content">
        <div class="hero-pill">
          <span class="hero-pill-tag">BARU</span>
          <span>Akses Resmi Langganan AI & Ekosistem Awan Terpadu</span>
          ${icons.arrowRight('icon', 14, 2)}
        </div>

        <h1 class="hero-title">
          Everything You Need to <br />
          <span class="hero-title-highlight">Build, Scale & Grow.</span>
        </h1>

        <p class="hero-subtitle">
          MultiCloud adalah platform terpadu penyedia infrastruktur komputasi awan berkecepatan tinggi, gerbang API terkelola, alat AI berlisensi resmi, dan katalog produk digital untuk akselerasi teknologi Anda.
        </p>

        <div class="hero-cta-group">
          <a href="#/services" class="btn btn-primary btn-lg">
            <span>Jelajahi Layanan</span>
            ${icons.arrowRight('icon', 18, 2)}
          </a>
          <a href="#/register" class="btn btn-secondary btn-lg">
            <span>Mulai Sekarang</span>
          </a>
        </div>

        <div class="hero-trust-bar">
          <div class="trust-item">
            ${icons.shieldCheck('icon', 20, 2)}
            <span>100% Lisensi Sah & Resmi</span>
          </div>
          <div class="trust-item">
            ${icons.activity('icon', 20, 2)}
            <span>Jaminan Keterandalan SLA 99,99%</span>
          </div>
          <div class="trust-item">
            ${icons.zap('icon', 20, 2)}
            <span>Penyediaan Peladen Cepat</span>
          </div>
          <div class="trust-item">
            ${icons.heartHandshake('icon', 20, 2)}
            <span>Dukungan Teknis Siaga 24/7</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. BAGIAN KATEGORI LAYANAN -->
    <section class="section" style="background-color: var(--bg-surface-secondary);" aria-label="Kategori Layanan">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">
            ${icons.layers('icon', 14, 2)}
            <span>Ekosistem Solusi</span>
          </div>
          <h2 class="section-title">Kategori Layanan MultiCloud</h2>
          <p class="section-desc">
            Satu ekosistem komprehensif yang dirancang untuk mendukung setiap tahapan pengembangan piranti lunak dan operasional bisnis digital Anda.
          </p>
        </div>

        <div class="grid-4">
          ${serviceCategories.map(cat => `
            <a href="#/services?category=${cat.id}" class="category-card" aria-label="Buka Kategori ${cat.title}">
              <div class="category-card-top">
                <div class="card-icon-box">
                  ${icons[cat.icon] ? icons[cat.icon]('icon', 24, 2) : icons.cloud('icon', 24, 2)}
                </div>
                <span class="badge badge-primary">${cat.badge}</span>
              </div>
              <h3 class="category-card-title">${cat.title}</h3>
              <p class="category-card-desc">${cat.subtitle}</p>
              <div class="category-card-action">
                <span>Jelajahi Solusi</span>
                ${icons.arrowRight('icon', 16, 2)}
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- 8. BAGIAN LAYANAN UNGGULAN -->
    <section class="section" aria-label="Layanan Unggulan">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">
            ${icons.star('icon', 14, 2)}
            <span>Layanan Unggulan</span>
          </div>
          <h2 class="section-title">Infrastruktur & API Paling Banyak Digunakan</h2>
          <p class="section-desc">
            Pondasi teknologi berkinerja tinggi yang dioptimalkan untuk latensi rendah, skalabilitas elastis, dan kemudahan integrasi kode.
          </p>
        </div>

        <div class="grid-2">
          ${featuredServices.map(srv => `
            <div class="service-card">
              <div class="service-card-top">
                <div class="card-icon-box">
                  ${icons[srv.icon] ? icons[srv.icon]('icon', 24, 2) : icons.server('icon', 24, 2)}
                </div>
                ${srv.officialLicense ? `
                  <span class="service-badge-official">
                    ${icons.shieldCheck('icon', 14, 2)}
                    <span>Lisensi Resmi</span>
                  </span>
                ` : `
                  <span class="badge badge-outline">SLA 99,99%</span>
                `}
              </div>

              <h3 class="service-name">${srv.name}</h3>
              <div class="service-tagline">${srv.tagline}</div>
              <p class="service-description">${srv.description}</p>

              <div class="service-features-list">
                ${srv.features.map(f => `
                  <div class="service-feature-row">
                    <span style="color: var(--color-success);">${icons.check('icon', 16, 2)}</span>
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
                <button class="btn btn-outline-primary btn-sm view-service-detail-btn" data-id="${srv.id}">
                  <span>Lihat Rincian</span>
                  ${icons.arrowRight('icon', 16, 2)}
                </button>
              </div>
            </div>
          `).join('')}
        </div>

        <div style="text-align: center; margin-top: 3rem;">
          <a href="#/services" class="btn btn-outline btn-md">
            <span>Lihat Seluruh Layanan (${servicesList.length})</span>
            ${icons.chevronRight('icon', 18, 2)}
          </a>
        </div>
      </div>
    </section>

    <!-- 9. BAGIAN PRODUK POPULER -->
    <section class="section" style="background-color: var(--bg-surface-secondary);" aria-label="Produk Populer">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">
            ${icons.sparkles('icon', 14, 2)}
            <span>Katalog Pilihan</span>
          </div>
          <h2 class="section-title">Produk & Langganan AI Terpopuler</h2>
          <p class="section-desc">
            Langganan piranti lunak kecerdasan buatan dan lisensi pengembang orisinal dengan jaminan aktivasi sah tanpa risiko pemblokiran.
          </p>
        </div>

        <div class="grid-3">
          ${popularProducts.map(prod => `
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
                  <span class="product-rating-count">(${prod.reviewsCount} ulasan)</span>
                </div>
              </div>

              <h3 class="product-title">
                <a href="#/products/${prod.id}">${prod.name}</a>
              </h3>
              <div class="product-tagline">${prod.tagline}</div>
              <p class="product-desc">${prod.shortDescription}</p>

              <div class="product-features-mini">
                ${prod.features.slice(0, 3).map(feat => `
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
                  <button class="btn btn-primary btn-sm order-product-now-btn" data-id="${prod.id}">
                    ${icons.shoppingCart('icon', 16, 2)}
                    <span>Pesan Sekarang</span>
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <div style="text-align: center; margin-top: 3rem;">
          <a href="#/products" class="btn btn-primary btn-md">
            <span>Buka Katalog Lengkap</span>
            ${icons.arrowRight('icon', 18, 2)}
          </a>
        </div>
      </div>
    </section>

    <!-- 10. ALASAN MEMILIH MULTICLOUD -->
    <section class="section" aria-label="Alasan Memilih MultiCloud">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">
            ${icons.shieldCheck('icon', 14, 2)}
            <span>Keunggulan Utama</span>
          </div>
          <h2 class="section-title">Mengapa Memilih MultiCloud?</h2>
          <p class="section-desc">
            Kami mengutamakan stabilitas teknis, keabsahan lisensi resmi, dan kemudahan transaksi lokal bagi ekosistem digital Indonesia.
          </p>
        </div>

        <div class="grid-3">
          ${whyChooseUs.map(item => `
            <div class="why-card">
              <div class="why-icon-box">
                ${icons[item.icon] ? icons[item.icon]('icon', 22, 2) : icons.shieldCheck('icon', 22, 2)}
              </div>
              <h3 class="why-title">${item.title}</h3>
              <p class="why-desc">${item.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- 11. STATISTIK PLATFORM -->
    <section class="section" style="background-color: var(--bg-surface-secondary);" aria-label="Statistik Platform">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">
            ${icons.activity('icon', 14, 2)}
            <span>Skalabilitas Teruji</span>
          </div>
          <h2 class="section-title">Statistik & Keterandalan Platform</h2>
          <p class="section-desc">
            Bukti nyata dari jutaan transaksi data dan puluhan ribu pengembang yang mempercayakan kebutuhan komputasi mereka di MultiCloud.
          </p>
        </div>

        <div class="stats-grid">
          ${platformStats.map(stat => `
            <div class="stat-card">
              <div class="stat-icon">
                ${icons[stat.icon] ? icons[stat.icon]('icon', 32, 2) : icons.activity('icon', 32, 2)}
              </div>
              <div class="stat-value">${stat.value}</div>
              <div class="stat-label">${stat.label}</div>
              <div class="stat-desc">${stat.desc}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- 12. PERTANYAAN UMUM (FAQ) -->
    <section class="section" aria-label="Pertanyaan yang Sering Diajukan">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">
            ${icons.helpCircle('icon', 14, 2)}
            <span>Tanya Jawab</span>
          </div>
          <h2 class="section-title">Pertanyaan yang Sering Diajukan</h2>
          <p class="section-desc">
            Temukan jawaban komprehensif seputar legalitas akun, peladen awan, metode pembayaran nasional, dan garansi layanan.
          </p>
        </div>

        <div class="faq-list" id="faq-accordion-container">
          ${platformFaqs.map((faq, index) => `
            <div class="faq-item ${index === 0 ? 'active' : ''}">
              <button class="faq-question" type="button" aria-expanded="${index === 0}">
                <span>${faq.question}</span>
                <span class="faq-chevron">${icons.chevronDown('icon', 20, 2)}</span>
              </button>
              <div class="faq-answer">
                ${faq.answer}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- 13. AJAKAN BERTINDAK (CALL TO ACTION) -->
    <section class="section" style="padding-top: 0;" aria-label="Ajakan Bertindak">
      <div class="container">
        <div class="cta-banner">
          <div class="cta-banner-content">
            <h2 class="cta-title">Siap Membangun dan Mengembangkan Proyek Digital Anda?</h2>
            <p class="cta-desc">
              Daftar sekarang dan nikmati kemudahan akses peladen awan berlatensi rendah, gerbang API bisnis, dan langganan AI resmi dalam satu akun terintegrasi.
            </p>
            <div class="cta-buttons">
              <a href="#/register" class="btn btn-primary btn-lg">
                <span>Daftar Akun Gratis</span>
                ${icons.arrowRight('icon', 18, 2)}
              </a>
              <a href="#/pricing" class="btn btn-outline btn-lg">
                <span>Lihat Daftar Tarif</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function setupHomePageEvents() {
  const detailButtons = document.querySelectorAll('.view-service-detail-btn');
  detailButtons.forEach(btn => {
    btn.onclick = () => {
      const srvId = btn.getAttribute('data-id');
      const service = servicesList.find(s => s.id === srvId);
      if (service) openServiceDetailModal(service);
    };
  });

  const orderButtons = document.querySelectorAll('.order-product-now-btn');
  orderButtons.forEach(btn => {
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

  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.onclick = () => {
      const wasActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!wasActive) {
        item.classList.add('active');
      }
    };
  });
}
