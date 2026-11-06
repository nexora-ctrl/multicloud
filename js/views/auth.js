/**
 * MultiCloud - Halaman Masuk & Registrasi Pengguna (Auth View)
 * Ditulis sesuai kaidah Bahasa Indonesia baku (KBBI).
 */

import { icons } from '../icons.js';
import { store } from '../state.js';
import { supabaseService } from '../supabase.js';

export function renderAuthPage(mode = 'login') {
  return `
    <div style="min-height: calc(100vh - var(--navbar-height) - 100px); display: flex; align-items: center; justify-content: center; padding: 3rem 1.5rem;">
      <div class="card" style="width: 100%; max-width: 440px; padding: 2.5rem; box-shadow: var(--card-shadow-hover);">
        
        <!-- Header Logo -->
        <div style="text-align: center; margin-bottom: 2rem;">
          <a href="#/" class="brand-logo" style="justify-content: center; margin-bottom: 0.75rem;">
            <div class="brand-icon">
              ${icons.cloud('brand-svg', 20, 2)}
            </div>
            <span class="brand-name">MultiCloud</span>
          </a>
          <h1 style="font-size: 1.5rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.25rem;" id="auth-title">
            ${mode === 'register' ? 'Pendaftaran Akun Baru' : mode === 'forgot' ? 'Pemulihan Kata Sandi' : 'Masuk ke MultiCloud'}
          </h1>
          <p style="font-size: 0.875rem; color: var(--text-muted);" id="auth-subtitle">
            ${mode === 'register' ? 'Satu akun untuk seluruh layanan infrastruktur dan API' : mode === 'forgot' ? 'Masukkan alamat surel Anda untuk menerima instruksi pemulihan' : 'Kelola peladen awan, kunci API, dan lisensi resmi Anda'}
          </p>
        </div>

        <!-- Formulir -->
        <div id="auth-forms-container">
          ${mode === 'register' ? renderRegisterForm() : mode === 'forgot' ? renderForgotForm() : renderLoginForm()}
        </div>

        <!-- Tombol Akses Uji Coba Cepat -->
        <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--border-color); text-align: center;">
          <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); font-weight: 700; display: block; margin-bottom: 0.75rem;">
            Pintasan Masuk Pengujian (Demo)
          </span>
          <div style="display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap;">
            <button class="btn btn-secondary btn-sm" id="quick-login-user-btn" type="button">
              ${icons.user('icon', 15, 2)} Masuk Pengguna
            </button>
            <a href="#/admin-login" class="btn btn-outline btn-sm" style="color: var(--color-accent); border-color: var(--color-accent);">
              ${icons.lock('icon', 15, 2)} Masuk Administrator
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderLoginForm() {
  return `
    <form id="login-form">
      <div id="auth-error-box" style="display: none; padding: 0.75rem; border-radius: var(--radius-md); background-color: var(--color-danger-subtle); color: var(--color-danger); font-size: 0.8125rem; margin-bottom: 1.25rem; border: 1px solid rgba(239, 68, 68, 0.2);">
        ${icons.alertCircle('icon', 16, 2)}
        <span id="auth-error-text" style="margin-left: 0.35rem;"></span>
      </div>

      <div class="form-group">
        <label class="form-label" for="login-email">Alamat Surel</label>
        <input class="form-input" id="login-email" type="email" required placeholder="nama@email.com" value="" />
      </div>

      <div class="form-group">
        <div class="form-label">
          <label for="login-password">Kata Sandi</label>
          <a href="#/forgot-password" style="font-size: 0.8125rem; color: var(--color-primary);">Lupa kata sandi?</a>
        </div>
        <input class="form-input" id="login-password" type="password" required placeholder="••••••••" value="" />
      </div>

      <button type="submit" class="btn btn-primary btn-block btn-lg" id="login-submit-btn" style="margin-top: 1.5rem;">
        <span>Masuk ke Akun</span>
        ${icons.arrowRight('icon', 16, 2)}
      </button>

      <div style="text-align: center; margin-top: 1.5rem; font-size: 0.875rem; color: var(--text-secondary);">
        Belum memiliki akun MultiCloud? <a href="#/register" style="color: var(--color-primary); font-weight: 600;">Daftar sekarang</a>
      </div>
    </form>
  `;
}

function renderRegisterForm() {
  return `
    <form id="register-form">
      <div id="auth-error-box" style="display: none; padding: 0.75rem; border-radius: var(--radius-md); background-color: var(--color-danger-subtle); color: var(--color-danger); font-size: 0.8125rem; margin-bottom: 1.25rem; border: 1px solid rgba(239, 68, 68, 0.2);">
        ${icons.alertCircle('icon', 16, 2)}
        <span id="auth-error-text" style="margin-left: 0.35rem;"></span>
      </div>

      <div class="form-group">
        <label class="form-label" for="reg-name">Nama Lengkap</label>
        <input class="form-input" id="reg-name" type="text" required placeholder="Nama Anda atau Nama Perusahaan" />
      </div>

      <div class="form-group">
        <label class="form-label" for="reg-email">Alamat Surel</label>
        <input class="form-input" id="reg-email" type="email" required placeholder="nama@perusahaan.com" />
      </div>

      <div class="form-group">
        <label class="form-label" for="reg-password">Kata Sandi</label>
        <input class="form-input" id="reg-password" type="password" required placeholder="Minimal 8 karakter" />
      </div>

      <button type="submit" class="btn btn-primary btn-block btn-lg" id="register-submit-btn" style="margin-top: 1.5rem;">
        <span>Buat Akun MultiCloud</span>
        ${icons.arrowRight('icon', 16, 2)}
      </button>

      <div style="text-align: center; margin-top: 1.5rem; font-size: 0.875rem; color: var(--text-secondary);">
        Sudah terdaftar? <a href="#/login" style="color: var(--color-primary); font-weight: 600;">Masuk di sini</a>
      </div>
    </form>
  `;
}

function renderForgotForm() {
  return `
    <form id="forgot-form">
      <div class="form-group">
        <label class="form-label" for="forgot-email">Alamat Surel Terdaftar</label>
        <input class="form-input" id="forgot-email" type="email" required placeholder="nama@perusahaan.com" />
      </div>

      <button type="submit" class="btn btn-primary btn-block btn-lg" style="margin-top: 1.5rem;">
        <span>Kirimkan Tautan Pemulihan</span>
        ${icons.mail('icon', 16, 2)}
      </button>

      <div style="text-align: center; margin-top: 1.5rem; font-size: 0.875rem;">
        <a href="#/login" style="color: var(--color-primary); font-weight: 600;">Kembali ke halaman Masuk</a>
      </div>
    </form>
  `;
}

export function setupAuthPageEvents() {
  const loginForm = document.getElementById('login-form');
  const errorBox = document.getElementById('auth-error-box');
  const errorText = document.getElementById('auth-error-text');

  if (loginForm) {
    loginForm.onsubmit = async (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value.trim();
      const password = document.getElementById('login-password').value;
      const submitBtn = document.getElementById('login-submit-btn');

      if (submitBtn) {
        submitBtn.classList.add('disabled');
        submitBtn.innerHTML = `<span>Memverifikasi Akun...</span>`;
      }
      if (errorBox) errorBox.style.display = 'none';

      const result = await supabaseService.authenticateUser(email, password);

      if (result.success) {
        store.login(result.user.email, result.user.role, result.user);
        window.location.hash = '#/dashboard';
      } else {
        if (submitBtn) {
          submitBtn.classList.remove('disabled');
          submitBtn.innerHTML = `<span>Masuk ke Akun</span> ${icons.arrowRight('icon', 16, 2)}`;
        }
        if (errorBox && errorText) {
          errorText.textContent = result.message || 'Alamat surel atau kata sandi tidak sesuai.';
          errorBox.style.display = 'block';
        }
      }
    };
  }

  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.onsubmit = async (e) => {
      e.preventDefault();
      const name = document.getElementById('reg-name').value.trim();
      const email = document.getElementById('reg-email').value.trim();
      const password = document.getElementById('reg-password').value;
      const submitBtn = document.getElementById('register-submit-btn');

      if (submitBtn) {
        submitBtn.classList.add('disabled');
        submitBtn.innerHTML = `<span>Mendaftarkan...</span>`;
      }
      if (errorBox) errorBox.style.display = 'none';

      const result = await supabaseService.registerUser(email, password, name);

      if (result.success) {
        alert(result.message);
        if (result.needsConfirmation) {
          // Arahkan ke halaman login agar user tahu harus konfirmasi atau login setelah verifikasi
          window.location.hash = '#/login';
        } else {
          store.login(email, 'user', {
            id: result.user?.id || ('usr_' + Math.floor(100 + Math.random() * 900)),
            name: name,
            email: email,
            role: 'user',
            company: 'Pribadi',
            phone: '',
            joinedDate: new Date().toISOString().slice(0, 10),
            avatar: 'US'
          });
          window.location.hash = '#/dashboard';
        }
      } else {
        if (submitBtn) {
          submitBtn.classList.remove('disabled');
          submitBtn.innerHTML = `<span>Buat Akun MultiCloud</span> ${icons.arrowRight('icon', 16, 2)}`;
        }
        if (errorBox && errorText) {
          errorText.textContent = result.message || 'Gagal mendaftar akun baru.';
          errorBox.style.display = 'block';
        }
      }
    };
  }

  const forgotForm = document.getElementById('forgot-form');
  if (forgotForm) {
    forgotForm.onsubmit = (e) => {
      e.preventDefault();
      alert('Tautan pemulihan kata sandi telah dikirimkan ke alamat surel Anda.');
      window.location.hash = '#/login';
    };
  }

  const demoUserBtn = document.getElementById('quick-login-user-btn');
  if (demoUserBtn) {
    demoUserBtn.onclick = () => {
      store.login('ahmad.fauzan@devstudio.id', 'user');
      window.location.hash = '#/dashboard';
    };
  }
}
