/**
 * MultiCloud - Komponen Kaki Halaman (Footer)
 * Menggunakan peristilahan baku Bahasa Indonesia (KBBI).
 */

import { icons } from '../icons.js';

export function renderFooter() {
  return `
    <footer class="footer" role="contentinfo">
      <div class="container">
        <div class="footer-top">
          <!-- Kolom 1: Merek & Moto -->
          <div class="footer-brand">
            <a href="#/" class="brand-logo">
              <div class="brand-icon">
                ${icons.cloud('brand-svg', 20, 2)}
              </div>
              <span class="brand-name">MultiCloud</span>
            </a>
            <p class="footer-desc">
              One Platform, Multiple Digital Solutions. Ekosistem terintegrasi untuk infrastruktur komputasi awan, gerbang API bisnis, lisensi kecerdasan buatan resmi, dan piranti lunak terverifikasi.
            </p>
            <div class="footer-compliance-pill">
              ${icons.shieldCheck('icon', 16, 2)}
              <span>100% Lisensi Resmi & Terverifikasi</span>
            </div>
          </div>

          <!-- Kolom 2: Komputasi Awan & Peladen -->
          <div class="footer-col">
            <h4 class="footer-group-title">Komputasi Awan</h4>
            <div class="footer-links">
              <a href="#/services" class="footer-link">Hosting Web NVMe</a>
              <a href="#/services" class="footer-link">Hosting Awan Terkelola</a>
              <a href="#/services" class="footer-link">Peladen VPS Cloud AMD</a>
              <a href="#/services" class="footer-link">Registrasi Domain Global</a>
              <a href="#/services" class="footer-link">Peladen Fisik Khusus</a>
            </div>
          </div>

          <!-- Kolom 3: Layanan API, AI & Kreatif -->
          <div class="footer-col">
            <h4 class="footer-group-title">API, AI & Kreatif</h4>
            <div class="footer-links">
              <a href="#/products/prod-canva-premium" class="footer-link">Canva Premium Resmi</a>
              <a href="#/products?category=ai-tools" class="footer-link">Cursor AI Pro</a>
              <a href="#/products?category=ai-tools" class="footer-link">Google Gemini Advanced</a>
              <a href="#/products?category=ai-tools" class="footer-link">ChatGPT Plus Resmi</a>
              <a href="#/products?category=ai-tools" class="footer-link">Claude Pro Anthropic</a>
              <a href="#/services" class="footer-link">Gerbang WhatsApp API</a>
              <a href="#/services" class="footer-link">Inferensi AI Terpadu</a>
            </div>
          </div>

          <!-- Kolom 4: Solusi & Pintasan -->
          <div class="footer-col">
            <h4 class="footer-group-title">Navigasi Platform</h4>
            <div class="footer-links">
              <a href="#/products" class="footer-link">Katalog Produk</a>
              <a href="#/pricing" class="footer-link">Daftar Tarif & SLA</a>
              <a href="#/docs" class="footer-link">Dokumentasi Teknis</a>
              <a href="#/about" class="footer-link">Tentang MultiCloud</a>
              <a href="#/contact" class="footer-link">Pusat Bantuan</a>
            </div>
          </div>

          <!-- Kolom 5: Kontak & Bantuan Teknis -->
          <div class="footer-col">
            <h4 class="footer-group-title">Layanan Pelanggan</h4>
            <div class="footer-links">
              <span class="footer-link">
                ${icons.mail('icon', 16, 2)}
                support@multicloud.id
              </span>
              <span class="footer-link">
                ${icons.brandWhatsapp('icon', 16, 2)}
                +62 812-3456-7890
              </span>
              <span class="footer-link">
                ${icons.building('icon', 16, 2)}
                Jakarta Selatan, Indonesia
              </span>
              <span class="footer-link" style="color: var(--color-success);">
                ${icons.activity('icon', 16, 2)}
                Seluruh Peladen Beroperasi Normal
              </span>
            </div>
          </div>
        </div>

        <!-- Baris Bawah Kaki Halaman -->
        <div class="footer-bottom">
          <div>
            &copy; ${new Date().getFullYear()} MultiCloud Inc. Hak cipta dilindungi undang-undang. Seluruh merek dagang dan nama lisensi AI adalah milik penerbit masing-masing yang didistribusikan secara sah.
          </div>
          <div class="footer-socials">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Repositori GitHub">
              ${icons.brandGithub('icon', 18, 2)}
            </a>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Koneksi WhatsApp Resmi">
              ${icons.brandWhatsapp('icon', 18, 2)}
            </a>
            <a href="mailto:support@multicloud.id" class="social-link" aria-label="Alamat Surel Resmi">
              ${icons.mail('icon', 18, 2)}
            </a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
