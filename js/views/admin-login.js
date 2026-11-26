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
            <label class="form-label" for="admin-email">Alamat Surel</label>
            <input class="form-input" id="admin-email" type="email" autocomplete="email" required placeholder="nama@email.com" value="" />
          </div>

          <div class="form-group">
            <label class="form-label" for="admin-password">Kata Sandi</label>
            <div class="password-field-wrap">
              <input class="form-input password-input" id="admin-password" type="password" autocomplete="current-password" required placeholder="Masukkan kata sandi" value="" />
              <button type="button" class="password-toggle-btn" id="admin-password-toggle" data-target="admin-password" aria-label="Tampilkan kata sandi">
                ${icons.eye('icon', 18, 2)}
              </button>
            </div>
          </div>

          <div id="admin-login-error" class="auth-alert auth-alert-error" role="alert" style="display: none;">
            ${icons.alertCircle('icon', 17, 2)}
            <span id="admin-error-text"></span>
          </div>

          <button type="submit" class="btn btn-primary btn-block btn-lg" id="admin-submit-btn" style="background-color: var(--color-accent); border-color: var(--color-accent); margin-top: 1rem;">
            ${icons.shieldCheck('icon', 18, 2)}
            <span>Masuk ke Dasbor</span>
          </button>
        </form>

        <!-- Navigasi Bantuan -->
        <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--border-color); text-align: center; font-size: 0.8125rem; color: var(--text-muted);">
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
  const toggleBtn = document.getElementById('admin-password-toggle');

  if (toggleBtn) {
    toggleBtn.onclick = () => {
      const pwdInput = document.getElementById('admin-password');
      if (!pwdInput) return;
      const isHidden = pwdInput.type === 'password';
      pwdInput.type = isHidden ? 'text' : 'password';
      toggleBtn.setAttribute('aria-label', isHidden ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi');
      toggleBtn.innerHTML = isHidden ? icons.eyeOff('icon', 18, 2) : icons.eye('icon', 18, 2);
    };
  }

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
        errorBox.style.display = 'flex';
      }
    };
  }
}

