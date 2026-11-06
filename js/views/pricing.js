/**
 * MultiCloud - Halaman Tarif Layanan (Pricing Page View)
 * Ditulis sesuai kaidah Bahasa Indonesia baku (KBBI).
 */

import { icons } from '../icons.js';
import { pricingPlans, pricingComparisonMatrix } from '../data/pricing.js';
import { openOrderModal } from '../components/modal.js';

let isAnnualBilling = false;

export function renderPricingPage() {
  isAnnualBilling = false;

  return `
    <div class="page-header">
      <div class="container">
        <div class="breadcrumbs">
          <a href="#/">Beranda</a>
          ${icons.chevronRight('icon', 14, 2)}
          <span class="current">Tarif</span>
        </div>
        <div class="page-header-content text-center" style="max-width: 680px; margin: 0 auto; text-align: center;">
          <h1 style="font-size: 2.75rem; font-weight: 800; margin-bottom: 0.75rem;">Paket Tarif Transparan</h1>
          <p style="font-size: 1.125rem; color: var(--text-secondary); line-height: 1.6;">
            Pilih paket infrastruktur komputasi awan dan gerbang API yang sesuai dengan skala proyek Anda. Tanpa biaya tersembunyi, dapat ditingkatkan kapan pun.
          </p>
        </div>
      </div>
    </div>

    <div class="container" style="padding-bottom: 5rem;">
      <!-- Pengalih Siklus Tagihan -->
      <div class="pricing-toggle-container">
        <span class="pricing-toggle-label active" id="billing-monthly-label">Tagihan Bulanan</span>
        <div class="pricing-switch" id="pricing-cycle-switch" role="button" aria-label="Alihkan Tagihan Tahunan" tabindex="0">
          <div class="switch-circle"></div>
        </div>
        <span class="pricing-toggle-label" id="billing-annual-label">Tagihan Tahunan</span>
        <span class="discount-badge">Hemat 20%</span>
      </div>

      <!-- Kartu Paket Tarif -->
      <div class="pricing-grid">
        ${pricingPlans.map(plan => `
          <div class="pricing-card ${plan.isPopular ? 'popular' : ''}">
            ${plan.isPopular ? `
              <div class="popular-banner">
                ${icons.star('icon', 14, 2)}
                <span>${plan.badge}</span>
              </div>
            ` : ''}

            <div class="pricing-header">
              <h3 class="plan-name">${plan.name}</h3>
              <p class="plan-description">${plan.description}</p>
            </div>

            <div class="pricing-amount-block">
              <span class="price-currency">Rp</span>
              <span class="price-number" data-monthly="${plan.priceMonthly}" data-yearly="${plan.priceYearly}">
                ${new Intl.NumberFormat('id-ID').format(plan.priceMonthly)}
              </span>
              <span class="price-freq">/bulan</span>
            </div>
            <div class="pricing-billing-note" data-monthly-note="${plan.billingNote}">
              ${plan.billingNote}
            </div>

            <div class="pricing-divider"></div>

            <div class="pricing-features-list">
              ${plan.features.map(f => `
                <div class="pricing-feature-row ${f.included ? '' : 'excluded'}">
                  <span class="${f.included ? 'icon-check' : 'icon-cross'}">
                    ${f.included ? icons.check('icon', 18, 2) : icons.x('icon', 18, 2)}
                  </span>
                  <span>${f.text}</span>
                </div>
              `).join('')}
            </div>

            <button class="btn ${plan.isPopular ? 'btn-primary' : 'btn-outline'} btn-block pricing-select-plan-btn" data-plan-id="${plan.id}" data-plan-name="${plan.name}">
              <span>${plan.ctaText}</span>
              ${icons.arrowRight('icon', 16, 2)}
            </button>
          </div>
        `).join('')}
      </div>

      <!-- Matriks Komparasi Fitur -->
      <div class="matrix-section">
        <div style="text-align: center; max-width: 600px; margin: 0 auto 2.5rem auto;">
          <h2 style="font-size: 1.875rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.5rem;">
            Matriks Perbandingan Fitur Detail
          </h2>
          <p style="color: var(--text-secondary); font-size: 0.9375rem;">
            Bandingkan seluruh spesifikasi teknis dan batasan kapasitas untuk menentukan pilihan terbaik bagi kebutuhan sistem Anda.
          </p>
        </div>

        <div style="overflow-x: auto;">
          <table class="matrix-table">
            <thead>
              <tr>
                <th style="width: 35%;">Fitur & Kapasitas Teknis</th>
                <th style="width: 21%;">Pengembang Pemula</th>
                <th style="width: 22%;">Bisnis Pro (Populer)</th>
                <th style="width: 22%;">Korporat Skala Besar</th>
              </tr>
            </thead>
            <tbody>
              ${pricingComparisonMatrix.map(group => `
                <tr class="matrix-cat-row">
                  <th colspan="4">${group.category}</th>
                </tr>
                ${group.items.map(item => `
                  <tr>
                    <td style="font-weight: 500; color: var(--text-primary);">${item.name}</td>
                    <td>${item.starter}</td>
                    <td style="font-weight: 600; color: var(--color-primary);">${item.pro}</td>
                    <td>${item.enterprise}</td>
                  </tr>
                `).join('')}
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

export function setupPricingPageEvents() {
  const switchBtn = document.getElementById('pricing-cycle-switch');
  const monthlyLabel = document.getElementById('billing-monthly-label');
  const annualLabel = document.getElementById('billing-annual-label');
  const priceNumbers = document.querySelectorAll('.price-number');

  const updatePrices = () => {
    priceNumbers.forEach(el => {
      const monthly = parseInt(el.getAttribute('data-monthly'), 10);
      const yearly = parseInt(el.getAttribute('data-yearly'), 10);
      const val = isAnnualBilling ? yearly : monthly;
      el.textContent = new Intl.NumberFormat('id-ID').format(val);
    });

    if (isAnnualBilling) {
      switchBtn.classList.add('active');
      monthlyLabel.classList.remove('active');
      annualLabel.classList.add('active');
    } else {
      switchBtn.classList.remove('active');
      monthlyLabel.classList.add('active');
      annualLabel.classList.remove('active');
    }
  };

  if (switchBtn) {
    switchBtn.onclick = () => {
      isAnnualBilling = !isAnnualBilling;
      updatePrices();
    };
  }

  if (monthlyLabel) {
    monthlyLabel.onclick = () => {
      isAnnualBilling = false;
      updatePrices();
    };
  }

  if (annualLabel) {
    annualLabel.onclick = () => {
      isAnnualBilling = true;
      updatePrices();
    };
  }

  const planButtons = document.querySelectorAll('.pricing-select-plan-btn');
  planButtons.forEach(btn => {
    btn.onclick = () => {
      const planName = btn.getAttribute('data-plan-name');
      const planId = btn.getAttribute('data-plan-id');
      const plan = pricingPlans.find(p => p.id === planId) || pricingPlans[0];
      const amount = isAnnualBilling ? plan.priceYearly * 12 : plan.priceMonthly;

      openOrderModal({
        itemTitle: 'Langganan ' + plan.name,
        category: 'cloud-hosting',
        packageName: isAnnualBilling ? 'Paket Tahunan (Hemat 20%)' : 'Paket Bulanan',
        amount: amount
      });
    };
  });
}
