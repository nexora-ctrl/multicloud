/**
 * MultiCloud - Halaman Dokumentasi Teknis & API (Docs View)
 * Ditulis sesuai kaidah Bahasa Indonesia baku (KBBI).
 */

import { icons } from '../icons.js';

export function renderDocsPage() {
  return `
    <div class="page-header">
      <div class="container">
        <div class="breadcrumbs">
          <a href="#/">Beranda</a>
          ${icons.chevronRight('icon', 14, 2)}
          <span class="current">Dokumentasi</span>
        </div>
        <div class="page-header-content">
          <h1 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 0.75rem;">Dokumentasi & Rujukan API</h1>
          <p style="font-size: 1.125rem; color: var(--text-secondary); line-height: 1.6;">
            Panduan integrasi teknis, SDK resmi, dan spesifikasi titik akhir (endpoint) API untuk para pengembang piranti lunak dan arsitek komputasi awan.
          </p>
        </div>
      </div>
    </div>

    <div class="container" style="padding-bottom: 5rem;">
      <div style="display: grid; grid-template-columns: 240px 1fr; gap: 3rem; align-items: start;">
        <!-- Bilah Sisi Navigasi Dokumentasi -->
        <div class="card" style="padding: 1.25rem; position: sticky; top: 96px;">
          <h4 style="font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.05em; margin-bottom: 0.75rem;">
            Daftar Panduan
          </h4>
          <div style="display: flex; flex-direction: column; gap: 0.35rem;">
            <a href="#docs-quickstart" class="sidebar-nav-item active">
              ${icons.rocket('icon', 16, 2)} Panduan Awal
            </a>
            <a href="#docs-cloud-vps" class="sidebar-nav-item">
              ${icons.server('icon', 16, 2)} Peladen Awan & VPS
            </a>
            <a href="#docs-ai-api" class="sidebar-nav-item">
              ${icons.robot('icon', 16, 2)} Inferensi AI Terpadu
            </a>
            <a href="#docs-whatsapp" class="sidebar-nav-item">
              ${icons.brandWhatsapp('icon', 16, 2)} Gerbang WhatsApp
            </a>
            <a href="#docs-auth" class="sidebar-nav-item">
              ${icons.lock('icon', 16, 2)} Otentikasi Kunci API
            </a>
          </div>
        </div>

        <!-- Konten Utama Dokumentasi -->
        <div style="display: flex; flex-direction: column; gap: 3rem;">
          <!-- Panduan Awal -->
          <section id="docs-quickstart" class="card" style="padding: 2.5rem;">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
              <span class="badge badge-primary">Panduan Awal</span>
              <span style="font-size: 0.8125rem; color: var(--text-muted);">Estimasi baca: 3 menit</span>
            </div>
            <h2 style="font-size: 1.75rem; font-weight: 800; color: var(--text-primary); margin-bottom: 1rem;">
              Memulai Integrasi MultiCloud
            </h2>
            <p style="font-size: 0.9375rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">
              Platform MultiCloud dirancang agar pengembang dapat langsung mengonsumsi layanan tanpa konfigurasi berbelit. Setelah membuat akun, Anda dapat langsung menerbitkan Kunci API dari Dasbor Pengembang.
            </p>

            <div style="background-color: var(--bg-surface-secondary); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); margin-bottom: 1.5rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <strong style="font-size: 0.8125rem; color: var(--text-muted); text-transform: uppercase;">URL Dasar Produksi (Base URL)</strong>
                <span class="code-pill">v1.multicloud.id</span>
              </div>
              <pre style="color: var(--color-primary); font-size: 0.875rem; overflow-x: auto;"><code>https://api.multicloud.id/v1/</code></pre>
            </div>
          </section>

          <!-- Inferensi AI Terpadu -->
          <section id="docs-ai-api" class="card" style="padding: 2.5rem;">
            <span class="badge badge-accent" style="margin-bottom: 0.75rem;">Inferensi AI</span>
            <h2 style="font-size: 1.75rem; font-weight: 800; color: var(--text-primary); margin-bottom: 1rem;">
              API Inferensi AI Terpadu
            </h2>
            <p style="font-size: 0.9375rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">
              Gunakan satu titik akhir berstandar OpenAI SDK untuk mengakses model Claude 3.5 Sonnet, GPT-4o, dan Gemini 1.5 Pro dengan pemilihan rute latensi tercepat secara otomatis.
            </p>

            <div style="background-color: #0b0f19; color: #f8fafc; padding: 1.5rem; border-radius: var(--radius-lg); overflow-x: auto; font-family: var(--font-mono); font-size: 0.875rem; line-height: 1.5;">
              <div style="color: #64748b; margin-bottom: 0.5rem;">// Contoh Perintah cURL - Inferensi AI Terpadu</div>
              <div>curl https://api.multicloud.id/v1/chat/completions \</div>
              <div>&nbsp;&nbsp;-H "Content-Type: application/json" \</div>
              <div>&nbsp;&nbsp;-H "Authorization: Bearer KUNCI_API_MULTICLOUD_ANDA" \</div>
              <div>&nbsp;&nbsp;-d '{</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;"model": "claude-3-5-sonnet",</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;"messages": [</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"role": "user", "content": "Tuliskan contoh REST API Golang"}</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;]</div>
              <div>&nbsp;&nbsp;}'</div>
            </div>
          </section>

          <!-- WhatsApp API -->
          <section id="docs-whatsapp" class="card" style="padding: 2.5rem;">
            <span class="badge badge-success" style="margin-bottom: 0.75rem;">Gerbang Pesan</span>
            <h2 style="font-size: 1.75rem; font-weight: 800; color: var(--text-primary); margin-bottom: 1rem;">
              Gerbang WhatsApp Business API
            </h2>
            <p style="font-size: 0.9375rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">
              Kirimkan notifikasi transaksi, kode verifikasi OTP, dan berkas faktur digital secara terprogram ke nomor WhatsApp pelanggan.
            </p>

            <div style="background-color: #0b0f19; color: #f8fafc; padding: 1.5rem; border-radius: var(--radius-lg); overflow-x: auto; font-family: var(--font-mono); font-size: 0.875rem; line-height: 1.5;">
              <div style="color: #64748b; margin-bottom: 0.5rem;">// POST /v1/whatsapp/send</div>
              <div>curl -X POST https://api.multicloud.id/v1/whatsapp/send \</div>
              <div>&nbsp;&nbsp;-H "Authorization: Bearer KUNCI_API_MULTICLOUD_ANDA" \</div>
              <div>&nbsp;&nbsp;-H "Content-Type: application/json" \</div>
              <div>&nbsp;&nbsp;-d '{</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;"to": "6281234567890",</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;"type": "text",</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;"message": "Kode OTP MultiCloud Anda adalah 492019. Berlaku 5 menit."</div>
              <div>&nbsp;&nbsp;}'</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  `;
}
