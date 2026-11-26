/**
 * MultiCloud - Halaman Masuk & Registrasi Pengguna (Auth View)
 * Ditulis sesuai kaidah Bahasa Indonesia baku (KBBI).
 */

import { icons } from '../icons.js';
import { store } from '../state.js';
import { supabaseService } from '../supabase.js';

export function renderAuthPage(mode = 'login') {
  const activeUser = store.getState().currentUser;

  return `
    <div style="min-height: calc(100vh - var(--navbar-height) - 100px); display: flex; align-items: center; justify-content: center; padding: 3rem 1.5rem;">
      <div class="card" style="width: 100%; max-width: 460px; padding: 2.5rem; box-shadow: var(--card-shadow-hover);">
        <!-- Header Logo -->
        <div style="text-align: center; margin-bottom: 1.75rem;">
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
            ${mode === 'register'
              ? 'Satu akun untuk seluruh layanan komputasi awan, API, dan lisensi resmi'
              : mode === 'forgot'
                ? 'Masukkan alamat surel terdaftar untuk instruksi pemulihan kata sandi'
                : 'Kelola peladen awan, kunci API, dan lisensi resmi Anda'}
          </p>
        </div>

        ${activeUser && mode === 'register' ? `
          <div class="auth-alert auth-alert-info" role="status">
            ${icons.infoCircle('icon', 17, 2)}
            <span>Sesi aktif saat ini: <strong>${activeUser.name}</strong>. Membuat akun baru akan otomatis beralih ke akun baru Anda.</span>
          </div>
        ` : ''}

        <!-- Formulir -->
        <div id="auth-forms-container">
          ${mode === 'register' ? renderRegisterForm() : mode === 'forgot' ? renderForgotForm() : renderLoginForm()}
        </div>
      </div>
    </div>
  `;
}

function renderLoginForm() {
  return `
    <form id="login-form" novalidate>
      <div id="auth-feedback-box" class="auth-alert auth-alert-error" role="alert" style="display: none;">
        <span id="auth-feedback-icon">${icons.alertCircle('icon', 17, 2)}</span>
        <span id="auth-feedback-text"></span>
      </div>

      <div class="form-group">
        <label class="form-label" for="login-email">Alamat Surel</label>
        <input class="form-input" id="login-email" type="email" autocomplete="email" required placeholder="nama@email.com" value="" />
      </div>

      <div class="form-group">
        <div class="form-label">
          <label for="login-password">Kata Sandi</label>
          <a href="#/forgot-password" style="font-size: 0.8125rem; color: var(--color-primary);">Lupa kata sandi?</a>
        </div>
        <div class="password-field-wrap">
          <input class="form-input password-input" id="login-password" type="password" autocomplete="current-password" required placeholder="Masukkan kata sandi" value="" />
          <button type="button" class="password-toggle-btn" data-target="login-password" aria-label="Tampilkan kata sandi">
            ${icons.eye('icon', 18, 2)}
          </button>
        </div>
      </div>

      <button type="submit" class="btn btn-primary btn-block btn-lg" id="login-submit-btn" style="margin-top: 1.5rem;">
        <span>Masuk ke Akun</span>
      </button>

      <div style="text-align: center; margin-top: 1.5rem; font-size: 0.875rem; color: var(--text-secondary);">
        Belum memiliki akun MultiCloud? <a href="#/register" style="color: var(--color-primary); font-weight: 600;">Daftar sekarang</a>
      </div>
    </form>
  `;
}

function renderRegisterForm() {
  return `
    <form id="register-form" novalidate>
      <div id="auth-feedback-box" class="auth-alert auth-alert-error" role="alert" style="display: none;">
        <span id="auth-feedback-icon">${icons.alertCircle('icon', 17, 2)}</span>
        <span id="auth-feedback-text"></span>
      </div>

      <div class="form-group">
        <label class="form-label" for="reg-name">Nama Lengkap</label>
        <input class="form-input" id="reg-name" type="text" autocomplete="name" required minlength="2" placeholder="Contoh: Budi Santoso" />
      </div>

      <div class="form-group">
        <label class="form-label" for="reg-email">Alamat Surel</label>
        <input class="form-input" id="reg-email" type="email" autocomplete="email" required placeholder="nama@email.com" />
      </div>

      <div class="form-group">
        <label class="form-label" for="reg-password">Kata Sandi</label>
        <div class="password-field-wrap">
          <input class="form-input password-input" id="reg-password" type="password" autocomplete="new-password" required minlength="6" placeholder="Minimal 6 karakter" />
          <button type="button" class="password-toggle-btn" data-target="reg-password" aria-label="Tampilkan kata sandi">
            ${icons.eye('icon', 18, 2)}
          </button>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label" for="reg-password-confirm">Konfirmasi Kata Sandi</label>
        <div class="password-field-wrap">
          <input class="form-input password-input" id="reg-password-confirm" type="password" autocomplete="new-password" required minlength="6" placeholder="Ketik ulang kata sandi" />
          <button type="button" class="password-toggle-btn" data-target="reg-password-confirm" aria-label="Tampilkan konfirmasi kata sandi">
            ${icons.eye('icon', 18, 2)}
          </button>
        </div>
      </div>

      <button type="submit" class="btn btn-primary btn-block btn-lg" id="register-submit-btn" style="margin-top: 1.5rem;">
        <span>Buat Akun MultiCloud</span>
      </button>

      <div style="text-align: center; margin-top: 1.5rem; font-size: 0.875rem; color: var(--text-secondary);">
        Sudah terdaftar? <a href="#/login" style="color: var(--color-primary); font-weight: 600;">Masuk di sini</a>
      </div>
    </form>
  `;
}

