-- ==============================================================================
-- SKEMA BASIS DATA MULTICLOUD (SUPABASE POSTGRESQL)
-- Salin dan jalankan skrip ini di SQL Editor pada Dasbor Supabase Anda.
-- ==============================================================================

-- 1. Tabel Profil Pengguna & Administrator
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    auth_user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    email VARCHAR(255) NOT NULL UNIQUE,
    full_name VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'user' CHECK (role IN ('user', 'admin')),
    phone VARCHAR(50),
    company VARCHAR(255),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Tabel Kategori Layanan
CREATE TABLE IF NOT EXISTS public.categories (
    id VARCHAR(100) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    subtitle TEXT,
    icon VARCHAR(100) DEFAULT 'layers',
    badge VARCHAR(100),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Tabel Produk & Lisensi Digital
CREATE TABLE IF NOT EXISTS public.products (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    tagline VARCHAR(255),
    category_id VARCHAR(100) REFERENCES public.categories(id) ON DELETE SET NULL,
    badge VARCHAR(50) DEFAULT 'Populer' CHECK (badge IN ('Terlaris', 'Populer', 'Baru')),
    price NUMERIC(12, 2) NOT NULL,
    original_price NUMERIC(12, 2),
    price_period VARCHAR(50) DEFAULT '/bulan',
    icon VARCHAR(100) DEFAULT 'package',
    is_official_license BOOLEAN DEFAULT true,
    rating NUMERIC(2, 1) DEFAULT 5.0,
    reviews_count INT DEFAULT 0,
    short_description TEXT,
    full_description TEXT,
    features JSONB DEFAULT '[]'::jsonb,
    specifications JSONB DEFAULT '[]'::jsonb,
    packages JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Tabel Pesanan (Orders)
CREATE TABLE IF NOT EXISTS public.orders (
    id VARCHAR(100) PRIMARY KEY,
    invoice_number VARCHAR(100) NOT NULL UNIQUE,
    user_email VARCHAR(255) NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    user_phone VARCHAR(50),
    item_title VARCHAR(255) NOT NULL,
    package_name VARCHAR(255) NOT NULL,
    category_id VARCHAR(100),
    amount NUMERIC(12, 2) NOT NULL,
    payment_method VARCHAR(100) NOT NULL,
    status VARCHAR(50) DEFAULT 'Menunggu Pembayaran' CHECK (status IN ('Menunggu Pembayaran', 'Sedang Diproses', 'Selesai', 'Dibatalkan')),
    license_key VARCHAR(255),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Tabel Transaksi Keuangan
CREATE TABLE IF NOT EXISTS public.transactions (
    id VARCHAR(100) PRIMARY KEY,
    order_id VARCHAR(100) REFERENCES public.orders(id) ON DELETE CASCADE,
    description TEXT NOT NULL,
    payment_method VARCHAR(100) NOT NULL,
    amount NUMERIC(12, 2) NOT NULL,
    status VARCHAR(50) DEFAULT 'Menunggu Pembayaran' CHECK (status IN ('Menunggu Pembayaran', 'Berhasil', 'Gagal')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Tabel Tiket Bantuan (Support Tickets)
CREATE TABLE IF NOT EXISTS public.support_tickets (
    id VARCHAR(100) PRIMARY KEY,
    user_email VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    department VARCHAR(100) NOT NULL,
    priority VARCHAR(50) DEFAULT 'Biasa' CHECK (priority IN ('Rendah', 'Biasa', 'Tinggi', 'Darurat')),
    status VARCHAR(50) DEFAULT 'Sedang Diproses' CHECK (status IN ('Sedang Diproses', 'Terjawab', 'Selesai')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. Data Awal Kategori
INSERT INTO public.categories (id, title, subtitle, icon, badge)
VALUES 
    ('cloud-hosting', 'Komputasi Awan & Hosting', 'Infrastruktur peladen awan berkinerja tinggi, keterandalan 99,99%, dan latensi rendah.', 'cloud', 'Kinerja Tinggi'),
    ('api-services', 'Layanan API', 'Gerbang API siap pakai untuk integrasi WhatsApp, inferensi AI, dan perkakas pengembang.', 'api', 'Ramah Pengembang'),
    ('ai-subscriptions', 'Alat AI & Langganan Resmi', 'Akses resmi dan lisensi asli perangkat lunak AI terkemuka untuk produktivitas koding dan tim.', 'sparkles', 'Lisensi Resmi'),
    ('digital-products', 'Produk Digital', 'Koleksi piranti lunak utilitas, perkakas pengembang, dan lisensi perusahaan.', 'package', 'Pengiriman Instan')
ON CONFLICT (id) DO NOTHING;

-- 8. Data Administrator Bawaan
INSERT INTO public.profiles (email, full_name, role, phone, company)
VALUES 
    ('admin@multicloud.id', 'Administrator MultiCloud', 'admin', '+62 812-9876-5432', 'Kantor Pusat MultiCloud')
ON CONFLICT (email) DO NOTHING;

-- Kebijakan Keamanan Tingkat Baris (Row Level Security - RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.support_tickets ENABLE ROW LEVEL SECURITY;

-- Kebijakan Akses (RLS Policies)
DROP POLICY IF EXISTS "Akses baca terbuka untuk kategori" ON public.categories;
CREATE POLICY "Akses penuh kategori" ON public.categories FOR ALL USING (true);

DROP POLICY IF EXISTS "Akses baca terbuka untuk produk" ON public.products;
CREATE POLICY "Akses penuh produk" ON public.products FOR ALL USING (true);

DROP POLICY IF EXISTS "Akses baca terbuka untuk profil" ON public.profiles;
CREATE POLICY "Akses penuh profil" ON public.profiles FOR ALL USING (true);

DROP POLICY IF EXISTS "Akses penuh pesanan" ON public.orders;
CREATE POLICY "Akses penuh pesanan" ON public.orders FOR ALL USING (true);

DROP POLICY IF EXISTS "Akses penuh transaksi" ON public.transactions;
CREATE POLICY "Akses penuh transaksi" ON public.transactions FOR ALL USING (true);

DROP POLICY IF EXISTS "Akses penuh tiket bantuan" ON public.support_tickets;
CREATE POLICY "Akses penuh tiket bantuan" ON public.support_tickets FOR ALL USING (true);

-- Otomatisasi pendaftaran akun: Setiap ada pendaftaran baru di auth.users, masukkan ke public.profiles
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (auth_user_id, email, full_name, role)
  VALUES (
    new.id,
    new.email,
    COALESCE(new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1)),
    'user'
  )
  ON CONFLICT (email) DO UPDATE
  SET auth_user_id = EXCLUDED.auth_user_id;
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

