/**
 * Data Layanan MultiCloud
 * Sesuai kaidah Bahasa Indonesia baku (KBBI).
 * 4 Kategori Pokok:
 * A. Komputasi Awan & Hosting
 * B. Layanan API
 * C. Alat AI & Langganan Resmi
 * D. Produk Digital
 */

export const serviceCategories = [
  {
    id: 'cloud-hosting',
    title: 'Komputasi Awan & Hosting',
    subtitle: 'Infrastruktur peladen awan berkinerja tinggi, keterandalan 99,99%, dan latensi rendah untuk aplikasi modern.',
    icon: 'cloud',
    badge: 'Kinerja Tinggi'
  },
  {
    id: 'api-services',
    title: 'Layanan API',
    subtitle: 'Gerbang API siap pakai untuk integrasi WhatsApp, inferensi AI, dan infrastruktur pengembang.',
    icon: 'api',
    badge: 'Ramah Pengembang'
  },
  {
    id: 'ai-subscriptions',
    title: 'Alat AI & Langganan Resmi',
    subtitle: 'Akses berlisensi resmi dan orisinal piranti lunak kecerdasan buatan terkemuka untuk produktivitas kerja.',
    icon: 'sparkles',
    badge: 'Lisensi Resmi'
  },
  {
    id: 'digital-products',
    title: 'Produk Digital',
    subtitle: 'Koleksi piranti lunak utilitas, perkakas pengembang, piranti produktivitas, dan lisensi perusahaan.',
    icon: 'package',
    badge: 'Aktivasi Instan'
  }
];

