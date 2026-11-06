/**
 * Katalog Produk Digital MultiCloud
 * Ditulis sesuai kaidah Bahasa Indonesia baku (KBBI).
 */

export const productCategories = [
  { id: 'all', label: 'Semua Produk' },
  { id: 'ai-tools', label: 'Alat AI & Akses Resmi' },
  { id: 'cloud-hosting', label: 'Komputasi Awan & Hosting' },
  { id: 'api-services', label: 'Layanan API' },
  { id: 'developer-tools', label: 'Perkakas Pengembang' },
  { id: 'software-licenses', label: 'Lisensi Piranti Lunak' }
];

export const productsList = [
  {
    id: 'prod-cursor-pro',
    slug: 'cursor-ai-pro-official',
    category: 'ai-tools',
    name: 'Cursor AI Pro (Akses Resmi Berlisensi)',
    tagline: 'Penyunting Kode AI Berbasis Claude 3.5 & GPT-4o',
    badge: 'Terlaris',
    rating: 4.9,
    reviewsCount: 342,
    shortDescription: 'Tingkatkan efisiensi penulisan kode hingga tiga kali lipat dengan penyunting kode AI tercanggih. Akses sah, legal, dan bergaransi penuh.',
    fullDescription: 'Cursor adalah penyunting kode berbasis VS Code dengan kecerdasan buatan terintegrasi yang memahami keseluruhan basis kode Anda. Produk ini menyediakan akses resmi ke akun Cursor Pro dengan jaminan keabsahan 100%, kuota permintaan cepat bulanan tanpa antrean, dan pelengkapan cerdas tanpa batas. Bebas dari risiko pemblokiran karena diaktifkan melalui jalur kemitraan resmi.',
    price: 320000,
    originalPrice: 380000,
    pricePeriod: '/bulan',
    icon: 'code',
    accentColor: '#2563eb',
    isOfficialLicense: true,
    packages: [
      { id: 'pkg-1m', name: '1 Bulan Perorangan', price: 320000, period: '1 Bulan', note: 'Aktivasi langsung ke alamat surel Anda' },
      { id: 'pkg-3m', name: '3 Bulan Hemat', price: 910000, period: '3 Bulan', note: 'Hemat Rp 50.000 + Antrean Prioritas' },
      { id: 'pkg-12m', name: '1 Tahun Korporat', price: 3450000, period: '12 Bulan', note: 'Hemat Rp 390.000 + Faktur Pajak Resmi' }
    ],
    features: [
      '500 Permintaan Cepat Premium per bulan (Claude 3.5 Sonnet & GPT-4o)',
      'Permintaan Standar Tanpa Batas saat kuota cepat habis',
      'Pelengkapan Otomatis Tab Tanpa Batas sepanjang waktu',
      'Mode Penyuntingan Multi-Berkas untuk restrukturisasi basis kode besar',
      'Integrasi Terminal AI untuk menjalankan perintah secara otomatis',
      'Akses resmi langsung ke akun surel pribadi atau tim Anda'
    ],
    specifications: [
      { key: 'Sistem Operasi', value: 'macOS, Windows, Linux' },
      { key: 'Status Lisensi', value: 'Orisinal & Resmi Bergaransi Penuh' },
      { key: 'Waktu Aktivasi', value: '5 - 15 Menit setelah pembayaran diverifikasi' },
      { key: 'Masa Garansi', value: '30 Hari Garansi Penggantian Penuh' },
      { key: 'Dukungan Model', value: 'Claude 3.5 Sonnet, GPT-4o, Cursor-Small' }
    ],
    faq: [
      {
        q: 'Apakah akun ini aman dan tidak akan diblokir?',
        a: 'Ya, 100% aman karena MultiCloud menyediakan akses melalui skema pembayaran resmi dari mitra penyedia terdaftar. Kami tidak menggunakan kartu kredit curian, metode uji coba gratis ilegal, atau celah yang melanggar ketentuan.'
      },
      {
        q: 'Bagaimana proses aktivasinya?',
        a: 'Setelah pesanan berhasil diproses, Anda cukup memasukkan alamat surel yang ingin didaftarkan. Anda akan menerima tautan undangan resmi langsung dari penyedia Cursor.'
      },
      {
        q: 'Bagaimana jika terjadi kendala teknis pada akun saya?',
        a: 'Layanan dukungan pelanggan kami bersiaga 24 jam sehari. Anda berhak atas garansi penuh selama masa durasi langganan masih berlaku.'
      }
    ]
  },
  {
    id: 'prod-gemini-adv',
    slug: 'google-gemini-advanced',
    category: 'ai-tools',
    name: 'Google Gemini Advanced (Google One AI)',
    tagline: 'Kapasitas 2 Juta Token & Terintegrasi Google Workspace',
    badge: 'Populer',
    rating: 4.8,
    reviewsCount: 218,
    shortDescription: 'Kekuatan AI tercanggih Google dengan jendela konteks 2 juta token untuk menganalisis dokumen panjang, video, dan basis data besar.',
    fullDescription: 'Dapatkan akses resmi ke Google Gemini Advanced yang ditenagai model Gemini 1.5 Pro. Mampu memproses berkas dokumen tebal, video panjang, dan ribuan baris kode dalam satu kali instruksi. Sudah mencakup penyimpanan awan Google One sebesar 2TB untuk Google Foto, Drive, dan Gmail.',
    price: 300000,
    originalPrice: 350000,
    pricePeriod: '/bulan',
    icon: 'sparkles',
    accentColor: '#6366f1',
    isOfficialLicense: true,
    packages: [
      { id: 'gem-1m', name: '1 Bulan Penuh', price: 300000, period: '1 Bulan', note: 'Termasuk Penyimpanan Awan 2TB' },
      { id: 'gem-3m', name: '3 Bulan Hemat', price: 860000, period: '3 Bulan', note: 'Hemat Rp 40.000' }
    ],
    features: [
      'Model Gemini 1.5 Pro generasi mutakhir',
      'Jendela konteks 2.000.000 token terluas di industri',
      'Integrasi langsung dengan Google Dokumen, Gmail, dan Spreadsheet',
      'Bonus 2TB penyimpanan awan Google One',
      'Fitur penulisan kode Python interaktif di peramban',
      'Aktivasi resmi langsung ke akun Google pribadi Anda'
    ],
    specifications: [
      { key: 'Penyedia Resmi', value: 'Google LLC' },
      { key: 'Status Akun', value: 'Akun Pribadi (Bukan Berbagi Pakai)' },
      { key: 'Penyimpanan Awan', value: '2TB Google One Cloud Storage' },
      { key: 'Akses Platform', value: 'Situs Web gemini.google.com & Aplikasi Android/iOS' }
    ],
    faq: [
      {
        q: 'Apakah ini akun berbagi pakai atau akun pribadi?',
        a: 'Ini merupakan akun pribadi resmi. Anda menggunakannya secara mandiri tanpa berbagi riwayat instruksi dengan pengguna lain.'
      }
    ]
  },
  {
    id: 'prod-chatgpt-plus',
    slug: 'chatgpt-plus-official',
    category: 'ai-tools',
    name: 'ChatGPT Plus Resmi OpenAI',
    tagline: 'Akses Prioritas GPT-4o, Kanvas, & Mode Suara Lanjutan',
    badge: 'Terlaris',
    rating: 4.9,
    reviewsCount: 512,
    shortDescription: 'Langganan resmi OpenAI ChatGPT Plus dengan fitur mutakhir: ruang kerja kanvas, pembuatan GPT kustom, dan generator gambar DALL-E 3.',
    fullDescription: 'Akses premium resmi ke layanan kecerdasan buatan terpopuler di dunia. Nikmati interaksi percakapan suara alami secara waktu nyata, kanvas interaktif untuk berkolaborasi dalam penulisan dokumen dan koding, serta batas penggunaan GPT-4o yang lebih tinggi.',
    price: 325000,
    originalPrice: 360000,
    pricePeriod: '/bulan',
    icon: 'robot',
    accentColor: '#10b981',
    isOfficialLicense: true,
    packages: [
      { id: 'gpt-1m', name: '1 Bulan Perorangan', price: 325000, period: '1 Bulan', note: 'Aktivasi langsung ke akun OpenAI Anda' },
      { id: 'gpt-3m', name: '3 Bulan Pro', price: 935000, period: '3 Bulan', note: 'Hemat Rp 40.000 + Garansi Penuh' }
    ],
    features: [
      'Akses prioritas model GPT-4o tanpa hambatan jam sibuk',
      'Mode Suara Lanjutan untuk percakapan audio alami',
      'Antarmuka Kanvas untuk kolaborasi koding dan revisi naskah',
      'Akses pembuatan GPT Kustom dan Toko GPT',
      'Penjelajahan web waktu nyata dan analisis data interaktif',
      'Generator gambar DALL-E 3 resolusi tinggi'
    ],
    specifications: [
      { key: 'Penyedia Resmi', value: 'OpenAI Inc.' },
      { key: 'Metode Lisensi', value: 'Aktivasi Langganan Resmi Berbayar' },
      { key: 'Garansi', value: '30 Hari Bergaransi Penuh' },
      { key: 'Dukungan Piranti', value: 'Peramban Web, iOS, Android, macOS, Windows' }
    ],
    faq: [
      {
        q: 'Apakah riwayat percakapan saya aman?',
        a: 'Sangat aman. Akun adalah milik Anda secara utuh dengan standar keamanan enkripsi resmi dari OpenAI.'
      }
    ]
  },
  {
    id: 'prod-claude-pro',
    slug: 'claude-pro-anthropic',
    category: 'ai-tools',
    name: 'Claude Pro Anthropic (Akses Resmi)',
    tagline: 'Kecerdasan Bahasa & Penalaran Koding Paling Akurat',
    badge: 'Populer',
    rating: 4.9,
    reviewsCount: 289,
    shortDescription: 'Akses resmi Claude 3.5 Sonnet dengan kapasitas 5 kali lipat, pratinjau artefak interaktif, dan ruang kerja proyek kolaboratif.',
    fullDescription: 'Claude 3.5 Sonnet diakui oleh komunitas insinyur piranti lunak dunia sebagai model terbaik untuk arsitektur sistem, pelacakan kutu kode, dan penulisan naskah berkualitas tinggi. Melalui MultiCloud, Anda memperoleh lisensi resmi tanpa kendala pembayaran internasional.',
    price: 330000,
    originalPrice: 375000,
    pricePeriod: '/bulan',
    icon: 'wand',
    accentColor: '#d97706',
    isOfficialLicense: true,
    packages: [
      { id: 'cld-1m', name: '1 Bulan', price: 330000, period: '1 Bulan', note: 'Akses Resmi Anthropic' },
      { id: 'cld-3m', name: '3 Bulan', price: 950000, period: '3 Bulan', note: 'Hemat Rp 40.000' }
    ],
    features: [
      'Kapasitas penggunaan 5 kali lipat dibanding versi gratis',
      'Model Claude 3.5 Sonnet dan Claude 3 Opus orisinal',
      'Fitur Artefak untuk melihat pratinjau kode dan diagram langsung',
      'Ruang kerja Proyek untuk mengunggah basis pengetahuan tim',
      'Penalaran runut dan minim kesalahan halusinasi'
    ],
    specifications: [
      { key: 'Penyedia Resmi', value: 'Anthropic PBC' },
      { key: 'Tipe Akses', value: 'Akun Resmi Berlisensi Orisinal' },
      { key: 'Jendela Konteks', value: '200.000 Token' }
    ],
    faq: [
      {
        q: 'Apakah dapat diakses di Indonesia tanpa VPN?',
        a: 'Ya! Akun resmi Claude Pro dapat diakses secara langsung dari jaringan internet Indonesia tanpa memerlukan VPN.'
      }
    ]
  },
  {
    id: 'prod-vps-ssd',
    slug: 'vps-cloud-nvme-ultra',
    category: 'cloud-hosting',
    name: 'Peladen VPS Cloud NVMe Ultra (AMD EPYC)',
    tagline: 'Performa Komputasi Super Cepat & Memori Terdedikasi',
    badge: 'Populer',
    rating: 4.9,
    reviewsCount: 198,
    shortDescription: 'Virtual Private Server berbasis prosesor AMD EPYC dengan penyimpanan NVMe Gen4 SSD, uplink 1Gbps, dan anti-DDoS 1Tbps.',
    fullDescription: 'Dirancang khusus untuk aplikasi web bertrafik padat, basis data produksi, dan layanan mikro backend. Dapatkan kendali akses utama SSH penuh, pilihan sistem operasi Linux atau Windows Server, serta pencadangan data otomatis harian.',
    price: 120000,
    originalPrice: 150000,
    pricePeriod: '/bulan',
    icon: 'server',
    accentColor: '#2563eb',
    isOfficialLicense: false,
    packages: [
      { id: 'vps-starter', name: 'Paket Pemula (2 vCPU / 4GB RAM)', price: 120000, period: '1 Bulan', note: '50GB NVMe SSD' },
      { id: 'vps-pro', name: 'Paket Profesional (4 vCPU / 8GB RAM)', price: 230000, period: '1 Bulan', note: '100GB NVMe SSD' },
      { id: 'vps-enterprise', name: 'Paket Korporat (8 vCPU / 16GB RAM)', price: 440000, period: '1 Bulan', note: '220GB NVMe SSD' }
    ],
    features: [
      'Prosesor vCPU Khusus AMD EPYC frekuensi 3,2GHz+',
      'Penyimpanan NVMe SSD Gen4 RAID-10 (Kecepatan baca > 5000MB/dtk)',
      '1 Alamat IPv4 Khusus + Subnet IPv6',
      'Mitigasi DDoS Enterprise 1Tbps+',
      'Akses Penuh SSH dan Konsol Web VNC',
      'Jaminan Keterandalan SLA 99,98% Bergaransi'
    ],
    specifications: [
      { key: 'Teknologi Virtualisasi', value: 'KVM (Kernel-based Virtual Machine)' },
      { key: 'Lokasi Pusat Data', value: 'Jakarta Equinix / Singapura' },
      { key: 'Kapasitas Lebar Pita', value: 'Tanpa Batas Kuota (Fair Usage)' }
    ],
    faq: [
      {
        q: 'Berapa lama proses penyediaan peladen berlangsung?',
        a: 'Setelah pembayaran terverifikasi, peladen akan aktif secara otomatis dalam kurun waktu 2 hingga 3 menit.'
      }
    ]
  },
  {
    id: 'prod-wa-gateway',
    slug: 'whatsapp-business-api-pro',
    category: 'api-services',
    name: 'Gerbang WhatsApp Business API Pro',
    tagline: 'Kirim Kode OTP & Notifikasi Otomatis Tanpa Blokir',
    badge: 'Terlaris',
    rating: 4.8,
    reviewsCount: 310,
    shortDescription: 'Gerbang WhatsApp Business API berkecepatan tinggi dengan integrasi webhook, templat pesan, dan dasbor analitik real-time.',
    fullDescription: 'Solusi gerbang pesan WhatsApp terpercaya untuk bisnis dan pengembang aplikasi. Kirimkan ribuan pesan transaksional, kode verifikasi OTP, dokumen faktur digital, dan pengingat pesanan secara instan dengan keterandalan sistem 99,99%.',
    price: 150000,
    originalPrice: 180000,
    pricePeriod: '/bulan',
    icon: 'brandWhatsapp',
    accentColor: '#10b981',
    isOfficialLicense: false,
    packages: [
      { id: 'wa-basic', name: 'Paket Pemula (5.000 Pesan)', price: 150000, period: '1 Bulan', note: 'Maksimal 5 pesan per detik' },
      { id: 'wa-business', name: 'Paket Bisnis (25.000 Pesan)', price: 380000, period: '1 Bulan', note: 'Maksimal 20 pesan per detik' },
      { id: 'wa-enterprise', name: 'Paket Tanpa Batas Khusus', price: 950000, period: '1 Bulan', note: 'Nomor Khusus + SLA 99,99%' }
    ],
    features: [
      'Kirim pesan teks, gambar, video, dan dokumen PDF',
      'Mendukung Templat Pesan dan Tombol Interaktif',
      'Webhook Waktu Nyata untuk menerima pesan masuk',
      'Dokumentasi REST API lengkap dan SDK siap pakai',
      'Sistem klaster dengan failover otomatis'
    ],
    specifications: [
      { key: 'Protokol API', value: 'RESTful API / Format JSON' },
      { key: 'Kecepatan Rata-Rata', value: '1,1 Detik per pesan' },
      { key: 'Standar Respons', value: 'RFC-7807 JSON' }
    ],
    faq: [
      {
        q: 'Apakah saya dapat menggunakan nomor WhatsApp milik sendiri?',
        a: 'Tentu bisa. Anda dapat menautkan nomor WhatsApp bisnis Anda sendiri melalui pemindaian QR atau pendaftaran API resmi.'
      }
    ]
  },
  {
    id: 'prod-dev-toolkit',
    slug: 'devtoolkit-studio-license',
    category: 'developer-tools',
    name: 'DevToolkit Studio Enterprise',
    tagline: 'Koleksi Piranti Pengembang Lengkap Offline-First',
    badge: 'Baru',
    rating: 4.9,
    reviewsCount: 87,
    shortDescription: 'Aplikasi desktop pengembang: Pengelola Basis Data, Pemformat JSON, Pengurai JWT, Penguji Regex, dan Klien API REST.',
    fullDescription: 'Hindari alat online peramban yang rentan membocorkan data rahasia perusahaan Anda. DevToolkit Studio bekerja 100% lokal dan luring pada komputer Anda dengan kecepatan aplikasi native, jaminan privasi data, dan lisensi komersial seumur hidup.',
    price: 199000,
    originalPrice: 299000,
    pricePeriod: '/lisensi',
    icon: 'terminal',
    accentColor: '#6366f1',
    isOfficialLicense: true,
    packages: [
      { id: 'dev-std', name: 'Lisensi Perorangan (Seumur Hidup)', price: 199000, period: 'Permanen', note: 'Maksimal 3 Perangkat' },
      { id: 'dev-team', name: 'Paket Tim (Hingga 10 Pengembang)', price: 799000, period: 'Permanen', note: 'Pengelolaan Lisensi Terpusat' }
    ],
    features: [
      '100% Bekerja Luring & Aman (Data tidak pernah dikirim ke luar)',
      'Klien Basis Data Universal (MySQL, PostgreSQL, MongoDB, Redis, SQLite)',
      'Klien REST & GraphQL dengan pengelola variabel lingkungan',
      'Pengurai JWT, Pembangkit Hash, Pengkode Base64 & Regex',
      'Lisensi permanen tanpa biaya langganan bulanan'
    ],
    specifications: [
      { key: 'Dukungan OS', value: 'macOS (Apple Silicon & Intel), Windows 10/11, Linux' },
      { key: 'Tipe Lisensi', value: 'Lisensi Komersial Seumur Hidup (Perpetual)' }
    ],
    faq: [
      {
        q: 'Apakah lisensi ini memiliki masa kedaluwarsa?',
        a: 'Tidak ada. Lisensi ini berlaku selamanya seumur hidup untuk versi yang dibeli termasuk pembaruan minor gratis.'
      }
    ]
  },
  {
    id: 'prod-copilot',
    slug: 'github-copilot-individual',
    category: 'ai-tools',
    name: 'GitHub Copilot Individual (Akses Resmi)',
    tagline: 'Asisten Pemrograman AI Resmi dari Microsoft & GitHub',
    badge: 'Populer',
    rating: 4.8,
    reviewsCount: 204,
    shortDescription: 'Asisten AI koding resmi yang terintegrasi langsung di VS Code, JetBrains IDEs, Visual Studio, dan Neovim.',
    fullDescription: 'GitHub Copilot dilatih menggunakan miliaran baris kode publik untuk memberikan saran kode secara langsung saat Anda mengetik. Lisensi resmi ini diaktifkan langsung pada akun GitHub pribadi Anda.',
    price: 175000,
    originalPrice: 200000,
    pricePeriod: '/bulan',
    icon: 'brandGithub',
    accentColor: '#0f172a',
    isOfficialLicense: true,
    packages: [
      { id: 'cop-1m', name: '1 Bulan Perorangan', price: 175000, period: '1 Bulan', note: 'Aktivasi langsung ke akun GitHub' },
      { id: 'cop-12m', name: '1 Tahun Penuh', price: 1850000, period: '12 Bulan', note: 'Hemat Rp 250.000' }
    ],
    features: [
      'Saran kode waktu nyata dalam puluhan bahasa pemrograman',
      'Fitur Obrolan Copilot di IDE untuk menjelaskan kode dan perbaikan',
      'Integrasi terminal perintah CLI',
      'Dukungan IDE VS Code, JetBrains, Neovim',
      'Akses resmi langsung pada nama pengguna GitHub Anda'
    ],
    specifications: [
      { key: 'Penyedia Resmi', value: 'GitHub, Inc. (Microsoft Corp)' },
      { key: 'Tipe Lisensi', value: 'Lisensi Pengguna Perorangan Resmi' }
    ],
    faq: [
      {
        q: 'Apakah saya perlu memberikan kata sandi akun GitHub saya?',
        a: 'TIDAK. Kami tidak pernah meminta kata sandi Anda. Proses aktivasi dilakukan melalui tautan undangan resmi ke nama pengguna GitHub Anda.'
      }
    ]
  },
  {
    id: 'prod-win-server',
    slug: 'windows-server-datacenter-license',
    category: 'software-licenses',
    name: 'Lisensi Windows Server 2025 Datacenter',
    tagline: 'Lisensi Digital Orisinal untuk Infrastruktur Peladen Korporat',
    badge: 'Baru',
    rating: 4.9,
    reviewsCount: 76,
    shortDescription: 'Kunci produk orisinal Microsoft Windows Server 2025 Datacenter dengan aktivasi daring resmi seumur hidup.',
    fullDescription: 'Lisensi digital orisinal untuk peladen fisik dan virtualisasi tanpa batas. Disertai garansi aktivasi daring 100%, faktur resmi, dan sertifikat lisensi digital yang sah untuk kebutuhan audit kepatuhan piranti lunak perusahaan.',
    price: 550000,
    originalPrice: 750000,
    pricePeriod: '/peladen',
    icon: 'license',
    accentColor: '#0284c7',
    isOfficialLicense: true,
    packages: [
      { id: 'win-16c', name: 'Lisensi Dasar 16 Core', price: 550000, period: 'Permanen', note: 'Kontainer Hyper-V Tanpa Batas' },
      { id: 'win-32c', name: 'Lisensi Korporat 32 Core', price: 950000, period: 'Permanen', note: 'Untuk peladen dengan prosesor ganda' }
    ],
    features: [
      'Aktivasi Daring langsung ke peladen aktivasi Microsoft',
      'Lisensi Retail Orisinal seumur hidup',
      'Mesin Virtual & Kontainer Hyper-V Tanpa Batas',
      'Dukungan Keamanan Berlapis Tingkat Lanjut',
      'Termasuk Faktur dan Bukti Kepemilikan Sah'
    ],
    specifications: [
      { key: 'Penerbit Resmi', value: 'Microsoft Corporation' },
      { key: 'Format Kunci', value: 'Kunci Digital Retail 25 Digit' },
      { key: 'Jaminan', value: 'Aktivasi Berhasil 100% atau Uang Kembali' }
    ],
    faq: [
      {
        q: 'Bagaimana kunci lisensi ini dikirimkan?',
        a: 'Kunci produk 25 digit beserta panduan instalasi dan tautan unduhan ISO resmi dikirimkan langsung ke dasbor akun Anda seketika setelah pembayaran terverifikasi.'
      }
    ]
  }
];
