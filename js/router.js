/**
 * MultiCloud - Perute Klien (Client Router)
 * Mengatur pergantian tampilan SPA, status navigasi aktif, dan proteksi rute admin.
 * Ditulis sesuai kaidah Bahasa Indonesia baku (KBBI).
 */

import { renderNavbar, setupNavbarEvents } from './components/navbar.js';
import { renderFooter } from './components/footer.js';

import { renderHomePage, setupHomePageEvents } from './views/home.js';
import { renderServicesPage, setupServicesPageEvents } from './views/services.js';
import { renderProductsPage, setupProductsPageEvents } from './views/products.js';
import { renderProductDetailPage, setupProductDetailPageEvents } from './views/product-detail.js';
import { renderPricingPage, setupPricingPageEvents } from './views/pricing.js';
import { renderAboutPage } from './views/about.js';
import { renderContactPage, setupContactPageEvents } from './views/contact.js';
import { renderDocsPage } from './views/docs.js';
import { renderAuthPage, setupAuthPageEvents } from './views/auth.js';
import { renderAdminLoginPage, setupAdminLoginPageEvents } from './views/admin-login.js';
import { renderUserDashboard, setupUserDashboardEvents } from './views/dashboard-user.js';
import { renderAdminDashboard, setupAdminDashboardEvents } from './views/dashboard-admin.js';
import { productsList } from './data/products.js';
import { store } from './state.js';

export function handleRoute() {
  const fullHash = window.location.hash || '#/';
  const cleanPath = fullHash.replace(/^#/, '') || '/';
  const [routePart, queryPart] = cleanPath.split('?');
  const params = new URLSearchParams(queryPart || '');

  const app = document.getElementById('app');
  if (!app) return;

  // Gulir ke atas otomatis setiap pergantian rute
  window.scrollTo({ top: 0, behavior: 'instant' });

  let mainHtml = '';
  let setupFn = null;
  let activeNavRoute = routePart;

  if (routePart === '/' || routePart === '') {
    mainHtml = renderHomePage();
    setupFn = setupHomePageEvents;
    activeNavRoute = '/';
  } else if (routePart === '/services') {
    const category = params.get('category') || 'all';
    mainHtml = renderServicesPage(category);
    setupFn = setupServicesPageEvents;
    activeNavRoute = '/services';
  } else if (routePart === '/products') {
    const category = params.get('category') || 'all';
    mainHtml = renderProductsPage(category);
    setupFn = setupProductsPageEvents;
    activeNavRoute = '/products';
    document.title = 'Katalog Produk Digital & Canva Premium - MultiCloud';
  } else if (routePart.startsWith('/products/')) {
    const productId = routePart.replace('/products/', '');
    const matchedProd = productsList.find(p => p.id === productId || p.slug === productId);
    mainHtml = renderProductDetailPage(productId);
    setupFn = () => setupProductDetailPageEvents(productId);
    activeNavRoute = '/products';
    document.title = matchedProd ? `${matchedProd.name} - MultiCloud` : 'Produk Tidak Ditemukan - MultiCloud';
  } else if (routePart === '/pricing') {
    mainHtml = renderPricingPage();
    setupFn = setupPricingPageEvents;
    activeNavRoute = '/pricing';
  } else if (routePart === '/about') {
    mainHtml = renderAboutPage();
    setupFn = null;
    activeNavRoute = '/about';
  } else if (routePart === '/contact') {
    mainHtml = renderContactPage();
    setupFn = setupContactPageEvents;
    activeNavRoute = '/contact';
  } else if (routePart === '/docs') {
    mainHtml = renderDocsPage();
    setupFn = null;
    activeNavRoute = '/docs';
  } else if (routePart === '/login') {
    mainHtml = renderAuthPage('login');
    setupFn = setupAuthPageEvents;
    activeNavRoute = '/login';
    document.title = 'Masuk ke Akun - MultiCloud';
  } else if (routePart === '/register') {
    mainHtml = renderAuthPage('register');
    setupFn = setupAuthPageEvents;
    activeNavRoute = '/register';
    document.title = 'Pendaftaran Akun Baru - MultiCloud';
  } else if (routePart === '/forgot-password') {
    mainHtml = renderAuthPage('forgot');
    setupFn = setupAuthPageEvents;
    activeNavRoute = '/login';
    document.title = 'Pemulihan Kata Sandi - MultiCloud';
  } else if (routePart === '/admin-login' || routePart === '/admin/login') {
    mainHtml = renderAdminLoginPage();
    setupFn = setupAdminLoginPageEvents;
    activeNavRoute = '/admin-login';
  } else if (routePart.startsWith('/admin')) {
    // Proteksi Rute Administrator: Hanya dapat diakses jika masuk sebagai admin
    if (!store.isAdmin()) {
      window.location.hash = '#/admin-login';
      return;
    }
    const subTab = routePart.split('/')[2] || 'overview';
    mainHtml = renderAdminDashboard(subTab);
    setupFn = setupAdminDashboardEvents;
    activeNavRoute = '/admin';
  } else if (routePart.startsWith('/dashboard')) {
    // Proteksi Rute Dasbor Pengguna: Jika belum masuk, arahkan ke halaman masuk
    const state = store.getState();
    if (!state.currentUser) {
      window.location.hash = '#/login';
      return;
    }
    const subTab = routePart.split('/')[2] || 'overview';
    mainHtml = renderUserDashboard(subTab);
    setupFn = setupUserDashboardEvents;
    activeNavRoute = '/dashboard';
  } else {
    mainHtml = `
      <div class="container text-center" style="padding: 6rem 1.5rem; text-align: center;">
        <h1 style="font-size: 3.5rem; font-weight: 800; color: var(--color-primary); margin-bottom: 1rem;">404</h1>
        <h2 style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--text-primary);">Halaman Tidak Ditemukan</h2>
        <p style="color: var(--text-secondary); margin-bottom: 2rem;">Alamat yang Anda tuju mungkin telah dipindahkan atau belum tersedia.</p>
        <a href="#/" class="btn btn-primary btn-md">Kembali ke Beranda</a>
      </div>
    `;
    activeNavRoute = '/';
  }

  // Render Struktur Tata Letak
  app.innerHTML = `
    ${renderNavbar(activeNavRoute)}
    <main role="main">
      ${mainHtml}
    </main>
    ${renderFooter()}
  `;

  // Hubungkan event interaktif
  setupNavbarEvents();
  if (typeof setupFn === 'function') {
    setupFn();
  }
}