export const servicesList = [
  // A. Komputasi Awan & Hosting
  {
    id: 'srv-web-hosting',
    category: 'cloud-hosting',
    name: 'Hosting Web NVMe',
    tagline: 'Performa Cepat untuk Situs Web & Aplikasi',
    description: 'Hosting cPanel dan LiteSpeed dengan media penyimpanan 100% Enterprise NVMe SSD, sertifikat SSL gratis, serta perlindungan DDoS tingkat lanjut.',
    startingPrice: 25000,
    priceUnit: '/bulan',
    icon: 'world',
    popular: true,
    features: ['Penyimpanan Cepat NVMe', 'Peladen Web LiteSpeed', 'Sertifikat SSL Tanpa Batas', 'Cadangan Data Otomatis Harian'],
    specs: {
      keterandalan: '99,98%',
      lebarPita: 'Tanpa Batas Kuota',
      pusatData: 'Jakarta (IDC 3D), Singapura',
      panelKendali: 'cPanel / DirectAdmin'
    }
  },
  {
    id: 'srv-cloud-hosting',
    category: 'cloud-hosting',
    name: 'Hosting Awan Terkelola',
    tagline: 'Skalabilitas Fleksibel Tanpa Kerumitan Konfigurasi',
    description: 'Arsitektur komputasi awan berbasis kontainer dengan alokasi sumber daya terisolasi dan peningkatan kapasitas otomatis saat lonjakan lalu lintas.',
    startingPrice: 95000,
    priceUnit: '/bulan',
    icon: 'cloud',
    popular: false,
    features: ['Sumber Daya Terdedikasi', 'Pemulihan Awan Otomatis', 'Tembolok Redis Terintegrasi', 'Lingkungan Uji Coba'],
    specs: {
      keterandalan: '99,99%',
      lebarPita: '1 Gbps Tanpa Batas Kuota',
      pusatData: 'Multi-Zona Awan',
      isolasi: 'KVM Terkontainerisasi'
    }
  },
  {
    id: 'srv-vps-server',
    category: 'cloud-hosting',
    name: 'Peladen VPS Cloud',
    tagline: 'Akses Utama Penuh dengan Virtualisasi KVM',
    description: 'Virtual Private Server berdaya komputasi tinggi untuk backend aplikasi, layanan mikro, basis data, dan kontainer Docker.',
    startingPrice: 120000,
    priceUnit: '/bulan',
    icon: 'server',
    popular: false,
    features: ['Akses Utama SSH Penuh', 'Virtualisasi KVM Murni', 'Alamat IPv4 & IPv6 Khusus', 'Pilihan OS Linux & Windows'],
    specs: {
      prosesor: '1 - 16 vCPU AMD EPYC',
      memori: '2GB - 64GB DDR4 ECC',
      penyimpanan: '40GB - 800GB NVMe',
      jaringan: 'Port 1 Gbps hingga 10 Gbps'
    }
  },
  {
    id: 'srv-vps-dedicated-xl',
    category: 'cloud-hosting',
    name: 'VPS Cloud Dedicated Ultra XL',
    tagline: 'Sumber Daya Terdedikasi Tertinggi & Otomasi Skala Penuh',
    description: 'Peladen VPS Bare-Metal Dedicated kelas enterprise dengan performa maksimal, otomatisasi sistem penuh, jaminan SLA 99,99%, dan latensi super rendah.',
    startingPrice: 2944874,
    basePrice: 2600000,
    automationFee: 53040,
    vatAmount: 291834,
    priceUnit: '/bulan',
    icon: 'server',
    popular: true,
    features: [
      'Sumber Daya CPU & RAM 100% Dedicated (Bukan Berbagi)',
      'Termasuk Modul Otomasi (Automation Fee Terpadu)',
      'Pajak PPN 11% Resmi (Faktur Pajak Sah Terverifikasi)',
      'Fitur Perpanjangan Otomatis (Auto-Renew) & Peringatan Masa Aktif',
      'Cetak Faktur PDF / Print Invoice Resmi Kapan Saja',
      'Port Jaringan 10 Gbps Dedicated Tanpa Batas Kuota'
    ],
    specs: {
      prosesor: '8 vCPU AMD EPYC Dedicated 3.4GHz',
      memori: '32GB DDR4 ECC Dedicated Registered',
      penyimpanan: '600GB Enterprise NVMe Gen4 Mirroring',
      jaringan: '10 Gbps Port Terdedikasi + 2 Alamat IPv4',
      dukungan: 'Teknisi Khusus Bersiaga 24/7 SLA 99,99%',
      faktur: 'Mendukung Cetak Faktur Sah & Otomasi Tagihan'
    }
  },
  {
    id: 'srv-domain',
    category: 'cloud-hosting',
    name: 'Registrasi Nama Domain',
    tagline: 'Amankan Identitas Digital Merek Anda',
    description: 'Pendaftaran domain TLD global (.id, .com, .net, .io, .tech) dilengkapi pengelolaan DNS gratis dan perlindungan privasi WHOIS.',
    startingPrice: 14000,
    priceUnit: '/tahun',
    icon: 'globe',
    popular: false,
    features: ['Perlindungan WHOIS Gratis', 'Anycast Cloud DNS', 'Proteksi DNSSEC', 'Penerusan Domain Mudah'],
    specs: {
      ekstensi: '.id, .com, .io, .tech, .ai, .dev',
      dns: 'Didukung Jaringan Cloudflare',
      pengelolaan: 'Pengelolaan Lengkap DNS Record'
    }
  },
  {
    id: 'srv-dedicated-server',
    category: 'cloud-hosting',
    name: 'Peladen Khusus (Dedicated Bare Metal)',
    tagline: 'Kekuatan Perangkat Keras Penuh Tanpa Berbagi',
    description: 'Peladen fisik bare metal kelas perusahaan yang disesuaikan untuk pengolahan data masif, ERP korporat, dan sistem perbankan.',
    startingPrice: 1850000,
    priceUnit: '/bulan',
    icon: 'cpu',
    popular: false,
    features: ['100% Perangkat Keras Khusus', 'Akses Jarak Jauh IPMI / iLO', 'Mitigasi DDoS 1Tbps+', 'Jaminan Keterandalan Perangkat 99,99%'],
    specs: {
      prosesor: 'Intel Xeon / AMD EPYC',
      memori: 'Hingga 256GB ECC RAM',
      penyimpanan: 'Hardware RAID 10 NVMe',
      lebarPita: 'Uplink 10 Gbps'
    }
  },

  // B. Layanan API
  {
    id: 'srv-whatsapp-api',
    category: 'api-services',
    name: 'Gerbang WhatsApp Business API',
    tagline: 'Otomatisasi Notifikasi & Layanan Pelanggan',
    description: 'Konektivitas WhatsApp Business API berkecepatan tinggi untuk pengiriman OTP, transaksi, status pengiriman, dan integrasi bot.',
    startingPrice: 150000,
    priceUnit: '/bulan',
    icon: 'brandWhatsapp',
    popular: true,
    features: ['Kecepatan Transaksi Tinggi', 'Pengiriman Notifikasi Webhook', 'Dukungan Pesan Berformat', 'Tombol & Daftar Interaktif'],
    specs: {
      kecepatan: 'Rata-rata 1,2 detik per pesan',
      kepatuhan: 'Sesuai Standar Resmi Meta Partner',
      protokol: 'RESTful JSON / Webhook'
    }
  },
  {
    id: 'srv-ai-api',
    category: 'api-services',
    name: 'Gerbang Inferensi AI Terpadu',
    tagline: 'Satu Titik Akhir untuk Beragam Model LLM',
    description: 'Akses API terpadu ke berbagai model kecerdasan buatan tercanggih dengan pengalihan otomatis saat kendala dan latensi rendah.',
    startingPrice: 200000,
    priceUnit: '/kuota',
    icon: 'robot',
    popular: true,
    features: ['Kompatibel dengan OpenAI SDK', 'Pengalihan Otomatis Model Cadangan', 'Analisis Penggunaan Token', 'Waktu Respons Sub-Detik'],
    specs: {
      model: 'GPT-4o, Claude 3.5, Gemini 1.5 Pro/Flash, Llama 3',
      batasFrekuensi: 'Hingga 5.000 RPM kelas perusahaan',
      tembolok: 'Penyimpanan tembolok prompt bawaan'
    }
  },
  {
    id: 'srv-rest-api',
    category: 'api-services',
    name: 'Paket REST API Pengembang',
    tagline: 'Layanan API Utilitas Siap Pakai',
    description: 'Koleksi API terkelola: pelacakan resi ekspedisi, validasi nomor rekening perbankan dan dompet digital, Geo-IP, dan QRIS dinamis.',
    startingPrice: 75000,
    priceUnit: '/bulan',
    icon: 'api',
    popular: false,
    features: ['Keterandalan API 99,95%', 'Koleksi Dokumentasi Postman', 'Lingkungan Uji Coba Gratis', 'SDK JavaScript, Python, PHP'],
    specs: {
      otentikasi: 'Bearer Token & Tanda Tangan HMAC',
      dokumentasi: 'OpenAPI 3.0 Interaktif'
    }
  },
  {
    id: 'srv-custom-api',
    category: 'api-services',
    name: 'Integrasi API Kustom',
    tagline: 'Solusi Arsitektur API Sesuai Kebutuhan Khusus',
    description: 'Layanan konsultasi dan pembuatan integrasi API khusus untuk menghubungkan piranti lunak internal, ERP, CRM, dan gerbang pembayaran.',
    startingPrice: 2500000,
    priceUnit: '/proyek',
    icon: 'plug',
    popular: false,
    features: ['Arsitektur Layanan Mikro', 'Audit Keamanan & Pembatasan Akses', 'Dokumentasi Komprehensif', 'Garansi Pemeliharaan 3 Bulan'],
    specs: {
      berkasKeluaran: 'Kode Sumber, Dockerfile, Dokumen Swagger',
      pendampingan: 'Didampingi Teknisi Ahli Khusus'
    }
  },

  // C. Alat AI & Langganan Resmi
  {
    id: 'srv-cursor-ai',
    category: 'ai-subscriptions',
    name: 'Cursor AI Pro (Akses Resmi)',
    tagline: 'Penyunting Kode AI Terdepan untuk Pengembang',
    description: 'Akses berlisensi resmi akun Cursor Pro dengan model Claude 3.5 Sonnet & GPT-4o untuk pelengkapan kode otomatis tanpa jeda.',
    startingPrice: 320000,
    priceUnit: '/bulan',
    icon: 'code',
    popular: true,
    officialLicense: true,
    features: ['Akses Resmi & Sah Hukum', 'Permintaan Cepat Tanpa Antrean', 'Pelengkapan Otomatis Tanpa Batas', 'Agen Penyunting Multi-Berkas'],
    specs: {
      tipeLisensi: 'Lisensi Perorangan / Tim Resmi',
      aktivasi: 'Undangan resmi ke alamat surel pengguna',
      dukungan: 'Dukungan Prioritas MultiCloud'
    }
  },
  {
    id: 'srv-gemini-advanced',
    category: 'ai-subscriptions',
    name: 'Google Gemini Advanced',
    tagline: 'Kapasitas Jendela Konteks 2 Juta Token dari Google',
    description: 'Akses resmi Gemini Advanced ditenagai model Gemini 1.5 Pro dengan jendela konteks raksasa untuk menganalisis dokumen dan basis kode besar.',
    startingPrice: 300000,
    priceUnit: '/bulan',
    icon: 'sparkles',
    popular: true,
    officialLicense: true,
    features: ['Lisensi Resmi Google One AI', 'Jendela Konteks 2 Juta Token', 'Terintegrasi Google Workspace', 'Penyimpanan Awan Google 2TB'],
    specs: {
      tipeLisensi: 'Aktivasi Langganan Resmi',
      penyimpanan: 'Termasuk 2TB Google Drive Storage',
      perpanjangan: 'Perpanjangan dengan konfirmasi'
    }
  },
  {
    id: 'srv-chatgpt-plus',
    category: 'ai-subscriptions',
    name: 'ChatGPT Plus Resmi OpenAI',
    tagline: 'Akses Prioritas GPT-4o, Kanvas & Mode Suara Lanjutan',
    description: 'Lisensi resmi OpenAI ChatGPT Plus dengan akses prioritas GPT-4o, pembuatan gambar DALL-E 3, analisis data, dan ruang kerja kanvas.',
    startingPrice: 325000,
    priceUnit: '/bulan',
    icon: 'robot',
    popular: true,
    officialLicense: true,
    features: ['Akun Pribadi Resmi Berbayar', 'Mode Suara Lanjutan Real-Time', 'Antarmuka Kanvas Interaktif', 'Akses GPT Kustom'],
    specs: {
      tipeLisensi: 'Langganan Resmi OpenAI Plus',
      garansi: 'Garansi Aktif 30 Hari Penuh',
      pengiriman: 'Aktivasi langsung ke surel Anda'
    }
  },
  {
    id: 'srv-claude-pro',
    category: 'ai-subscriptions',
    name: 'Claude Pro Anthropic (Akses Resmi)',
    tagline: 'Kecerdasan Bahasa & Penalaran Logika Paling Presisi',
    description: 'Akses berlisensi resmi Claude Pro dengan kapasitas 5 kali lipat untuk model Claude 3.5 Sonnet, ruang kerja proyek, dan artefak interaktif.',
    startingPrice: 330000,
    priceUnit: '/bulan',
    icon: 'wand',
    popular: true,
    officialLicense: true,
    features: ['Lisensi Resmi Anthropic', 'Kapasitas Penggunaan 5x Lipat', 'Fitur Artefak & Proyek Tim', 'Model Claude 3.5 Sonnet Orisinal'],
    specs: {
      tipeLisensi: 'Kursi Pengguna Resmi Anthropic',
      jaminan: 'Aman tanpa risiko pemblokiran akun',
      waktuAktivasi: 'Proses aktivasi kurang dari 15 menit'
    }
  },
  {
    id: 'srv-github-copilot',
    category: 'ai-subscriptions',
    name: 'GitHub Copilot Individual',
    tagline: 'Asisten Pemrograman AI Resmi dari Microsoft & GitHub',
    description: 'Lisensi resmi GitHub Copilot untuk VS Code, JetBrains, dan Neovim. Mengubah instruksi bahasa manusia menjadi baris kode dalam sekejap.',
    startingPrice: 175000,
    priceUnit: '/bulan',
    icon: 'brandGithub',
    popular: false,
    officialLicense: true,
    features: ['Lisensi Resmi GitHub / Microsoft', 'Kompatibel dengan Beragam IDE', 'Fitur Obrolan & Terminal Copilot', 'Dukungan Puluhan Bahasa Pemrograman'],
    specs: {
      tipeLisensi: 'Akun Perorangan Resmi GitHub',
      penautan: 'Diaktifkan pada nama pengguna GitHub Anda',
      bantuan: 'Dukungan teknis 24/7'
    }
  },

  // D. Produk Digital
  {
    id: 'srv-developer-tools',
    category: 'digital-products',
    name: 'DevToolkit Studio Enterprise',
    tagline: 'Paket Utilitas Pengembang Modern Offline-First',
    description: 'Piranti lunak desktop serbaguna untuk pengembang: pengelola basis data, pengujian API, penformat JSON, dan pengurai token JWT.',
    startingPrice: 199000,
    priceUnit: '/lisensi',
    icon: 'terminal',
    popular: false,
    features: ['Lisensi Seumur Hidup', 'Mendukung macOS, Windows, Linux', 'Pembaruan Rutin Gratis', 'Dapat Digunakan Tanpa Internet'],
    specs: {
      versi: 'v4.2.0 Stabil',
      lisensi: 'Lisensi Komersial Perorangan'
    }
  },
  {
    id: 'srv-digital-license',
    category: 'digital-products',
    name: 'Lisensi Piranti Lunak Perusahaan',
    tagline: 'Lisensi Digital Orisinal dan Terverifikasi',
    description: 'Lisensi resmi untuk sistem operasi peladen, aplikasi perkantoran, dan keamanan siber korporat dengan garansi keaslian 100%.',
    startingPrice: 149000,
    priceUnit: '/unit',
    icon: 'license',
    popular: true,
    features: ['Kunci Retail Orisinal', 'Garansi Aktivasi Berhasil 100%', 'Faktur & Sertifikat Digital', 'Dukungan Instalasi Penuh'],
    specs: {
      validasi: 'Verifikasi langsung ke peladen resmi penerbit',
      format: 'Kunci Lisensi Digital & Tautan Unduh'
    }
  }
];