function renderForgotForm() {
  return `
    <form id="forgot-form" novalidate>
      <div id="auth-feedback-box" class="auth-alert auth-alert-error" role="alert" style="display: none;">
        <span id="auth-feedback-icon">${icons.alertCircle('icon', 17, 2)}</span>
        <span id="auth-feedback-text"></span>
      </div>

      <div class="form-group">
        <label class="form-label" for="forgot-email">Alamat Surel Terdaftar</label>
        <input class="form-input" id="forgot-email" type="email" autocomplete="email" required placeholder="nama@email.com" />
      </div>

      <button type="submit" class="btn btn-primary btn-block btn-lg" id="forgot-submit-btn" style="margin-top: 1.5rem;">
        ${icons.mail('icon', 16, 2)}
        <span>Kirimkan Tautan Pemulihan</span>
      </button>

      <div style="text-align: center; margin-top: 1.5rem; font-size: 0.875rem;">
        <a href="#/login" style="color: var(--color-primary); font-weight: 600;">Kembali ke halaman Masuk</a>
      </div>
    </form>
  `;
}

function showAuthFeedback(type, message) {
  const box = document.getElementById('auth-feedback-box');
  const iconEl = document.getElementById('auth-feedback-icon');
  const textEl = document.getElementById('auth-feedback-text');
  if (!box || !textEl) return;

  box.className = `auth-alert ${type === 'success' ? 'auth-alert-success' : 'auth-alert-error'}`;
  box.setAttribute('role', type === 'success' ? 'status' : 'alert');
  if (iconEl) {
    iconEl.innerHTML = type === 'success'
      ? icons.checkCircle('icon', 17, 2)
      : icons.alertCircle('icon', 17, 2);
  }
  textEl.textContent = message;
  box.style.display = 'flex';
}

export function setupAuthPageEvents() {
  // Tombol tampilkan / sembunyikan kata sandi
  document.querySelectorAll('.password-toggle-btn').forEach(btn => {
    btn.onclick = () => {
      const targetId = btn.getAttribute('data-target');
      const input = document.getElementById(targetId);
      if (!input) return;
      const isHidden = input.type === 'password';
      input.type = isHidden ? 'text' : 'password';
      btn.setAttribute('aria-label', isHidden ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi');
      btn.innerHTML = isHidden ? icons.eyeOff('icon', 18, 2) : icons.eye('icon', 18, 2);
    };
  });

  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.onsubmit = async (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value.trim();
      const password = document.getElementById('login-password').value;
      const submitBtn = document.getElementById('login-submit-btn');

      if (!email || !password) {
        showAuthFeedback('error', 'Mohon lengkapi alamat surel dan kata sandi Anda.');
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Memverifikasi Akun...</span>';
      }

      const feedbackBox = document.getElementById('auth-feedback-box');
      if (feedbackBox) feedbackBox.style.display = 'none';

      const result = await supabaseService.authenticateUser(email, password);

      if (result.success) {
        if (result.user.role === 'admin') {
          window.location.hash = '#/admin';
          store.setAdminUser(result.user);
        } else {
          window.location.hash = '#/dashboard';
          store.login(result.user.email, result.user.role, result.user);
        }
      } else {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<span>Masuk ke Akun</span>';
        }
        showAuthFeedback('error', result.message || 'Alamat surel atau kata sandi tidak sesuai.');
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
      const confirmInput = document.getElementById('reg-password-confirm');
      const passwordConfirm = confirmInput ? confirmInput.value : password;
      const submitBtn = document.getElementById('register-submit-btn');

      if (name.length < 2) {
        showAuthFeedback('error', 'Mohon isi nama lengkap minimal 2 karakter.');
        return;
      }
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showAuthFeedback('error', 'Mohon masukkan alamat surel yang valid.');
        return;
      }
      if (password.length < 6) {
        showAuthFeedback('error', 'Kata sandi wajib terdiri atas minimal 6 karakter.');
        return;
      }
      if (password !== passwordConfirm) {
        showAuthFeedback('error', 'Konfirmasi kata sandi tidak cocok dengan kata sandi utama.');
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Mendaftarkan Akun...</span>';
      }

      const feedbackBox = document.getElementById('auth-feedback-box');
      if (feedbackBox) feedbackBox.style.display = 'none';

      const result = await supabaseService.registerUser(email, password, name);

      if (result.success) {
        if (result.needsConfirmation) {
          showAuthFeedback('success', result.message);
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<span>Buat Akun MultiCloud</span>';
          }
          registerForm.reset();
        } else {
          showAuthFeedback('success', result.message);
          const newUserProfile = result.user || {
            id: 'usr_' + Date.now().toString(36),
            name,
            email: email.toLowerCase(),
            role: 'user',
            company: 'Pribadi',
            phone: '',
            joinedDate: new Date().toISOString().slice(0, 10),
            avatar: name.slice(0, 2).toUpperCase()
          };
          window.location.hash = '#/dashboard';
          store.login(newUserProfile.email, 'user', newUserProfile);
        }
      } else {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<span>Buat Akun MultiCloud</span>';
        }
        showAuthFeedback('error', result.message || 'Gagal mendaftarkan akun baru.');
      }
    };
  }

  const forgotForm = document.getElementById('forgot-form');
  if (forgotForm) {
    forgotForm.onsubmit = (e) => {
      e.preventDefault();
      const email = document.getElementById('forgot-email').value.trim();
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showAuthFeedback('error', 'Mohon masukkan alamat surel terdaftar yang valid.');
        return;
      }
      showAuthFeedback('success', `Instruksi pemulihan kata sandi untuk ${email} telah dikirimkan.`);
      forgotForm.reset();
    };
  }
}
