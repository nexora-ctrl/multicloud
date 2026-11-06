/**
 * MultiCloud - Halaman Tentang Kami (About View)
 * Ditulis sesuai kaidah Bahasa Indonesia baku (KBBI).
 */

import { icons } from '../icons.js';

export function renderAboutPage() {
  return `
    <div class="page-header">
      <div class="container">
        <div class="breadcrumbs">
          <a href="#/">Beranda</a>
          ${icons.chevronRight('icon', 14, 2)}
          <span class="current">Tentang Kami</span>
        </div>
        <div class="page-header-content">
          <h1 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 0.75rem;">Tentang MultiCloud</h1>
          <p style="font-size: 1.125rem; color: var(--text-secondary); line-height: 1.6;">
            Membangun ekosistem teknologi digital terintegrasi untuk mempercepat transformasi pengembang piranti lunak, perusahaan rintisan, dan pelaku industri di Indonesia.
          </p>
        </div>
      </div>
    </div>

    <div class="container" style="padding-bottom: 5rem;">
      <!-- Bagian Kisah & Latar Belakang -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; margin-bottom: 5rem;">
        <div>
          <span class="section-tag">
            ${icons.building('icon', 14, 2)}
            <span>Profil Perusahaan</span>
          </span>
          <h2 style="font-size: 2rem; font-weight: 800; color: var(--text-primary); margin-bottom: 1.25rem;">
            One Platform, Multiple Digital Solutions
          </h2>
          <p style="font-size: 1rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1rem;">
            MultiCloud didirikan dengan satu tujuan mendasar: mempermudah akses ke infrastruktur digital kelas dunia, alat kecerdasan buatan, dan gerbang API bisnis tanpa kerumitan administrasi atau kendala pembayaran valuta asing.
          </p>
          <p style="font-size: 1rem; color: var(--text-secondary); line-height: 1.65;">
            Kami meyakini bahwa pengembang perorangan, rintisan bertumbuh, maupun korporasi berhak atas infrastruktur yang stabil, cepat, dan sah secara hukum dengan pendampingan teknisi ahli lokal 24 jam sehari.
          </p>
        </div>

        <div style="background-color: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-xl); padding: 2.5rem; box-shadow: var(--card-shadow);">
          <div style="display: flex; flex-direction: column; gap: 1.5rem;">
            <div style="display: flex; gap: 1rem;">
              <div class="card-icon-box" style="flex-shrink: 0;">
                ${icons.rocket('icon', 22, 2)}
              </div>
              <div>
                <h4 style="font-size: 1.125rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.25rem;">Visi Perusahaan</h4>
                <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.55;">
                  Menjadi penyedia pasar digital dan infrastruktur teknologi terdepan di Indonesia yang mengintegrasikan komputasi awan, kecerdasan buatan, dan API bisnis dalam satu ekosistem tepercaya.
                </p>
              </div>
            </div>

            <div style="display: flex; gap: 1rem;">
              <div class="card-icon-box accent" style="flex-shrink: 0;">
                ${icons.shieldCheck('icon', 22, 2)}
              </div>
              <div>
                <h4 style="font-size: 1.125rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.25rem;">Misi Perusahaan</h4>
                <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.55;">
                  Menyediakan lisensi AI resmi, hosting berlatensi rendah, serta API andal dengan keterbukaan tarif, aktivasi instan, dan komitmen SLA 99,99%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Nilai-Nilai Utama -->
      <div class="section-header">
        <span class="section-tag">
          ${icons.star('icon', 14, 2)}
          <span>Nilai Integritas</span>
        </span>
        <h2 class="section-title">Prinsip Kerja & Integritas Kami</h2>
        <p class="section-desc">Pilar mendasar yang melandasi setiap produk dan layanan yang kami hadirkan untuk Anda.</p>
      </div>

      <div class="grid-3" style="margin-bottom: 5rem;">
        <div class="card">
          <div class="card-icon-box" style="margin-bottom: 1.25rem;">
            ${icons.shieldCheck('icon', 24, 2)}
          </div>
          <h3 class="card-title">100% Sah & Berlisensi Resmi</h3>
          <p class="card-desc">
            Kami menolak keras praktik akun bajakan atau celah ilegal. Setiap akses Cursor, Gemini, Claude, dan ChatGPT dijamin orisinal dari penerbit resmi dengan hak distribusi yang sah.
          </p>
        </div>

        <div class="card">
          <div class="card-icon-box success" style="margin-bottom: 1.25rem;">
            ${icons.cpu('icon', 24, 2)}
          </div>
          <h3 class="card-title">Infrastruktur Tier-3 & Tier-4</h3>
          <p class="card-desc">
            Peladen kami ditempatkan di pusat data terbaik di Jakarta dan Singapura dengan mitigasi serangan DDoS, redundansi daya ganda, dan interkoneksi langsung ke jaringan nasional.
          </p>
        </div>

        <div class="card">
          <div class="card-icon-box accent" style="margin-bottom: 1.25rem;">
            ${icons.heartHandshake('icon', 24, 2)}
          </div>
          <h3 class="card-title">Fokus pada Solusi Nyata</h3>
          <p class="card-desc">
            Didampingi oleh teknisi berpengalaman di bidang rekayasa piranti lunak dan jaringan yang memahami kebutuhan operasional pengembang secara mendalam.
          </p>
        </div>
      </div>
    </div>
  `;
}
