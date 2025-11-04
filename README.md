
# 📚 Katalog Buku App
Aplikasi sederhana berbasis **HTML, CSS, dan JavaScript** untuk menampilkan katalog buku, melakukan login, dan melacak pesanan (tracking pengiriman).  
Didesain untuk latihan dasar pemrograman web dan pengelolaan data menggunakan **localStorage**.

---

## 🧩 Fitur Utama
✅ **Login Multi-User**  
Terdapat dua jenis pengguna:  
- **User** (Rina Wulandari, Agus Pranoto)  
- **Admin** (Siti Marlina)

✅ **Dashboard / Menu Utama**  
Menampilkan daftar katalog buku dengan detail kode, nama, jenis, edisi, harga, dan stok.

✅ **Tracking Pesanan**  
Pengguna dapat melacak pesanan berdasarkan **Nomor DO (Delivery Order)** untuk melihat status dan riwayat pengiriman.

✅ **Logout**  
Fitur untuk keluar dari akun dan menghapus data pengguna aktif.

✅ **Data Dummy Otomatis**  
Semua data pengguna, buku, dan pengiriman disimpan di `js/data.js` sehingga tidak perlu koneksi database.

---

## 📂 Struktur Folder

```
KatalogBukuApp/
│
├── index.html          ← Halaman Login
├── dashboard.html      ← Halaman Menu Utama / Katalog Buku
├── tracking.html       ← Halaman Tracking Pesanan
│
├── css/
│   └── style.css       ← File gaya tampilan (Bootstrap + custom)
│
├── js/
│   ├── data.js         ← Berisi data pengguna, katalog buku, dan tracking
│   └── script.js       ← Berisi logika login, logout, katalog, dan tracking
│
└── README.md
```

---

## 🚀 Cara Menjalankan di Visual Studio Code

1. **Buka folder proyek**
   - Jalankan VS Code → Klik **File → Open Folder...** → pilih folder `KatalogBukuApp`.

2. **Buka file `index.html`**
   - Klik kanan → pilih **"Open with Live Server"** (jika sudah menginstal ekstensi Live Server).  
   - Atau cukup buka file `index.html` dengan browser (Chrome / Edge / Firefox).

3. **Login menggunakan data berikut:**
   | Nama | Email | Password | Role |
   |------|--------|-----------|------|
   | Rina Wulandari | rina@gmail.com | rina123 | User |
   | Agus Pranoto | agus@gmail.com | agus123 | User |
   | Siti Marlina | siti@gmail.com | siti123 | Admin |

4. Setelah login berhasil, kamu akan diarahkan ke halaman **Dashboard (Katalog Buku)**.  
   - Kamu bisa melihat daftar buku dengan gambar, nama, harga, dan stok.
   - Untuk melacak pesanan, buka file `tracking.html`.

5. **Tracking Pesanan:**
   - Buka `tracking.html` di browser.
   - Masukkan nomor DO yang tersedia, misalnya:
     - `20230012` → pesanan milik Rina
     - `20230013` → pesanan milik Agus

---

## 📦 Data Dummy

### 🧑 Data Pengguna
Disimpan dalam `js/data.js`:
```js
const dataPengguna = [
  { id: 1, nama: "Rina Wulandari", email: "rina@gmail.com", password: "rina123", role: "User" },
  { id: 2, nama: "Agus Pranoto", email: "agus@gmail.com", password: "agus123", role: "User" },
  { id: 3, nama: "Siti Marlina", email: "siti@gmail.com", password: "siti123", role: "Admin" }
];
```

### 📘 Data Buku
Berisi 5 contoh buku:
- Pengantar Komunikasi  
- Manajemen Keuangan  
- Kepemimpinan Modern  
- Mikrobiologi Dasar  
- Psikologi Pendidikan PAUD  

### 🚚 Data Tracking
Berisi 2 contoh riwayat pengiriman:
- Nomor DO **20230012** → milik Rina  
- Nomor DO **20230013** → milik Agus  

---

## 🎨 Tampilan Aplikasi
1. **Login Page**  
   Pengguna memasukkan email dan password untuk mengakses aplikasi.

2. **Dashboard / Katalog Buku**  
   Menampilkan kartu (card) tiap buku lengkap dengan gambar, harga, stok, dan informasi dasar.

3. **Tracking Pesanan**  
   Pengguna memasukkan nomor DO untuk melihat status pengiriman dan riwayat perjalanan paket.

---

## ⚙️ Teknologi yang Digunakan
- **HTML5** → Struktur halaman  
- **CSS3** + **Bootstrap 5** → Desain antarmuka  
- **JavaScript (Vanilla)** → Logika login, katalog, dan tracking  
- **LocalStorage** → Menyimpan data pengguna aktif tanpa database  

---

## 👩‍💻 Author
**Nama:** _Nurul Fadilah_  
**Project:** _Aplikasi Katalog Buku & Tracking Pesanan_  
**Mata Kuliah:** _Pemrograman Web Dasar_  
**Dosen Pengampu:** _[Isi sesuai dosen kamu]_  
**Tahun:** 2025  

---

## 📝 Catatan
- Pastikan semua file (`data.js`, `script.js`, `style.css`) sudah dipanggil di setiap halaman.
- Jika gambar tidak muncul, periksa URL gambar (atau gunakan folder `img` lokal).
- Untuk memulai ulang login, hapus data di localStorage melalui **Inspect → Application → Local Storage → Clear**.
