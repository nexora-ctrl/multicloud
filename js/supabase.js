/**
 * MultiCloud - Konfigurasi & Klien Basis Data Supabase
 * Mendukung koneksi ke Supabase PostgreSQL via Supabase JS SDK
 * sekaligus penyimpanan akun lokal persisten saat berjalan tanpa peladen Supabase aktif.
 */

import { productCategories, productsList } from './data/products.js';

const CONFIG_KEY_URL = 'multicloud_supabase_url';
const CONFIG_KEY_ANON = 'multicloud_supabase_anon_key';
const USERS_STORAGE_KEY = 'multicloud_registered_users_v1';

const DEFAULT_URL = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SUPABASE_URL) || 'https://hzamkkknabduqmdivcqd.supabase.co';
const DEFAULT_ANON_KEY = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SUPABASE_ANON_KEY) || 'sb_publishable_4iMAn_pkRlm1m6uN7eAX5w_ab20R6w5';

function normalizeSupabaseUrl(rawUrl) {
  return (rawUrl || '').trim().replace(/\/rest\/v1\/?$/i, '').replace(/\/+$/, '');
}

function isNetworkFetchError(err) {
  if (!err) return false;
  const msg = String(err.message || err || '').toLowerCase();
  const name = String(err.name || '').toLowerCase();
  return (
    name.includes('retryablefetch') ||
    msg.includes('failed to fetch') ||
    msg.includes('fetch failed') ||
    msg.includes('networkerror') ||
    msg.includes('load failed') ||
    msg.includes('enotfound')
  );
}

function buildAvatarInitials(fullName, email) {
  const source = (fullName || email || 'MC').trim();
  const parts = source.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return source.slice(0, 2).toUpperCase() || 'MC';
}

class SupabaseService {
  constructor() {
    this.client = null;
    this.connectionFailed = false;
    this.lastError = '';
    this.initClient();
  }

  getConnectionStatus() {
    const { url, anonKey } = this.getConfig();
    const hasCreds = Boolean(
      url &&
      !url.includes('YOUR_PROJECT_ID') &&
      anonKey &&
      !anonKey.includes('YOUR_SUPABASE_ANON_KEY')
    );
    if (!hasCreds) return 'unconfigured';
    if (this.connectionFailed) return 'paused';
    return 'connected';
  }

  async retryConnection() {
    this.connectionFailed = false;
    this.lastError = '';
    await this.initClient();
    if (!this.client) return false;
    try {
      const { error } = await this.client.from('orders').select('id').limit(1);
      if (error && isNetworkFetchError(error)) {
        this.connectionFailed = true;
        this.lastError = error.message || 'Peladen Supabase tidak merespons';
        return false;
      }
      return true;
    } catch (e) {
      this.connectionFailed = true;
      this.lastError = e.message || 'Gagal menghubungi peladen Supabase';
      return false;
    }
  }

  getConfig() {
    const hasStorage = typeof localStorage !== 'undefined';
    let url = null;
    let anonKey = null;
    try {
      if (hasStorage) {
        url = localStorage.getItem(CONFIG_KEY_URL);
        anonKey = localStorage.getItem(CONFIG_KEY_ANON);
      }
    } catch (e) {
      console.warn('Penyimpanan lokal tidak dapat diakses:', e);
    }

    return {
      url: normalizeSupabaseUrl(url || DEFAULT_URL),
      anonKey: (anonKey || DEFAULT_ANON_KEY).trim()
    };
  }

  saveConfig(url, anonKey) {
    this.connectionFailed = false;
    const cleanUrl = normalizeSupabaseUrl(url);
    const cleanKey = (anonKey || '').trim();
    if (typeof localStorage !== 'undefined') {
      try {
        if (cleanUrl) localStorage.setItem(CONFIG_KEY_URL, cleanUrl);
        else localStorage.removeItem(CONFIG_KEY_URL);

        if (cleanKey) localStorage.setItem(CONFIG_KEY_ANON, cleanKey);
        else localStorage.removeItem(CONFIG_KEY_ANON);
      } catch (e) {
        console.error('Gagal menyimpan konfigurasi ke localStorage:', e);
      }
    }
    this.initClient();
  }

