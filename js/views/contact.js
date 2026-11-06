/**
 * MultiCloud - Halaman Kontak & Bantuan (Contact View)
 * Ditulis sesuai kaidah Bahasa Indonesia baku (KBBI).
 */

import { icons } from '../icons.js';

export function renderContactPage() {
  return `
    <div class="page-header">
      <div class="container">
        <div class="breadcrumbs">
          <a href="#/">Beranda</a>
          ${icons.chevronRight('icon', 14, 2)}
          <span class="current">Kontak</span>
        </div>
        <div class="page-header-content">
          <h1 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 0.75rem;">Hubungi Tim MultiCloud</h1>
          <p style="font-size: 1.125rem; color: var(--text-secondary); line-height: 1.6;">
            Punya pertanyaan mengenai implementasi infrastruktur, aktivasi lisensi perusahaan, atau butuh bantuan teknis? Tim kami siap melayani Anda 24 jam sehari.
          </p>
        </div>
      </div>
    </div>

    <div class="container" style="padding-bottom: 5rem;">
      <div style="display: grid; grid-template-columns: 1fr 380px; gap: 3rem; align-items: start;">
        <!-- Formulir Kontak -->
        <div class="card" style="padding: 2.5rem;">
          <h2 style="font-size: 1.5rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.5rem;">
            Kirimkan Pesan Anda
          </h2>
          <p style="font-size: 0.9375rem; color: var(--text-secondary); margin-bottom: 2rem;">
            Isi formulir di bawah ini dan teknisi kami akan membalas ke alamat surel Anda dalam waktu kurang dari 30 menit.
          </p>

          <form id="contact-form">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="form-group">
                <label class="form-label" for="contact-name">Nama Lengkap</label>
                <input class="form-input" id="contact-name" type="text" required placeholder="Nama Anda" />
              </div>
              <div class="form-group">
                <label class="form-label" for="contact-email">Alamat Surel</label>
                <input class="form-input" id="contact-email" type="email" required placeholder="nama@perusahaan.com" />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="contact-department">Departemen Tujuan</label>
              <select class="form-select" id="contact-department">
                <option value="Penjualan & Kemitraan">Penjualan & Konsultasi Produk</option>
                <option value="Dukungan Teknis Peladen">Dukungan Teknis Komputasi Awan & VPS</option>
                <option value="Aktivasi Lisensi AI">Aktivasi Lisensi AI & Piranti Lunak</option>
                <option value="Integrasi API Pengembang">Integrasi API & Webhook</option>
                <option value="Penagihan & Faktur Pajak">Penagihan & Faktur Pajak</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label" for="contact-message">Pesan / Uraian Kebutuhan</label>
              <textarea class="form-textarea" id="contact-message" required placeholder="Jelaskan kebutuhan teknis atau pertanyaan yang ingin Anda sampaikan..." rows="5"></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-lg" id="contact-submit-btn">
              ${icons.mail('icon', 18, 2)}
              <span>Kirimkan Pesan</span>
            </button>
          </form>

          <div id="contact-feedback" style="display: none; margin-top: 1.5rem; padding: 1rem; border-radius: var(--radius-md); background-color: var(--color-success-subtle); color: var(--color-success); border: 1px solid rgba(16, 185, 129, 0.3); font-size: 0.9375rem;">
            ${icons.checkCircle('icon', 20, 2)}
            <span style="font-weight: 600; margin-left: 0.5rem;">Pesan Anda telah berhasil dikirimkan! Tim teknis kami akan segera menghubungi Anda.</span>
          </div>
        </div>

        <!-- Kolom Informasi Kontak Langsung -->
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          <!-- WhatsApp Resmi -->
          <div class="card" style="background-color: var(--color-success-subtle); border-color: rgba(16, 185, 129, 0.25);">
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
              <div style="color: var(--color-success);">
                ${icons.brandWhatsapp('icon', 28, 2)}
              </div>
              <div>
                <h3 style="font-size: 1.125rem; font-weight: 700; color: var(--text-primary);">WhatsApp Resmi</h3>
                <span style="font-size: 0.8125rem; color: var(--color-success); font-weight: 600;">Siaga 24 Jam</span>
              </div>
            </div>
            <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1.25rem;">
              Konsultasi cepat dengan staf kami untuk memperoleh tanggapan instan via WhatsApp.
            </p>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-block" style="background-color: #10b981; border-color: #10b981;">
              ${icons.brandWhatsapp('icon', 18, 2)}
              <span>Buka Obrolan WhatsApp</span>
            </a>
          </div>

          <!-- Surel & Kantor Operasional -->
          <div class="card">
            <h3 style="font-size: 1.125rem; font-weight: 700; color: var(--text-primary); margin-bottom: 1.25rem;">
              Saluran Dukungan Resmi
            </h3>
            
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; gap: 0.75rem;">
                <div style="color: var(--color-primary); flex-shrink: 0; margin-top: 2px;">
                  ${icons.mail('icon', 20, 2)}
                </div>
                <div>
                  <span style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600; display: block;">Alamat Surel</span>
                  <strong style="color: var(--text-primary); font-size: 0.9375rem;">support@multicloud.id</strong>
                  <div style="font-size: 0.8125rem; color: var(--text-muted);">billing@multicloud.id</div>
                </div>
              </div>

              <div style="display: flex; gap: 0.75rem;">
                <div style="color: var(--color-primary); flex-shrink: 0; margin-top: 2px;">
                  ${icons.building('icon', 20, 2)}
                </div>
                <div>
                  <span style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600; display: block;">Kantor Operasional</span>
                  <strong style="color: var(--text-primary); font-size: 0.9375rem;">MultiCloud Technology Tower</strong>
                  <div style="font-size: 0.8125rem; color: var(--text-muted);">Jl. Jenderal Sudirman Kav. 52-53, SCBD, Jakarta Selatan 12190</div>
                </div>
              </div>

              <div style="display: flex; gap: 0.75rem;">
                <div style="color: var(--color-primary); flex-shrink: 0; margin-top: 2px;">
                  ${icons.activity('icon', 20, 2)}
                </div>
                <div>
                  <span style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600; display: block;">Standar Keterandalan (SLA)</span>
                  <strong style="color: var(--text-primary); font-size: 0.9375rem;">99,99% Uptime Peladen & Jaringan</strong>
                  <div style="font-size: 0.8125rem; color: var(--text-muted);">Respon teknis pertama di bawah 15 menit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function setupContactPageEvents() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('contact-feedback');

  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const btn = document.getElementById('contact-submit-btn');
      btn.classList.add('disabled');
      btn.textContent = 'Mengirimkan...';

      setTimeout(() => {
        form.reset();
        btn.classList.remove('disabled');
        btn.innerHTML = `${icons.mail('icon', 18, 2)} <span>Kirimkan Pesan</span>`;
        if (feedback) feedback.style.display = 'flex';
      }, 500);
    };
  }
}
