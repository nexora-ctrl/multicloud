/**
 * MultiCloud - Komponen Navigasi Utama (Navbar)
 * Menggunakan istilah baku Bahasa Indonesia (KBBI).
 */

import { icons } from '../icons.js';
import { store } from '../state.js';
import { toggleTheme } from '../theme.js';

export function renderNavbar(activeRoute = '/') {
  const state = store.getState();
  const user = state.currentUser;

  return `
    <header class="navbar" id="site-navbar">
      <div class="container navbar-container">
        <!-- Logo Merek -->
        <a href="#/" class="brand-logo" aria-label="Beranda MultiCloud">
          <div class="brand-icon">
            ${icons.cloud('brand-svg', 20, 2)}
          </div>
          <div class="brand-text">
            <span class="brand-name">MultiCloud</span>
            <span class="brand-tagline-mini">Layanan Digital</span>
          </div>
        </a>

        <!-- Menu Navigasi Desktop -->
        <nav class="nav-menu" aria-label="Navigasi Utama">
          <a href="#/" class="nav-link ${activeRoute === '/' ? 'active' : ''}">Beranda</a>
          <a href="#/services" class="nav-link ${activeRoute === '/services' ? 'active' : ''}">Layanan</a>
          <a href="#/products" class="nav-link ${activeRoute.startsWith('/products') ? 'active' : ''}">Produk</a>
          <a href="#/pricing" class="nav-link ${activeRoute === '/pricing' ? 'active' : ''}">Tarif</a>
          <a href="#/docs" class="nav-link ${activeRoute === '/docs' ? 'active' : ''}">Dokumentasi</a>
          <a href="#/about" class="nav-link ${activeRoute === '/about' ? 'active' : ''}">Tentang Kami</a>
          <a href="#/contact" class="nav-link ${activeRoute === '/contact' ? 'active' : ''}">Kontak</a>
        </nav>

        <!-- Aksi Navbar & Penggantian Tema -->
        <div class="navbar-actions">
          <!-- Tombol Penggantian Tema (Sun/Moon Tabler Icon) -->
          <button class="theme-toggle-btn" id="theme-toggle-btn" type="button" aria-label="Ganti Tema Warna" title="Ganti Tema Warna">
            ${icons.moon('theme-icon', 18, 2)}
          </button>

          ${user ? `
            <a href="#/dashboard" class="btn btn-outline btn-sm">
              ${icons.user('icon', 16, 2)}
              <span>Dasbor</span>
            </a>
            ${user.role === 'admin' ? `
              <a href="#/admin" class="btn btn-primary btn-sm" style="background-color: var(--color-accent); border-color: var(--color-accent);">
                ${icons.layoutDashboard('icon', 16, 2)}
                <span>Dasbor Admin</span>
              </a>
            ` : ''}
          ` : `
            <a href="#/login" class="btn btn-ghost btn-sm">Masuk</a>
            <a href="#/register" class="btn btn-primary btn-sm">Daftar</a>
          `}

          <!-- Tombol Menu Seluler -->
          <button class="mobile-toggle-btn" id="mobile-toggle-btn" type="button" aria-label="Buka Menu Navigasi">
            ${icons.menu('menu-icon', 20, 2)}
          </button>
        </div>
      </div>
    </header>

    <!-- Bilah Navigasi Seluler -->
    <div class="mobile-nav-overlay" id="mobile-nav-overlay"></div>
    <aside class="mobile-nav-drawer" id="mobile-nav-drawer" aria-label="Navigasi Seluler">
      <div>
        <div class="mobile-nav-header">
          <a href="#/" class="brand-logo">
            <div class="brand-icon">
              ${icons.cloud('brand-svg', 20, 2)}
            </div>
            <span class="brand-name">MultiCloud</span>
          </a>
          <button class="btn btn-ghost btn-sm" id="mobile-close-btn" aria-label="Tutup Menu Navigasi">
            ${icons.x('icon', 20, 2)}
          </button>
        </div>
        <nav class="mobile-nav-links">
          <a href="#/" class="mobile-nav-link ${activeRoute === '/' ? 'active' : ''}">
            <span>Beranda</span>
            ${icons.chevronRight('icon', 16, 2)}
          </a>
          <a href="#/services" class="mobile-nav-link ${activeRoute === '/services' ? 'active' : ''}">
            <span>Layanan</span>
            ${icons.chevronRight('icon', 16, 2)}
          </a>
          <a href="#/products" class="mobile-nav-link ${activeRoute.startsWith('/products') ? 'active' : ''}">
            <span>Produk</span>
            ${icons.chevronRight('icon', 16, 2)}
          </a>
          <a href="#/pricing" class="mobile-nav-link ${activeRoute === '/pricing' ? 'active' : ''}">
            <span>Tarif</span>
            ${icons.chevronRight('icon', 16, 2)}
          </a>
          <a href="#/docs" class="mobile-nav-link ${activeRoute === '/docs' ? 'active' : ''}">
            <span>Dokumentasi</span>
            ${icons.chevronRight('icon', 16, 2)}
          </a>
          <a href="#/about" class="mobile-nav-link ${activeRoute === '/about' ? 'active' : ''}">
            <span>Tentang Kami</span>
            ${icons.chevronRight('icon', 16, 2)}
          </a>
          <a href="#/contact" class="mobile-nav-link ${activeRoute === '/contact' ? 'active' : ''}">
            <span>Kontak</span>
            ${icons.chevronRight('icon', 16, 2)}
          </a>
        </nav>
      </div>

      <div class="mobile-nav-actions">
        ${user ? `
          <a href="#/dashboard" class="btn btn-secondary btn-block">
            ${icons.user('icon', 18, 2)}
            <span>Dasbor Pengguna</span>
          </a>
          ${user.role === 'admin' ? `
            <a href="#/admin" class="btn btn-primary btn-block" style="background-color: var(--color-accent); border-color: var(--color-accent);">
              ${icons.layoutDashboard('icon', 18, 2)}
              <span>Dasbor Admin</span>
            </a>
          ` : ''}
          <button class="btn btn-ghost btn-block" id="mobile-logout-btn">
            ${icons.logout('icon', 18, 2)}
            <span>Keluar Akun</span>
          </button>
        ` : `
          <a href="#/login" class="btn btn-outline btn-block">Masuk ke Akun</a>
          <a href="#/register" class="btn btn-primary btn-block">Daftar Akun Baru</a>
          <a href="#/admin-login" class="btn btn-ghost btn-block" style="font-size: 0.8125rem; color: var(--text-muted);">
            ${icons.lock('icon', 14, 2)} Masuk Khusus Administrator
          </a>
        `}
      </div>
    </aside>
  `;
}

export function setupNavbarEvents() {
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.onclick = () => toggleTheme();
  }

  const mobileToggle = document.getElementById('mobile-toggle-btn');
  const mobileClose = document.getElementById('mobile-close-btn');
  const overlay = document.getElementById('mobile-nav-overlay');
  const drawer = document.getElementById('mobile-nav-drawer');

  const openDrawer = () => {
    if (overlay && drawer) {
      overlay.style.display = 'block';
      drawer.style.display = 'flex';
    }
  };

  const closeDrawer = () => {
    if (overlay && drawer) {
      overlay.style.display = 'none';
      drawer.style.display = 'none';
    }
  };

  if (mobileToggle) mobileToggle.onclick = openDrawer;
  if (mobileClose) mobileClose.onclick = closeDrawer;
  if (overlay) overlay.onclick = closeDrawer;

  const links = drawer?.querySelectorAll('a');
  links?.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  const logoutBtn = document.getElementById('mobile-logout-btn');
  if (logoutBtn) {
    logoutBtn.onclick = () => {
      store.logout();
      window.location.hash = '#/';
      closeDrawer();
    };
  }
}