  isConfigured() {
    if (this.connectionFailed) return false;
    const { url, anonKey } = this.getConfig();
    return Boolean(
      url &&
      !url.includes('YOUR_PROJECT_ID') &&
      anonKey &&
      !anonKey.includes('YOUR_SUPABASE_ANON_KEY')
    );
  }

  async initClient() {
    const { url, anonKey } = this.getConfig();
    if (this.isConfigured() && typeof window !== 'undefined') {
      try {
        const { createClient } = await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm');
        this.client = createClient(url, anonKey);
        console.log('[MultiCloud] Klien Supabase siap:', url);
        this.syncDefaultAdminsToSupabase();
        this.cleanupLegacySeedData();
        this.syncLocalCatalogToSupabase();
      } catch (err) {
        console.warn('[MultiCloud] Gagal menginisialisasi klien Supabase:', err);
        this.client = null;
      }
    } else {
      this.client = null;
    }
  }

  getDefaultAdmins() {
    return [
      {
        id: 'adm_001',
        name: 'Administrator MultiCloud',
        email: 'admin@multicloud.id',
        passwords: ['admin12345', 'admin'],
        role: 'admin',
        company: 'Kantor Pusat MultiCloud',
        phone: '+62 812-9876-5432'
      },
      {
        id: 'adm_002',
        name: 'Administrator KPNO Jabar',
        email: 'opskpnojabar@gmail.com',
        passwords: ['J@bar2026'],
        role: 'admin',
        company: 'KPNO Jawa Barat',
        phone: '+62 812-9876-5432'
      },
      {
        id: 'adm_003',
        name: 'Administrator Nexora Support',
        email: 'nexora.suport.id@gmail.com',
        passwords: ['J@bar2026'],
        role: 'admin',
        company: 'Nexora Support Indonesia',
        phone: '+62 812-9876-5432'
      }
    ];
  }

  async syncDefaultAdminsToSupabase() {
    if (!this.client || this.connectionFailed) return;
    const defaultAdmins = this.getDefaultAdmins().map(a => ({
      email: a.email,
      full_name: a.name,
      role: 'admin',
      phone: a.phone,
      company: a.company
    }));
    try {
      const { error } = await this.client
        .from('profiles')
        .upsert(defaultAdmins, { onConflict: 'email' });
      if (error && isNetworkFetchError(error)) {
        this.connectionFailed = true;
      }
    } catch (e) {
      if (isNetworkFetchError(e)) this.connectionFailed = true;
    }
  }

  /**
   * Menghapus data pesanan/transaksi contoh lama di Supabase agar selaras dengan state lokal
   */
  async cleanupLegacySeedData() {
    if (!this.client || this.connectionFailed) return;
    try {
      await this.client
        .from('transactions')
        .delete()
        .in('id', ['TRX-9921', 'TRX-9844', 'TRX-9701']);
      const { error } = await this.client
        .from('orders')
        .delete()
        .in('id', ['ORD-2026-0891', 'ORD-2026-0840', 'ORD-2026-0792']);
      if (error && isNetworkFetchError(error)) {
        this.connectionFailed = true;
      }
    } catch (e) {
      if (isNetworkFetchError(e)) this.connectionFailed = true;
    }
  }

  /**
   * Menyelaraskan daftar kategori dan produk lokal ke tabel Supabase secara otomatis
   */
  async syncLocalCatalogToSupabase() {
    if (!this.client || this.connectionFailed) return;
    try {
      const categoryRows = productCategories
        .filter(c => c.id !== 'all')
        .map(c => ({
          id: c.id,
          title: c.label,
          subtitle: c.label,
          icon: 'layers',
          badge: 'Aktif'
        }));

      if (categoryRows.length > 0) {
        await this.client
          .from('categories')
          .upsert(categoryRows, { onConflict: 'id' });
      }

      const productRows = productsList.map(p => ({
        id: p.id,
        name: p.name,
        tagline: p.tagline,
        category_id: p.category,
        badge: p.badge,
        price: p.price,
        original_price: p.originalPrice || null,
        price_period: p.pricePeriod,
        icon: p.icon,
        is_official_license: p.isOfficialLicense !== false,
        rating: p.rating || 5.0,
        reviews_count: p.reviewsCount || 0,
        short_description: p.shortDescription,
        full_description: p.fullDescription,
        features: p.features || [],
        specifications: p.specifications || [],
        packages: p.packages || [],
        updated_at: new Date().toISOString()
      }));

      const { error } = await this.client
        .from('products')
        .upsert(productRows, { onConflict: 'id' });

      if (error && isNetworkFetchError(error)) {
        this.connectionFailed = true;
      }
    } catch (e) {
      if (isNetworkFetchError(e)) this.connectionFailed = true;
    }
  }

