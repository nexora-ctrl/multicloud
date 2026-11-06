/**
 * MultiCloud - Halaman Masuk Khusus Administrator (Admin Login)
 * Memverifikasi hak akses administrator melalui Supabase atau kredensial terverifikasi.
 */

import { icons } from '../icons.js';
import { store } from '../state.js';
import { supabaseService } from '../supabase.js';

export function renderAdminLoginPage() {
  const isSupabaseLive = supabaseService.isConfigured();

  return `
    <div style="min-height: calc(100vh - var(--navbar-height) - 80px); display: flex; align-items: center; justify-content: center; padding: 3rem 1.5rem;">
      <div class="card" style="width: 100%; max-width: 460px; padding: 2.5rem; box-shadow: var(--card-shadow-hover); border-top: 4px solid var(--color-accent);">
        
        <!-- Header Identitas Admin -->
        <div style="text-align: center; margin-bottom: 2rem;">
          <div style="width: 56px; height: 56px; border-radius: var(--radius-lg); background-color: var(--color-accent-subtle); color: var(--color-accent); display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto;">
            ${icons.lock('icon', 28, 2)}
          </div>
          <h1 style="font-size: 1.625rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.35rem;">
            Panel Administrator
          </h1>
          <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.5;">
            Akses terbatas hanya untuk staf dan pengelola sistem MultiCloud.
          </p>

          <div style="margin-top: 1rem; display: inline-flex; align-items: center; gap: 0.35rem; font-size: 0.75rem; padding: 0.25rem 0.625rem; border-radius: var(--radius-full); background-color: ${isSupabaseLive ? 'var(--color-success-subtle)' : 'var(--bg-surface-secondary)'}; color: ${isSupabaseLive ? 'var(--color-success)' : 'var(--text-muted)'}; border: 1px solid var(--border-color);">
            ${icons.database('icon', 13, 2)}
            <span>Status Basis Data: <strong>${isSupabaseLive ? 'Supabase Terhubung' : 'Penyimpanan Lokal Aktif'}</strong></span>
          </div>
        </div>

        <!-- Form Masuk Admin -->
        <form id="admin-login-form">
          <div class="form-group">
            <label class="form-label" for="admin-email">Alamat Surel Administrator</label>
            <input class="form-input" id="admin-email" type="email" required placeholder="admin@multicloud.id" value="admin@multicloud.id" />
          </div>

          <div class="form-group">
            <label class="form-label" for="admin-password">Kata Sandi</label>
            <input class="form-input" id="admin-password" type="password" required placeholder="••••••••" value="admin12345" />
          </div>

          <div id="admin-login-error" style="display: none; padding: 0.75rem; border-radius: var(--radius-md); background-color: var(--color-danger-subtle); color: var(--color-danger); font-size: 0.8125rem; margin-bottom: 1rem; border: 1px solid rgba(239, 68, 68, 0.2);">
            ${icons.alertCircle('icon', 16, 2)}
            <span id="admin-error-text" style="margin-left: 0.35rem;"></span>
          </div>

          <button type="submit" class="btn btn-primary btn-block btn-lg" id="admin-submit-btn" style="background-color: var(--color-accent); border-color: var(--color-accent); margin-top: 1rem;">
            ${icons.shieldCheck('icon', 18, 2)}
            <span>Masuk ke Dasbor Admin</span>
          </button>
        </form>

        <!-- Informasi Bantuan & Kredensial Bawaan -->
        <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--border-color); text-align: center; font-size: 0.8125rem; color: var(--text-muted);">
          <div style="background-color: var(--bg-surface-secondary); padding: 0.75rem; border-radius: var(--radius-md); margin-bottom: 1rem; text-align: left; border: 1px solid var(--border-color);">
            <strong style="display: block; color: var(--text-primary); margin-bottom: 0.25rem;">Kredensial Administrator Bawaan:</strong>
            <div>Surel: <code style="color: var(--color-primary);">admin@multicloud.id</code></div>
            <div>Kata Sandi: <code style="color: var(--color-primary);">admin12345</code></div>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center;">
            <a href="#/" style="color: var(--text-secondary); text-decoration: none; display: inline-flex; align-items: center; gap: 0.25rem;">
              ${icons.chevronLeft('icon', 14, 2)} Kembali ke Beranda
            </a>
            <a href="#/login" style="color: var(--color-primary); font-weight: 600;">Masuk sebagai Pengguna</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function setupAdminLoginPageEvents() {
  const form = document.getElementById('admin-login-form');
  const errorBox = document.getElementById('admin-login-error');
  const errorText = document.getElementById('admin-error-text');
  const submitBtn = document.getElementById('admin-submit-btn');

  if (form) {
    form.onsubmit = async (e) => {
      e.preventDefault();
      const email = document.getElementById('admin-email').value.trim();
      const password = document.getElementById('admin-password').value;

      submitBtn.classList.add('disabled');
      submitBtn.innerHTML = `<span>Memverifikasi Akses...</span>`;
      errorBox.style.display = 'none';

      const result = await supabaseService.authenticateAdmin(email, password);

      if (result.success) {
        store.setAdminUser(result.user);
        window.location.hash = '#/admin';
      } else {
        submitBtn.classList.remove('disabled');
        submitBtn.innerHTML = `${icons.shieldCheck('icon', 18, 2)} <span>Masuk ke Dasbor Admin</span>`;
        errorText.textContent = result.message || 'Surel atau kata sandi administrator salah.';
        errorBox.style.display = 'block';
      }
    };
  }
}

