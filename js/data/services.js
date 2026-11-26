/**
 * Data Layanan MultiCloud
 * Sesuai kaidah Bahasa Indonesia baku (KBBI).
 * Kategori Layanan Aktif:
 * A. Komputasi Awan & Hosting (VPS Cloud Dedicated Ultra S, M, L, XL)
 * B. Layanan API (Integrasi API Kustom)
 */

export const serviceCategories = [
  {
    id: 'cloud-hosting',
    title: 'Komputasi Awan & Hosting',
    subtitle: 'Infrastruktur peladen VPS Dedicated AMD EPYC berkinerja tinggi dengan otomasi penuh dan SLA 99,99%.',
    icon: 'cloud',
    badge: 'Kinerja Tinggi'
  },
  {
    id: 'api-services',
    title: 'Layanan API',
    subtitle: 'Konsultasi dan pembangunan arsitektur integrasi API kustom untuk kebutuhan sistem bisnis.',
    icon: 'api',
    badge: 'Ramah Pengembang'
  }
];

function buildDedicatedVpsService({ id, tier, name, tagline, description, basePrice, vcpu, ram, storage, port, ipv4, popular }) {
  const automationFee = Math.round(basePrice * 0.0204);
  const vatAmount = Math.round((basePrice + automationFee) * 0.11);
  const startingPrice = basePrice + automationFee + vatAmount;

  return {
    id,
    tier,
    category: 'cloud-hosting',
    name,
    tagline,
    description,
    startingPrice,
    basePrice,
    automationFee,
    vatAmount,
    priceUnit: '/bulan',
    icon: 'server',
    popular,
    features: [
      `Sumber Daya ${vcpu} & ${ram} 100% Dedicated`,
      'Termasuk Modul Otomatis (Automation Fee Terpadu)',
      'Pajak PPN 11% Resmi (Faktur Pajak Sah Terverifikasi)',
      'Fitur Perpanjangan Otomatis (Auto-Renew) & Peringatan Masa Aktif',
      'Cetak Faktur PDF / Print Invoice Resmi Kapan Saja',
      `Port Jaringan ${port} Tanpa Batas Kuota`
    ],
    specs: {
      prosesor: `${vcpu} Dedicated`,
      memori: `${ram} Dedicated Registered`,
      penyimpanan: `${storage} Enterprise NVMe Gen4 Mirroring`,
      jaringan: `${port} + ${ipv4}`,
      dukungan: 'Teknisi Khusus Bersiaga 24/7 SLA 99,99%',
      faktur: 'Mendukung Cetak Faktur Sah & Otomatis Tagihan'
    }
  };
}

export const servicesList = [
  buildDedicatedVpsService({
    id: 'srv-vps-dedicated-s',
    tier: 'S',
    name: 'VPS Cloud Dedicated Ultra S',
    tagline: 'Sumber Daya Terdedikasi Ringkas & Otomatis Penuh',
    description: 'Peladen VPS Dedicated entry-level untuk aplikasi web produksi, layanan mikro, dan basis data bisnis dengan sumber daya CPU & RAM terdedikasi penuh.',
    basePrice: 650000,
    vcpu: '2 vCPU AMD EPYC 3.2GHz',
    ram: '8GB DDR4 ECC',
    storage: '150GB',
    port: '1 Gbps Dedicated',
    ipv4: '1 Alamat IPv4',
    popular: false
  }),
  buildDedicatedVpsService({
    id: 'srv-vps-dedicated-m',
    tier: 'M',
    name: 'VPS Cloud Dedicated Ultra M',
    tagline: 'Keseimbangan Performa Menengah & Otomatis Penuh',
    description: 'Peladen VPS Dedicated menengah untuk aplikasi bertrafik aktif, API gateway, dan klaster kontainer dengan latensi rendah dan jaminan SLA 99,99%.',
    basePrice: 1300000,
    vcpu: '4 vCPU AMD EPYC 3.3GHz',
    ram: '16GB DDR4 ECC',
    storage: '300GB',
    port: '2.5 Gbps Dedicated',
    ipv4: '1 Alamat IPv4',
    popular: true
  }),
  buildDedicatedVpsService({
    id: 'srv-vps-dedicated-l',
    tier: 'L',
    name: 'VPS Cloud Dedicated Ultra L',
    tagline: 'Kapasitas Komputasi Tinggi & Otomatis Skala Bisnis',
    description: 'Peladen VPS Dedicated berperforma tinggi untuk beban kerja korporat, sistem ERP, dan pemrosesan data intensif dengan port 5 Gbps terdedikasi.',
    basePrice: 1950000,
    vcpu: '6 vCPU AMD EPYC 3.35GHz',
    ram: '24GB DDR4 ECC',
    storage: '450GB',
    port: '5 Gbps Dedicated',
    ipv4: '2 Alamat IPv4',
    popular: true
  }),
  buildDedicatedVpsService({
    id: 'srv-vps-dedicated-xl',
    tier: 'XL',
    name: 'VPS Cloud Dedicated Ultra XL',
    tagline: 'Sumber Daya Terdedikasi Tertinggi & Otomatis Skala Penuh',
    description: 'Peladen VPS Bare-Metal Dedicated kelas enterprise dengan performa maksimal, sistem otomatis penuh, jaminan SLA 99,99%, dan latensi super rendah.',
    basePrice: 2600000,
    vcpu: '8 vCPU AMD EPYC 3.4GHz',
    ram: '32GB DDR4 ECC',
    storage: '600GB',
    port: '10 Gbps Port Terdedikasi',
    ipv4: '2 Alamat IPv4',
    popular: true
  }),
  {
    id: 'srv-custom-api',
    category: 'api-services',
    name: 'Integrasi API Kustom',
    tagline: 'Solusi Arsitektur API Sesuai Kebutuhan Khusus',
    description: 'Layanan konsultasi dan pembuatan integrasi API khusus untuk menghubungkan piranti lunak internal, ERP, CRM, dan gerbang pembayaran.',
    startingPrice: 2500000,
    priceUnit: '/proyek',
    icon: 'plug',
    popular: true,
    features: [
      'Arsitektur Layanan Mikro',
      'Audit Keamanan & Pembatasan Akses',
      'Dokumentasi Komprehensif',
      'Garansi Pemeliharaan 3 Bulan'
    ],
    specs: {
      berkasKeluaran: 'Kode Sumber, Dockerfile, Dokumen Swagger',
      pendampingan: 'Didampingi Teknisi Ahli Khusus'
    }
  }
];
