/**
 * Data Paket Tarif MultiCloud
 * Ditulis sesuai kaidah Bahasa Indonesia baku (KBBI).
 */

export const pricingPlans = [
  {
    id: 'plan-starter',
    name: 'Pengembang Pemula',
    badge: 'Mulai Cepat',
    isPopular: false,
    description: 'Pilihan ideal bagi pekerja lepas, pelajar, dan proyek pribadi yang membutuhkan infrastruktur andal berbiaya hemat.',
    priceMonthly: 95000,
    priceYearly: 76000,
    billingNote: 'Ditagih tahunan atau Rp 95.000 /bulan',
    features: [
      { text: '1 vCPU Khusus AMD EPYC', included: true },
      { text: '2GB Memori RAM Kecepatan Tinggi DDR4', included: true },
      { text: '40GB Penyimpanan NVMe SSD', included: true },
      { text: 'Lebar Pita 1 Gbps Tanpa Batas Kuota', included: true },
      { text: '1 Alamat IPv4 Khusus + IPv6', included: true },
      { text: 'Inferensi AI Terpadu (50.000 token/bln)', included: true },
      { text: 'Gerbang WhatsApp API (1.000 pesan/bln)', included: true },
      { text: 'Cadangan Data Mingguan Otomatis', included: true },
      { text: 'Jaminan Keterandalan SLA 99,95%', included: false },
      { text: 'Dukungan Telepon Prioritas 24/7', included: false },
      { text: 'Domain Kustom & Penjenamaan Khusus', included: false }
    ],
    ctaText: 'Pilih Paket Pemula',
    ctaVariant: 'secondary'
  },
  {
    id: 'plan-pro',
    name: 'Bisnis Profesional',
    badge: 'Paling Populer',
    isPopular: true,
    description: 'Kombinasi daya komputasi dan gerbang API perusahaan untuk rintisan (startup), agensi, dan aplikasi bertrafik aktif.',
    priceMonthly: 249000,
    priceYearly: 199000,
    billingNote: 'Ditagih tahunan atau Rp 249.000 /bulan',
    features: [
      { text: '4 vCPU Khusus AMD EPYC', included: true },
      { text: '8GB Memori RAM Kecepatan Tinggi DDR4', included: true },
      { text: '120GB Penyimpanan NVMe SSD Gen4', included: true },
      { text: 'Lebar Pita 10 Gbps Tanpa Batas Kuota', included: true },
      { text: '2 Alamat IPv4 Khusus + IPv6', included: true },
      { text: 'Inferensi AI Terpadu (500.000 token/bln)', included: true },
      { text: 'Gerbang WhatsApp API (10.000 pesan/bln)', included: true },
      { text: 'Cadangan Harian Otomatis + Snapshot Instan', included: true },
      { text: 'Jaminan Keterandalan SLA 99,99% Bergaransi', included: true },
      { text: 'Dukungan Obrolan Langsung Prioritas 24/7', included: true },
      { text: 'Manajer Akun Terdedikasi', included: false }
    ],
    ctaText: 'Pilih Bisnis Pro',
    ctaVariant: 'primary'
  },
  {
    id: 'plan-enterprise',
    name: 'Korporat Skala Besar',
    badge: 'Skala Besar',
    isPopular: false,
    description: 'Solusi tanpa kompromi untuk korporasi, tekfin, dan platform dengan kebutuhan kustomisasi arsitektur tingkat lanjut.',
    priceMonthly: 890000,
    priceYearly: 712000,
    billingNote: 'Ditagih tahunan atau Rp 890.000 /bulan',
    features: [
      { text: '16 vCPU Bare-Metal Performa Tinggi', included: true },
      { text: '32GB Memori RAM ECC Terdaftar', included: true },
      { text: '500GB Penyimpanan NVMe RAID-10', included: true },
      { text: 'Port Jaringan Uplink Khusus 10 Gbps', included: true },
      { text: '5 Alamat IPv4 Khusus + Reverse DNS', included: true },
      { text: 'Inferensi AI Terpadu Kuota Perusahaan', included: true },
      { text: 'Gerbang WhatsApp API Tanpa Batas Kuota', included: true },
      { text: 'Replikasi Data Waktu Nyata Berkelanjutan', included: true },
      { text: 'Jaminan SLA 99,99% Berkekuatan Hukum', included: true },
      { text: 'Dukungan Teknis Hotline 24 Jam Khusus', included: true },
      { text: 'Arsitek Solusi Khusus & Perjanjian NDA', included: true }
    ],
    ctaText: 'Hubungi Tim Penjualan',
    ctaVariant: 'secondary'
  }
];

export const pricingComparisonMatrix = [
  {
    category: 'Spesifikasi Komputasi',
    items: [
      { name: 'Prosesor vCPU', starter: '1 vCPU AMD', pro: '4 vCPU EPYC', enterprise: '16 vCPU EPYC' },
      { name: 'Memori RAM', starter: '2 GB DDR4', pro: '8 GB DDR4', enterprise: '32 GB ECC' },
      { name: 'Penyimpanan NVMe', starter: '40 GB', pro: '120 GB Gen4', enterprise: '500 GB RAID-10' },
      { name: 'Port Jaringan', starter: '1 Gbps', pro: '10 Gbps Burst', enterprise: '10 Gbps Khusus' }
    ]
  },
  {
    category: 'Layanan API Terintegrasi',
    items: [
      { name: 'WhatsApp Business API', starter: '1.000 Pesan/bln', pro: '10.000 Pesan/bln', enterprise: 'Tanpa Batas Kuota' },
      { name: 'Inferensi AI Terpadu', starter: '50.000 Token/bln', pro: '500.000 Token/bln', enterprise: 'Klaster Perusahaan' },
      { name: 'Paket API Utilitas', starter: 'Frekuensi Standar', pro: 'Frekuensi Tinggi', enterprise: 'Titik Akhir Khusus' },
      { name: 'Pengiriman Webhook', starter: 'Tingkat Sukses 99%', pro: 'Percobaan Ulang Otomatis', enterprise: 'Antrean Tanpa Kehilangan Data' }
    ]
  },
  {
    category: 'Keamanan & Kepatuhan',
    items: [
      { name: 'Mitigasi Serangan DDoS', starter: 'Standar 10 Gbps', pro: 'Perusahaan 1 Tbps', enterprise: 'Mitigasi Anycast Lanjutan' },
      { name: 'Sertifikat Enkripsi SSL', starter: 'Let\'s Encrypt Gratis', pro: 'Wildcard SSL Otomatis', enterprise: 'Sertifikat EV / OV Kustom' },
      { name: 'Pencadangan & Pemulihan', starter: 'Mingguan', pro: 'Harian + 3 Snapshot', enterprise: 'Pemulihan Point-in-Time' },
      { name: 'Jaminan Keterandalan (SLA)', starter: '99,9%', pro: '99,99%', enterprise: '99,99% Kontrak Mengikat' }
    ]
  }
];