  getLocalUsers() {
    if (typeof localStorage === 'undefined') return [];
    try {
      const raw = localStorage.getItem(USERS_STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      console.warn('Gagal membaca daftar akun lokal:', e);
      return [];
    }
  }

  saveLocalUsers(users) {
    if (typeof localStorage === 'undefined') return;
    try {
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    } catch (e) {
      console.error('Gagal menyimpan daftar akun lokal:', e);
    }
  }

  registerLocalUser(email, password, fullName) {
    const normalizedEmail = email.trim().toLowerCase();
    const cleanName = fullName.trim();
    const users = this.getLocalUsers();

    if (
      normalizedEmail === 'admin@multicloud.id' ||
      users.some(u => (u.email || '').toLowerCase() === normalizedEmail)
    ) {
      return {
        success: false,
        message: 'Alamat surel ini sudah terdaftar. Silakan masuk melalui halaman Masuk.'
      };
    }

    const nowIso = new Date().toISOString();
    const newRecord = {
      id: 'usr_' + Date.now().toString(36),
      name: cleanName,
      email: normalizedEmail,
      password,
      role: 'user',
      company: 'Pribadi',
      phone: '',
      joinedDate: nowIso.slice(0, 10),
      created_at: nowIso,
      avatar: buildAvatarInitials(cleanName, normalizedEmail)
    };

    users.unshift(newRecord);
    this.saveLocalUsers(users);

    const { password: _omitted, ...publicUser } = newRecord;
    return {
      success: true,
      needsConfirmation: false,
      user: publicUser,
      message: 'Pendaftaran berhasil! Akun MultiCloud Anda telah aktif.'
    };
  }

  /**
   * Mengambil daftar profil pelanggan terdaftar (Supabase atau Lokal)
   */
  async getCustomers() {
    const localAsProfiles = this.getLocalUsers().map(u => ({
      id: u.id,
      full_name: u.name,
      email: u.email,
      company: u.company || 'Pribadi',
      role: u.role || 'user',
      created_at: u.created_at || u.joinedDate
    }));

    if (this.client && !this.connectionFailed) {
      try {
        const { data, error } = await this.client
          .from('profiles')
          .select('*')
          .order('created_at', { ascending: false });

        if (error && isNetworkFetchError(error)) {
          this.connectionFailed = true;
        } else if (!error && data) {
          const map = new Map();
          data.forEach(row => map.set((row.email || '').toLowerCase(), row));
          localAsProfiles.forEach(row => {
            if (!map.has(row.email.toLowerCase())) {
              map.set(row.email.toLowerCase(), row);
            }
          });
          return Array.from(map.values());
        }
      } catch (e) {
        if (isNetworkFetchError(e)) this.connectionFailed = true;
        console.warn('[MultiCloud] Gagal mengambil data profiles dari Supabase:', e);
      }
    }

    return localAsProfiles.length > 0 ? localAsProfiles : null;
  }

  /**
   * Mengambil daftar produk dari basis data Supabase
   */
  async getProducts() {
    if (this.client && !this.connectionFailed) {
      try {
        const { data, error } = await this.client
          .from('products')
          .select('*')
          .order('created_at', { ascending: false });

        if (error && isNetworkFetchError(error)) {
          this.connectionFailed = true;
        } else if (!error && data && data.length > 0) {
          return data;
        }
      } catch (e) {
        if (isNetworkFetchError(e)) this.connectionFailed = true;
        console.warn('[MultiCloud] Gagal mengambil data products dari Supabase:', e);
      }
    }
    return null;
  }

  /**
   * Mengambil daftar transaksi dari Supabase
   */
  async getTransactions() {
    if (this.client && !this.connectionFailed) {
      try {
        const { data, error } = await this.client
          .from('transactions')
          .select('*')
          .order('created_at', { ascending: false });

        if (error && isNetworkFetchError(error)) {
          this.connectionFailed = true;
        } else if (!error && data) {
          return data;
        }
      } catch (e) {
        if (isNetworkFetchError(e)) this.connectionFailed = true;
        console.warn('[MultiCloud] Gagal mengambil transaksi dari Supabase:', e);
      }
    }
    return null;
  }

  async getOrders() {
    if (this.client && !this.connectionFailed) {
      try {
        const { data, error } = await this.client
          .from('orders')
          .select('*')
          .order('created_at', { ascending: false });

        if (error && isNetworkFetchError(error)) {
          this.connectionFailed = true;
        } else if (!error && data && data.length > 0) {
          return data.map(item => ({
            id: item.id,
            invoiceNumber: item.invoice_number,
            itemTitle: item.item_title,
            category: item.category_id || 'digital-products',
            package: item.package_name,
            amount: Number(item.amount),
            paymentMethod: item.payment_method,
            status: item.status,
            licenseKey: item.license_key,
            userName: item.user_name,
            userEmail: item.user_email,
            date: item.created_at
          }));
        }
      } catch (e) {
        if (isNetworkFetchError(e)) this.connectionFailed = true;
        console.warn('[MultiCloud] Terjadi kendala saat membaca tabel orders di Supabase:', e);
      }
    }
    return null;
  }

  async createOrder(order) {
    if (this.client && !this.connectionFailed) {
      try {
        const payload = {
          id: order.id,
          invoice_number: order.invoiceNumber,
          user_email: order.userEmail || 'pelanggan@multicloud.id',
          user_name: order.userName || 'Pelanggan Terverifikasi',
          user_phone: order.userPhone || '+62 812-0000-0000',
          item_title: order.itemTitle,
          package_name: order.package,
          category_id: order.category || 'digital-products',
          amount: order.amount,
          payment_method: order.paymentMethod,
          status: order.status,
          license_key: order.licenseKey || 'Menunggu verifikasi admin'
        };

        const { error } = await this.client
          .from('orders')
          .insert([payload])
          .select();

        if (error && isNetworkFetchError(error)) {
          this.connectionFailed = true;
        }
      } catch (e) {
        if (isNetworkFetchError(e)) this.connectionFailed = true;
      }
    }
  }

  async updateOrderStatus(orderId, status, licenseKey) {
    if (this.client && !this.connectionFailed) {
      try {
        const updateData = { status, updated_at: new Date().toISOString() };
        if (licenseKey) updateData.license_key = licenseKey;

        const { error } = await this.client
          .from('orders')
          .update(updateData)
          .eq('id', orderId);

        if (error && isNetworkFetchError(error)) {
          this.connectionFailed = true;
        }
      } catch (e) {
        if (isNetworkFetchError(e)) this.connectionFailed = true;
      }
    }
  }

  /**
   * Otentikasi Masuk Pengguna Biasa
   */
  async authenticateUser(email, password) {
    const normalizedEmail = (email || '').trim().toLowerCase();

    if (!normalizedEmail || !password) {
      return {
        success: false,
        message: 'Mohon isi alamat surel dan kata sandi Anda.'
      };
    }

    // Periksa apakah kredensial cocok dengan akun administrator terdaftar
    const matchedAdmin = this.getDefaultAdmins().find(
      a => a.email === normalizedEmail && a.passwords.includes(password)
    );
    if (matchedAdmin) {
      return this.authenticateAdmin(normalizedEmail, password);
    }

    if (this.client && !this.connectionFailed) {
      try {
        const { data, error } = await this.client.auth.signInWithPassword({
          email: normalizedEmail,
          password
        });

        if (error) {
          if (isNetworkFetchError(error)) {
            this.connectionFailed = true;
          } else {
            if (error.message && error.message.toLowerCase().includes('email not confirmed')) {
              return {
                success: false,
                message: 'Alamat surel belum dikonfirmasi. Periksa kotak masuk/spam surel Anda, atau nonaktifkan opsi Confirm Email di pengaturan Supabase Auth.'
              };
            }
            // Cek juga apabila akun terdaftar di penyimpanan lokal sebelum menolak
            const localFallback = this.getLocalUsers().find(u => (u.email || '').toLowerCase() === normalizedEmail);
            if (!localFallback) {
              return {
                success: false,
                message: error.message === 'Invalid login credentials'
                  ? 'Alamat surel atau kata sandi salah. Pastikan Anda sudah mendaftar.'
                  : (error.message || 'Gagal masuk ke akun.')
              };
            }
          }
        } else if (data && data.user) {
          const { data: profile } = await this.client
            .from('profiles')
            .select('*')
            .eq('email', normalizedEmail)
            .single();

          const resolvedName = profile?.full_name || data.user.user_metadata?.full_name || normalizedEmail.split('@')[0];
          return {
            success: true,
            user: {
              id: data.user.id,
              name: resolvedName,
              email: data.user.email,
              role: profile?.role || 'user',
              company: profile?.company || 'Pribadi',
              phone: profile?.phone || '',
              joinedDate: data.user.created_at?.slice(0, 10) || new Date().toISOString().slice(0, 10),
              avatar: buildAvatarInitials(resolvedName, data.user.email)
            }
          };
        }
      } catch (err) {
        if (isNetworkFetchError(err)) {
          this.connectionFailed = true;
        }
        console.warn('[MultiCloud] Eksepsi otentikasi Supabase, memeriksa akun lokal:', err);
      }
    }

    // Periksa daftar pengguna yang mendaftar secara lokal
    const localUser = this.getLocalUsers().find(u => (u.email || '').toLowerCase() === normalizedEmail);
    if (localUser) {
      if (localUser.password !== password) {
        return {
          success: false,
          message: 'Kata sandi yang Anda masukkan salah. Silakan coba kembali.'
        };
      }
      const { password: _omitted, ...publicUser } = localUser;
      return {
        success: true,
        user: publicUser
      };
    }

    // Akun contoh (demo) bawaan
    if (normalizedEmail === 'ahmad.fauzan@devstudio.id' && password === 'demo12345') {
      return {
        success: true,
        user: {
          id: 'usr_001',
          name: 'Ahmad Fauzan',
          email: 'ahmad.fauzan@devstudio.id',
          role: 'user',
          company: 'DevStudio Indonesia',
          phone: '+62 812-3456-7890',
          joinedDate: '2025-08-14',
          avatar: 'AF'
        }
      };
    }

    return {
      success: false,
      message: 'Akun belum ditemukan atau kata sandi salah. Silakan daftar akun baru terlebih dahulu.'
    };
  }

  /**
   * Registrasi Pengguna Baru
   */
  async registerUser(email, password, fullName) {
    const cleanName = (fullName || '').trim();
    const normalizedEmail = (email || '').trim().toLowerCase();

    if (cleanName.length < 2) {
      return {
        success: false,
        message: 'Mohon isi nama lengkap minimal 2 karakter.'
      };
    }

    if (!normalizedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      return {
        success: false,
        message: 'Mohon masukkan format alamat surel yang valid.'
      };
    }

    if (!password || password.length < 6) {
      return {
        success: false,
        message: 'Kata sandi wajib terdiri atas minimal 6 karakter.'
      };
    }

    if (this.client && !this.connectionFailed) {
      try {
        const { data, error } = await this.client.auth.signUp({
          email: normalizedEmail,
          password,
          options: {
            data: { full_name: cleanName }
          }
        });

        if (error) {
          if (isNetworkFetchError(error)) {
            console.warn('[MultiCloud] Peladen Supabase tidak dapat dijangkau, beralih ke pendaftaran lokal.');
            this.connectionFailed = true;
            return this.registerLocalUser(normalizedEmail, password, cleanName);
          }

          const lowerMsg = (error.message || '').toLowerCase();
          if (lowerMsg.includes('already registered')) {
            return {
              success: false,
              message: 'Alamat surel ini sudah terdaftar. Silakan masuk melalui halaman Masuk.'
            };
          }
          if (lowerMsg.includes('rate limit')) {
            return {
              success: false,
              message: 'Batas pengiriman surel Supabase terlampaui. Nonaktifkan opsi Confirm Email di Supabase Dashboard (Authentication > Providers > Email) agar pendaftaran langsung aktif.'
            };
          }
          if (lowerMsg.includes('password')) {
            return {
              success: false,
              message: 'Kata sandi tidak memenuhi syarat keamanan (minimal 6 karakter).'
            };
          }
          return {
            success: false,
            message: error.message || 'Gagal mendaftarkan akun baru.'
          };
        }

        if (data?.user) {
          try {
            await this.client.from('profiles').insert([{
              auth_user_id: data.user.id,
              email: normalizedEmail,
              full_name: cleanName,
              role: 'user'
            }]);
          } catch (pe) {
            console.warn('Profil sudah ada atau tersimpan otomatis oleh trigger:', pe);
          }
        }

        // Simpan salinan lokal agar tetap konsisten
        const existingUsers = this.getLocalUsers();
        if (!existingUsers.some(u => (u.email || '').toLowerCase() === normalizedEmail)) {
          existingUsers.unshift({
            id: data?.user?.id || ('usr_' + Date.now().toString(36)),
            name: cleanName,
            email: normalizedEmail,
            password,
            role: 'user',
            company: 'Pribadi',
            phone: '',
            joinedDate: new Date().toISOString().slice(0, 10),
            created_at: new Date().toISOString(),
            avatar: buildAvatarInitials(cleanName, normalizedEmail)
          });
          this.saveLocalUsers(existingUsers);
        }

        const needsEmailConfirmation = Boolean(data?.user && !data?.session);
        return {
          success: true,
          needsConfirmation: needsEmailConfirmation,
          user: {
            id: data?.user?.id || ('usr_' + Date.now().toString(36)),
            name: cleanName,
            email: normalizedEmail,
            role: 'user',
            company: 'Pribadi',
            phone: '',
            joinedDate: new Date().toISOString().slice(0, 10),
            avatar: buildAvatarInitials(cleanName, normalizedEmail)
          },
          message: needsEmailConfirmation
            ? 'Pendaftaran berhasil! Tautan konfirmasi telah dikirim ke surel Anda. Silakan buka tautan tersebut sebelum masuk.'
            : 'Pendaftaran berhasil! Akun Anda kini aktif dan siap digunakan.'
        };
      } catch (err) {
        if (isNetworkFetchError(err)) {
          this.connectionFailed = true;
          return this.registerLocalUser(normalizedEmail, password, cleanName);
        }
        return {
          success: false,
          message: 'Terjadi kendala saat registrasi: ' + (err.message || 'Tidak diketahui')
        };
      }
    }

    return this.registerLocalUser(normalizedEmail, password, cleanName);
  }

  async authenticateAdmin(email, password) {
    const normalizedEmail = (email || '').trim().toLowerCase();
    const matchedAdmin = this.getDefaultAdmins().find(
      a => a.email === normalizedEmail && a.passwords.includes(password)
    );

    if (matchedAdmin) {
      const { passwords: _omitted, ...adminUser } = matchedAdmin;

      // Sinkronkan otomatis ke tabel profiles jika Supabase terhubung
      if (this.client && !this.connectionFailed) {
        try {
          await this.client.from('profiles').upsert([{
            email: adminUser.email,
            full_name: adminUser.name,
            role: 'admin',
            company: adminUser.company,
            phone: adminUser.phone
          }], { onConflict: 'email' });
        } catch (e) {
          if (isNetworkFetchError(e)) this.connectionFailed = true;
        }
      }

      return {
        success: true,
        user: adminUser
      };
    }

    if (this.client && !this.connectionFailed) {
      try {
        const { data: authData, error: authError } = await this.client.auth.signInWithPassword({
          email: normalizedEmail,
          password
        });

        if (authError && isNetworkFetchError(authError)) {
          this.connectionFailed = true;
        } else if (!authError && authData?.user) {
          const { data: profile } = await this.client
            .from('profiles')
            .select('*')
            .eq('email', normalizedEmail)
            .single();

          if (profile && profile.role === 'admin') {
            return {
              success: true,
              user: {
                id: profile.id,
                name: profile.full_name,
                email: profile.email,
                role: 'admin',
                company: profile.company || 'MultiCloud Enterprise',
                phone: profile.phone || ''
              }
            };
          }
        }
      } catch (err) {
        if (isNetworkFetchError(err)) this.connectionFailed = true;
        console.warn('[MultiCloud] Otentikasi Supabase bermasalah:', err);
      }
    }

    return {
      success: false,
      message: 'Surel atau kata sandi administrator salah. Silakan coba kembali.'
    };
  }
}

export const supabaseService = new SupabaseService();
