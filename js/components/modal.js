/**
 * MultiCloud - Komponen Modal Dialog & Alur Pembayaran
 * Ditulis sesuai kaidah Bahasa Indonesia baku (KBBI).
 */

import { icons } from '../icons.js';
import { store } from '../state.js';

let activeModal = null;

export function openModal(htmlContent) {
  closeModal();

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay active';
  overlay.id = 'dynamic-modal-overlay';
  overlay.innerHTML = `
    <div class="modal-card" id="modal-card-box" role="dialog" aria-modal="true" aria-labelledby="modal-dialog-title">
      ${htmlContent}
    </div>
  `;

  document.body.appendChild(overlay);
  activeModal = overlay;
  document.body.style.overflow = 'hidden';

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  const escHandler = (e) => {
    if (e.key === 'Escape') {
      closeModal();
      window.removeEventListener('keydown', escHandler);
    }
  };
  window.addEventListener('keydown', escHandler);

  const closeBtn = overlay.querySelector('.modal-close-trigger');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
}

export function closeModal() {
  if (activeModal && activeModal.parentNode) {
    activeModal.parentNode.removeChild(activeModal);
    activeModal = null;
    document.body.style.overflow = '';
  }
}

/**
 * Modal Rincian Layanan
 */
export function openServiceDetailModal(service) {
  const formatRp = (num) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);

  const content = `
    <div class="modal-header">
      <div class="flex items-center gap-3">
        <div class="card-icon-box">
          ${icons[service.icon] ? icons[service.icon]('icon', 22, 2) : icons.cloud('icon', 22, 2)}
        </div>
        <div>
          <h3 class="modal-title">${service.name}</h3>
          <span style="font-size: 0.8125rem; color: var(--color-primary); font-weight: 600;">${service.tagline}</span>
        </div>
      </div>
      <button class="btn btn-ghost btn-sm modal-close-trigger" aria-label="Tutup">
        ${icons.x('icon', 20, 2)}
      </button>
    </div>
    <div class="modal-body">
      <p style="font-size: 0.9375rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">
        ${service.description}
      </p>

      <div style="background-color: var(--bg-surface-secondary); padding: 1.25rem; border-radius: var(--radius-lg); margin-bottom: 1.5rem; border: 1px solid var(--border-color);">
        <h4 style="font-size: 0.875rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin-bottom: 0.75rem;">
          Spesifikasi Teknis
        </h4>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem; font-size: 0.875rem;">
          ${Object.entries(service.specs || {}).map(([key, val]) => `
            <div>
              <span style="color: var(--text-muted); display: block; font-size: 0.75rem; text-transform: capitalize;">${key}</span>
              <strong style="color: var(--text-primary);">${val}</strong>
            </div>
          `).join('')}
        </div>
      </div>

      <h4 style="font-size: 0.875rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin-bottom: 0.75rem;">
        Fitur Unggulan
      </h4>
      <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1rem;">
        ${(service.features || []).map(f => `
          <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; color: var(--text-secondary);">
            <span style="color: var(--color-success);">${icons.check('icon', 16, 2)}</span>
            <span>${f}</span>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="modal-footer">
      <div style="margin-right: auto; text-align: left;">
        <span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Mulai dari</span>
        <strong style="font-size: 1.25rem; color: var(--text-primary);">${formatRp(service.startingPrice)}</strong>
        <span style="font-size: 0.8125rem; color: var(--text-muted);">${service.priceUnit}</span>
      </div>
      <button class="btn btn-secondary btn-sm modal-close-trigger">Tutup</button>
      <button class="btn btn-primary btn-sm" id="modal-order-service-btn">
        ${icons.shoppingCart('icon', 16, 2)}
        <span>Pesan Layanan</span>
      </button>
    </div>
  `;

  openModal(content);

  const orderBtn = document.getElementById('modal-order-service-btn');
  if (orderBtn) {
    orderBtn.onclick = () => {
      closeModal();
      openOrderModal({
        itemTitle: service.name,
        category: service.category,
        packageName: service.id === 'srv-vps-dedicated-xl'
          ? 'Paket Dedicated XL + Otomatis+ PPN 11% (1 Bulan)'
          : 'Paket Standar ' + service.priceUnit,
        amount: service.startingPrice,
        breakdown: service.id === 'srv-vps-dedicated-xl' ? {
          base: service.basePrice || 2600000,
          automation: service.automationFee || 53040,
          vat: service.vatAmount || 291834
        } : null
      });
    };
  }
}

/**
 * Modal Pemesanan & Alur Pembayaran
 */
export function openOrderModal({ itemTitle, category, packageName, amount, breakdown = null }) {
  const formatRp = (num) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);
  const user = store.getState().currentUser;

  const content = `
    <div class="modal-header">
      <div>
        <h2 class="modal-title" id="modal-dialog-title">Konfirmasi Pemesanan</h2>
        <span style="font-size: 0.8125rem; color: var(--text-muted);">Sistem Pemesanan Resmi MultiCloud</span>
      </div>
      <button class="btn btn-ghost btn-sm modal-close-trigger" aria-label="Tutup">
        ${icons.x('icon', 20, 2)}
      </button>
    </div>

    <div class="modal-body" id="order-modal-body">
      <!-- Ringkasan Biaya -->
      <div style="background-color: var(--bg-surface-secondary); padding: 1.25rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color); margin-bottom: 1.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
          <div>
            <strong style="font-size: 1.0625rem; color: var(--text-primary); display: block;">${itemTitle}</strong>
            <span style="font-size: 0.875rem; color: var(--color-primary);">${packageName}</span>
          </div>
          <strong style="font-size: 1.1875rem; color: var(--text-primary);">${formatRp(amount)}</strong>
        </div>

        ${breakdown ? `
          <div style="font-size: 0.8125rem; color: var(--text-secondary); border-top: 1px dashed var(--border-color); padding-top: 0.5rem; margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
            <div style="display: flex; justify-content: space-between;">
              <span>Harga Pokok Layanan:</span>
              <span>${formatRp(breakdown.base)}</span>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span>Biaya Otomatis(Automation Fee):</span>
              <span>${formatRp(breakdown.automation)}</span>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span>Subtotal:</span>
              <strong>${formatRp(breakdown.base + breakdown.automation)}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; color: var(--color-primary);">
              <span>PPN 11% (VAT Out 12% x 11/12):</span>
              <span>${formatRp(breakdown.vat)}</span>
            </div>
          </div>
        ` : ''}

        <div style="font-size: 0.8125rem; color: var(--text-muted); border-top: 1px dashed var(--border-color); padding-top: 0.5rem; margin-top: 0.5rem; display: flex; align-items: center; gap: 0.35rem;">
          ${icons.shieldCheck('icon', 15, 2)}
          <span>Disalurkan secara resmi dengan faktur sah & garansi penuh</span>
        </div>
      </div>

      <!-- Formulir Data Pemesan -->
      <form id="order-checkout-form">
        <div class="form-group">
          <label class="form-label" for="order-cust-name">Nama Pemesan / Perusahaan</label>
          <input class="form-input" id="order-cust-name" type="text" required value="${user?.name || ''}" placeholder="Contoh: Budi Santoso" />
        </div>

        <div class="form-group">
          <label class="form-label" for="order-cust-email">Alamat Surel Aktivasi</label>
          <input class="form-input" id="order-cust-email" type="email" required value="${user?.email || ''}" placeholder="nama@email.com" />
          <span class="form-hint">Alamat surel ini digunakan untuk pengiriman kredensial lisensi resmi.</span>
        </div>

        <div class="form-group">
          <label class="form-label" for="order-cust-wa">Nomor Telepon / WhatsApp</label>
          <input class="form-input" id="order-cust-wa" type="tel" required value="${user?.phone || '+62 '}" placeholder="+62 8xx-xxxx-xxxx" />
        </div>

        <div class="form-group">
          <label class="form-label" for="order-payment-method">Metode Pembayaran</label>
          <select class="form-select" id="order-payment-method">
            <option value="QRIS Instan">QRIS Instan (BCA, Mandiri, GoPay, OVO, ShopeePay)</option>
            <option value="BCA Virtual Account">BCA Virtual Account</option>
            <option value="Mandiri Virtual Account">Mandiri Virtual Account</option>
            <option value="Kartu Kredit / Debit">Kartu Kredit / Debit (Visa / Mastercard)</option>
          </select>
        </div>

        <div style="background-color: var(--color-info-subtle); border: 1px solid rgba(2, 132, 199, 0.2); border-radius: var(--radius-md); padding: 0.75rem 1rem; margin-top: 1rem; display: flex; gap: 0.5rem; font-size: 0.8125rem; color: var(--text-secondary);">
          <span style="color: var(--color-info); flex-shrink: 0;">${icons.infoCircle('icon', 18, 2)}</span>
          <span>Pesanan akan diterbitkan dengan status <strong>Menunggu Pembayaran</strong> dan tersinkronisasi ke basis data Supabase & Dasbor Anda.</span>
        </div>

        <div class="modal-footer" style="margin-left: -1.5rem; margin-right: -1.5rem; margin-bottom: -1.5rem; margin-top: 1.5rem;">
          <button type="button" class="btn btn-secondary btn-sm modal-close-trigger">Batalkan</button>
          <button type="submit" class="btn btn-primary btn-sm" id="submit-order-btn">
            ${icons.receipt('icon', 16, 2)}
            <span>Lanjutkan Pemesanan</span>
          </button>
        </div>
      </form>
    </div>
  `;

  openModal(content);

  const form = document.getElementById('order-checkout-form');
  if (form) {
    form.onsubmit = async (e) => {
      e.preventDefault();
      const custName = document.getElementById('order-cust-name').value.trim();
      const custEmail = document.getElementById('order-cust-email').value.trim();
      const custPhone = document.getElementById('order-cust-wa').value.trim();
      const paymentMethod = document.getElementById('order-payment-method').value;

      if (!custName || !custEmail) {
        alert('Mohon lengkapi nama dan alamat surel Anda');
        return;
      }

      const submitBtn = document.getElementById('submit-order-btn');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Menyimpan Pesanan...</span>';
      }

      const order = await store.createOrder({
        itemTitle,
        category,
        packageName,
        amount,
        breakdown,
        paymentMethod,
        userName: custName,
        userEmail: custEmail,
        userPhone: custPhone
      });

      showInvoiceStep(order);
    };
  }
}

function showInvoiceStep(order) {
  const modalBody = document.getElementById('order-modal-body');
  if (!modalBody) return;

  const formatRp = (num) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);

  modalBody.innerHTML = `
    <div style="text-align: center; margin-bottom: 1.5rem;">
      <div style="width: 56px; height: 56px; border-radius: var(--radius-full); background-color: var(--color-warning-subtle); color: #d97706; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto;">
        ${icons.receipt('icon', 28, 2)}
      </div>
      <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.25rem;">Faktur Tagihan Diterbitkan</h3>
      <span class="status-pill warning">Menunggu Pembayaran</span>
    </div>

    <div style="background-color: var(--bg-surface-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 1.25rem; margin-bottom: 1.5rem;">
      <div style="display: flex; justify-content: space-between; font-size: 0.875rem; margin-bottom: 0.5rem;">
        <span style="color: var(--text-muted);">Nomor Faktur</span>
        <strong style="color: var(--text-primary); font-family: var(--font-mono);">${order.invoiceNumber}</strong>
      </div>
      <div style="display: flex; justify-content: space-between; font-size: 0.875rem; margin-bottom: 0.5rem;">
        <span style="color: var(--text-muted);">Nama Layanan</span>
        <strong style="color: var(--text-primary);">${order.itemTitle}</strong>
      </div>
      <div style="display: flex; justify-content: space-between; font-size: 0.875rem; margin-bottom: 0.5rem;">
        <span style="color: var(--text-muted);">Paket / Durasi</span>
        <span style="color: var(--text-secondary);">${order.package}</span>
      </div>
      <div style="display: flex; justify-content: space-between; font-size: 0.875rem; margin-bottom: 0.5rem;">
        <span style="color: var(--text-muted);">Metode Pembayaran</span>
        <span style="color: var(--text-secondary);">${order.paymentMethod}</span>
      </div>
      <div style="display: flex; justify-content: space-between; font-size: 1rem; border-top: 1px dashed var(--border-color); padding-top: 0.75rem; margin-top: 0.75rem;">
        <span style="font-weight: 700; color: var(--text-primary);">Total Tagihan</span>
        <strong style="font-weight: 800; color: var(--color-primary); font-size: 1.25rem;">${formatRp(order.amount)}</strong>
      </div>
    </div>

    <div style="background-color: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.5rem; text-align: center;">
      <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.5rem;">
        Silakan lakukan pelunasan sesuai jumlah nominal di atas.
      </p>
      <div style="font-size: 0.8125rem; color: var(--text-muted);">
        Faktur pesanan Anda berstatus <strong>Menunggu Pembayaran</strong> dan akan segera diproses oleh Administrator MultiCloud. Anda juga dapat menggunakan simulasi instan di bawah ini.
      </div>
    </div>

    <div class="modal-footer" style="margin-left: -1.5rem; margin-right: -1.5rem; margin-bottom: -1.5rem;">
      <button class="btn btn-secondary btn-sm" id="go-to-dash-btn">Buka Dasbor Pesanan</button>
      <button class="btn btn-primary btn-sm" id="confirm-payment-now-btn">
        ${icons.checkCircle('icon', 16, 2)}
        <span>Simulasikan Pembayaran Selesai</span>
      </button>
    </div>
  `;

  document.getElementById('go-to-dash-btn').onclick = () => {
    closeModal();
    window.location.hash = '#/dashboard';
  };

  document.getElementById('confirm-payment-now-btn').onclick = async () => {
    const btn = document.getElementById('confirm-payment-now-btn');
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = '<span>Memverifikasi Pembayaran...</span>';
    }
    await store.confirmOrderPayment(order.id);
    showSuccessStep(order);
  };
}

function showSuccessStep(order) {
  const modalBody = document.getElementById('order-modal-body');
  if (!modalBody) return;

  modalBody.innerHTML = `
    <div style="text-align: center; margin-bottom: 1.5rem;">
      <div style="width: 56px; height: 56px; border-radius: var(--radius-full); background-color: var(--color-success-subtle); color: var(--color-success); display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto;">
        ${icons.checkCircle('icon', 32, 2)}
      </div>
      <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.25rem;">Pembayaran Berhasil Diverifikasi</h3>
      <span class="status-pill success">Layanan Aktif</span>
    </div>

    <p style="font-size: 0.9375rem; color: var(--text-secondary); text-align: center; margin-bottom: 1.5rem; line-height: 1.6;">
      Layanan <strong>${order.itemTitle}</strong> Anda telah berhasil diverifikasi oleh sistem MultiCloud dan kini aktif sepenuhnya.
    </p>

    <div style="background-color: var(--bg-surface-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 1.25rem; margin-bottom: 1.5rem; text-align: center;">
      <span style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 0.5rem;">
        Kode Referensi Akses / Lisensi Resmi
      </span>
      <div class="code-pill" style="display: inline-flex; font-size: 0.9375rem;">
        <span>MC-LIC-VERIFIED-ACTIVE</span>
      </div>
    </div>

    <div class="modal-footer" style="margin-left: -1.5rem; margin-right: -1.5rem; margin-bottom: -1.5rem;">
      <button class="btn btn-secondary btn-sm modal-close-trigger">Tutup</button>
      <button class="btn btn-outline-primary btn-sm" id="print-invoice-modal-btn">
        ${icons.printer ? icons.printer('icon', 16, 2) : icons.fileText('icon', 16, 2)}
        <span>Cetak Faktur (Print Invoice)</span>
      </button>
      <a href="#/dashboard" class="btn btn-primary btn-sm modal-close-trigger">
        ${icons.layoutDashboard('icon', 16, 2)}
        <span>Buka Dasbor Saya</span>
      </a>
    </div>
  `;

  const printBtn = modalBody.querySelector('#print-invoice-modal-btn');
  if (printBtn) {
    printBtn.onclick = () => {
      printInvoiceReceipt(order);
    };
  }

  const closeBtns = modalBody.querySelectorAll('.modal-close-trigger');
  closeBtns.forEach(b => b.addEventListener('click', closeModal));
}

/**
 * Utilitas Pencetakan Faktur Resmi (Print Invoice / PDF)
 */
export function printInvoiceReceipt(order) {
  const formatRp = (num) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);
  const printWindow = window.open('', '_blank', 'width=850,height=900');
  if (!printWindow) {
    alert('Jendela cetak diblokir oleh peramban. Izinkan pop-up untuk mencetak faktur.');
    return;
  }

  const basePrice = order.breakdown?.base || (order.amount ? Math.round(order.amount / 1.11) : 0);
  const autoFee = order.breakdown?.automation || 0;
  const subTotal = order.breakdown ? (order.breakdown.base + order.breakdown.automation) : basePrice;
  const vatOut = order.breakdown?.vat || (order.amount - subTotal);

  printWindow.document.write(`
    <!DOCTYPE html>
    <html lang="id">
    <head>
      <meta charset="UTF-8">
      <title>${(order.invoiceNumber || order.id || 'Invoice').replace(/\//g, '-')}</title>
      <style>
        @page {
          size: A4 portrait;
          margin: 0;
        }
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; color: #1e293b; padding: 2rem; margin: 0; background: #fff; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        .invoice-box { max-width: 800px; margin: auto; border: 1px solid #e2e8f0; padding: 2rem; border-radius: 8px; box-sizing: border-box; }
        .header { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid #3b82f6; padding-bottom: 1.5rem; margin-bottom: 2rem; }
        .brand { font-size: 24px; font-weight: 800; color: #2563eb; }
        .brand span { color: #0f172a; }
        .inv-meta { text-align: right; }
        .meta-table { width: 100%; margin-bottom: 2rem; }
        .meta-table td { vertical-align: top; padding: 4px 0; font-size: 14px; }
        .item-table { width: 100%; border-collapse: collapse; margin-bottom: 2rem; }
        .item-table th { background: #f8fafc; border: 1px solid #cbd5e1; padding: 10px 12px; font-size: 13px; text-transform: uppercase; color: #475569; text-align: left; }
        .item-table td { border: 1px solid #e2e8f0; padding: 12px; font-size: 14px; }
        .text-right { text-align: right; }
        .summary-box { width: 340px; margin-left: auto; margin-bottom: 2rem; }
        .summary-row { display: flex; justify-content: space-between; padding: 6px 0; font-size: 14px; }
        .summary-row.total { font-size: 18px; font-weight: 800; border-top: 2px solid #0f172a; padding-top: 10px; margin-top: 5px; color: #2563eb; }
        .badge-paid { display: inline-block; background: #dcfce7; color: #15803d; border: 1px solid #86efac; padding: 6px 14px; font-weight: 700; border-radius: 9999px; font-size: 13px; text-transform: uppercase; }
        .footer-note { border-top: 1px dashed #cbd5e1; padding-top: 1.5rem; font-size: 12px; color: #475569; text-align: center; }
        @media print {
          html, body {
            margin: 0 !important;
            padding: 0 !important;
          }
          .invoice-box {
            max-width: 100%;
            border: none;
            border-radius: 0;
            padding: 16mm 18mm;
          }
          .no-print { display: none !important; }
        }
      </style>
    </head>
    <body>
      <main class="invoice-box">
        <div class="no-print" style="margin-bottom: 1.5rem; display: flex; gap: 10px; justify-content: flex-end;">
          <button type="button" onclick="window.print()" style="background: #2563eb; color: #fff; border: none; min-height: 44px; padding: 10px 18px; font-weight: 600; border-radius: 6px; cursor: pointer;">Cetak Sekarang (Print PDF)</button>
          <button type="button" onclick="window.close()" style="background: #e2e8f0; color: #334155; border: none; min-height: 44px; padding: 10px 18px; font-weight: 600; border-radius: 6px; cursor: pointer;">Tutup</button>
        </div>

        <header class="header">
          <div>
            <h1 class="brand" style="margin: 0; line-height: 1.2;">Multi<span>Cloud</span></h1>
            <div style="font-size: 13px; color: #475569; margin-top: 4px;">PT Multi Cloud Digital Nusantara</div>
            <div style="font-size: 13px; color: #475569;">Surel: billing@multicloud.id</div>
          </div>
          <div class="inv-meta">
            <div style="font-family: monospace; font-size: 15px; font-weight: 700; color: #334155;">${order.invoiceNumber || order.id}</div>
            <div style="margin-top: 8px;">
              <span class="badge-paid">LUNAS</span>
            </div>
          </div>
        </header>

        <table class="meta-table">
          <tr>
            <td style="width: 50%;">
              <strong style="color: #475569; font-size: 12px; text-transform: uppercase;">Ditagihkan Kepada:</strong><br>
              <strong style="font-size: 16px; color: #0f172a;">${order.userName || 'Pelanggan Terhormat'}</strong><br>
              <span>${order.userEmail || ''}</span><br>
              <span>${order.userPhone || ''}</span>
            </td>
            <td style="width: 50%; text-align: right;">
              <strong style="color: #475569; font-size: 12px; text-transform: uppercase;">Rincian Faktur:</strong><br>
              <span>Tanggal Penerbitan: ${new Date(order.date || Date.now()).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span><br>
              <span>Status Lisensi: <strong>${order.licenseKey || 'MC-LIC-VERIFIED-ACTIVE'}</strong></span>
            </td>
          </tr>
        </table>

        <table class="item-table">
          <thead>
            <tr>
              <th>Keterangan Layanan / Produk (Description)</th>
              <th class="text-right" style="width: 200px;">Jumlah (Total)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>${order.itemTitle}</strong> ${order.domain ? `- ${order.domain}` : ''} ${order.periodText ? `(${order.periodText})` : (order.date ? `(${new Date(order.date).toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' })} - ${new Date(new Date(order.date).setMonth(new Date(order.date).getMonth() + 1)).toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' })})` : '')}<br>
                <span style="font-size: 13px; color: #64748b;">Paket: ${order.package || 'Standar'}</span>
              </td>
              <td class="text-right"><strong>${formatRp(basePrice)}</strong></td>
            </tr>
            ${autoFee > 0 ? `
              <tr>
                <td>
                  <strong>Automation Fee</strong><br>
                  <span style="font-size: 13px; color: #64748b;">Biaya manajemen pemeliharaan modul otomatisasi server terdedikasi</span>
                </td>
                <td class="text-right">${formatRp(autoFee)}</td>
              </tr>
            ` : ''}
          </tbody>
        </table>

        <div class="summary-box">
          <div class="summary-row">
            <span>Sub Total:</span>
            <strong>${formatRp(subTotal)}</strong>
          </div>
          <div class="summary-row">
            <span>11.00% VAT Out (12% x 11/12):</span>
            <span>${formatRp(vatOut)}</span>
          </div>
          <div class="summary-row">
            <span>Kredit / Diskon:</span>
            <span>Rp 0</span>
          </div>
          <div class="summary-row total">
            <span>Total Tagihan:</span>
            <span>${formatRp(order.amount)}</span>
          </div>
        </div>

        <div class="footer-note">
          
        </div>
      </main>
      <script>
        window.onload = function() {
          // Siap cetak otomatis
        }
      </script>
    </body>
    </html>
  `);
  printWindow.document.close();
}
