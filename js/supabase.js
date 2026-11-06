/**
 * MultiCloud - Konfigurasi & Klien Basis Data Supabase
 * Mendukung koneksi langsung ke Supabase PostgreSQL via Supabase JS SDK.
 * Aman dijalankan di seluruh lingkungan peramban dan server Laragon.
 */

const CONFIG_KEY_URL = 'multicloud_supabase_url';
const CONFIG_KEY_ANON = 'multicloud_supabase_anon_key';

const DEFAULT_URL = 'https://hzamkkknabduqmdivcqd.supabase.co';
const DEFAULT_ANON_KEY = 'sb_publishable_4iMAn_pkRlm1m6uN7eAX5w_ab20R6w5';

class SupabaseService {
  constructor() {
    this.client = null;
    this.initClient();
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
      url: url || DEFAULT_URL,
      anonKey: anonKey || DEFAULT_ANON_KEY
    };
  }

  saveConfig(url, anonKey) {
    if (typeof localStorage !== 'undefined') {
      try {
        if (url) localStorage.setItem(CONFIG_KEY_URL, url.trim());
        if (anonKey) localStorage.setItem(CONFIG_KEY_ANON, anonKey.trim());
      } catch (e) {
        console.error('Gagal menyimpan konfigurasi ke localStorage:', e);
      }
    }
    this.initClient();
  }

  isConfigured() {
    const { url, anonKey } = this.getConfig();
    return url && !url.includes('YOUR_PROJECT_ID') && anonKey && !anonKey.includes('YOUR_SUPABASE_ANON_KEY');
  }

  async initClient() {
    const { url, anonKey } = this.getConfig();
    if (this.isConfigured() && typeof window !== 'undefined') {
      try {
        const { createClient } = await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm');
        this.client = createClient(url, anonKey);
        console.log('[MultiCloud] Terhubung ke basis data Supabase:', url);
      } catch (err) {
        console.warn('[MultiCloud] Gagal menginisialisasi klien Supabase:', err);
        this.client = null;
      }
    } else {
      this.client = null;
    }
  }

  /**
   * Mengambil daftar profil pelanggan terdaftar dari Supabase
   */
  async getCustomers() {
    if (this.client) {
      try {
        const { data, error } = await this.client
          .from('profiles')
          .select('*')
          .order('created_at', { ascending: false });

        if (!error && data) {
          return data;
        }
      } catch (e) {
        console.warn('[MultiCloud] Gagal mengambil data profiles dari Supabase:', e);
      }
    }
    return null;
  }

  /**
   * Mengambil daftar produk dari basis data Supabase
   */
  async getProducts() {
    if (this.client) {
      try {
        const { data, error } = await this.client
          .from('products')
          .select('*')
          .order('created_at', { ascending: false });

        if (!error && data && data.length > 0) {
          return data;
        }
      } catch (e) {
        console.warn('[MultiCloud] Gagal mengambil data products dari Supabase:', e);
      }
    }
    return null;
  }

  /**
   * Mengambil daftar transaksi dari Supabase
   */
  async getTransactions() {
    if (this.client) {
      try {
        const { data, error } = await this.client
          .from('transactions')
          .select('*')
          .order('created_at', { ascending: false });

        if (!error && data) {
          return data;
        }
      } catch (e) {
        console.warn('[MultiCloud] Gagal mengambil transaksi dari Supabase:', e);
      }
    }
    return null;
  }

  async getOrders() {
    if (this.client) {
      try {
        const { data, error } = await this.client
          .from('orders')
          .select('*')
          .order('created_at', { ascending: false });
        if (!error && data && data.length > 0) {
          return data.map(item => ({
            id: item.id,
            invoiceNumber: item.invoice_number,
            itemTitle: item.item_title,
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
        console.warn('[MultiCloud] Terjadi kendala saat membaca tabel orders di Supabase:', e);
      }
    }
    return null;
  }

  async createOrder(order) {
    if (this.client) {
      try {
        const payload = {
          id: order.id,
          invoice_number: order.invoiceNumber,
          user_email: order.userEmail || 'pelanggan@multicloud.id',
          user_name: order.userName || 'Pelanggan Terverifikasi',
          user_phone: order.userPhone || '+62 812-0000-0000',
          item_title: order.itemTitle,
          package_name: order.package,
          amount: order.amount,
          payment_method: order.paymentMethod,
          status: order.status,
          license_key: order.licenseKey || 'Sedang diverifikasi'
        };

        const { data, error } = await this.client
          .from('orders')
          .insert([payload])
          .select();

        if (error) {
          console.error('[MultiCloud] Galat simpan pesanan Supabase:', error);
        } else {
          console.log('[MultiCloud] Pesanan berhasil disimpan ke Supabase:', data);
        }
      } catch (e) {
        console.warn('[MultiCloud] Eksepsi saat menyimpan pesanan ke Supabase:', e);
      }
    }
  }

  async updateOrderStatus(orderId, status, licenseKey) {
    if (this.client) {
      try {
        const updateData = { status, updated_at: new Date().toISOString() };
        if (licenseKey) updateData.license_key = licenseKey;

        const { error } = await this.client
          .from('orders')
          .update(updateData)
          .eq('id', orderId);

        if (error) {
          console.error('[MultiCloud] Gagal memperbarui status pesanan di Supabase:', error);
        } else {
          console.log('[MultiCloud] Status pesanan berhasil diperbarui di Supabase:', orderId);
        }
      } catch (e) {
        console.warn('[MultiCloud] Kendala saat update pesanan di Supabase:', e);
      }
    }
  }

  /**
   * Otentikasi Masuk Pengguna Biasa
   */
  async authenticateUser(email, password) {
    if (this.client) {
      try {
        const { data, error } = await this.client.auth.signInWithPassword({
          email,
          password
        });

        if (error) {
          // Periksa apakah kendala karena surel belum dikonfirmasi
          if (error.message && error.message.toLowerCase().includes('email not confirmed')) {
            return {
              success: false,
              message: 'Alamat surel belum dikonfirmasi. Periksa kotak masuk/spam surel Anda, atau matikan "Confirm email" di pengaturan Supabase Auth.'
            };
          }
          return {
            success: false,
            message: error.message === 'Invalid login credentials' 
              ? 'Alamat surel atau kata sandi salah. Pastikan Anda sudah mendaftar dan mengonfirmasi surel.'
              : (error.message || 'Gagal masuk akun.')
          };
        }

        if (data && data.user) {
          const { data: profile } = await this.client
            .from('profiles')
            .select('*')
            .eq('email', email)
            .single();

          return {
            success: true,
            user: {
              id: data.user.id,
              name: profile?.full_name || data.user.user_metadata?.full_name || email.split('@')[0],
              email: data.user.email,
              role: profile?.role || 'user',
              company: profile?.company || 'Pribadi',
              phone: profile?.phone || '',
              joinedDate: data.user.created_at?.slice(0, 10) || new Date().toISOString().slice(0, 10),
              avatar: 'US'
            }
          };
        }
      } catch (err) {
        console.warn('[MultiCloud] Eksepsi otentikasi Supabase:', err);
      }
    }

    // Akun demo jika Supabase offline
    if (email === 'ahmad.fauzan@devstudio.id' && password === 'demo12345') {
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
      message: 'Akun tidak ditemukan atau kata sandi tidak cocok.'
    };
  }

  /**
   * Registrasi Pengguna Baru
   */
  async registerUser(email, password, fullName) {
    if (this.client) {
      try {
        const { data, error } = await this.client.auth.signUp({
          email,
          password,
          options: {
            data: { full_name: fullName }
          }
        });

        if (error) {
          if (error.message && error.message.toLowerCase().includes('rate limit')) {
            return {
              success: false,
              message: 'Batas pengiriman surel Supabase terlampaui. Silakan matikan "Confirm email" di Supabase Dashboard (Authentication > Providers > Email) agar pendaftaran bisa langsung aktif tanpa verifikasi surel.'
            };
          }
          return {
            success: false,
            message: error.message || 'Gagal mendaftarkan akun baru.'
          };
        }

        // Simpan data profil ke tabel profiles
        if (data.user) {
          try {
            await this.client.from('profiles').insert([{
              auth_user_id: data.user.id,
              email: email,
              full_name: fullName,
              role: 'user'
            }]);
          } catch (pe) {
            console.warn('Profil sudah ada atau tersimpan otomatis:', pe);
          }
        }

        // Cek apakah akun memerlukan konfirmasi email
        const needsEmailConfirmation = data.user && (!data.session);

        return {
          success: true,
          needsConfirmation: needsEmailConfirmation,
          user: data.user,
          message: needsEmailConfirmation 
            ? 'Pendaftaran berhasil! Tautan konfirmasi telah dikirim ke surel Anda. Harap klik tautan verifikasi di surel sebelum masuk (atau matikan "Confirm email" di Supabase).'
            : 'Pendaftaran berhasil! Akun Anda aktif dan siap digunakan.'
        };
      } catch (err) {
        return {
          success: false,
          message: 'Terjadi kendala saat registrasi ke Supabase: ' + err.message
        };
      }
    }

    return {
      success: true,
      message: 'Pendaftaran lokal berhasil disimulasikan.'
    };
  }

  async authenticateAdmin(email, password) {
    // 1. Validasi kredensial lokal bawaan
    const isDefaultAdmin = (email === 'admin@multicloud.id' && password === 'admin12345') ||
                           (email === 'admin@multicloud.id' && password === 'admin');
    
    if (isDefaultAdmin) {
      return {
        success: true,
        user: {
          id: 'adm_001',
          name: 'Administrator MultiCloud',
          email: 'admin@multicloud.id',
          role: 'admin',
          company: 'Kantor Pusat MultiCloud',
          phone: '+62 812-9876-5432'
        }
      };
    }

    // 2. Jika Supabase terhubung, verifikasi dari Supabase Auth
    if (this.client) {
      try {
        const { data: authData, error: authError } = await this.client.auth.signInWithPassword({
          email,
          password
        });

        if (!authError && authData.user) {
          const { data: profile } = await this.client
            .from('profiles')
            .select('*')
            .eq('email', email)
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
        console.warn('[MultiCloud] Otentikasi Supabase bermasalah, memeriksa kredensial lokal:', err);
      }
    }

    return {
      success: false,
      message: 'Surel atau kata sandi administrator salah. Silakan coba kembali.'
    };
  }
}

export const supabaseService = new SupabaseService();
