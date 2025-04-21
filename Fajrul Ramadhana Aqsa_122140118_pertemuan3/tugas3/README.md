# Manajemen Buku Pribadi — Aplikasi Manajemen Buku Pribadi

Manajemen Buku Pribadi adalah aplikasi berbasis React yang digunakan untuk mencatat, mengelola, dan melihat statistik koleksi buku pribadi. Dengan antarmuka yang sederhana dan fitur yang fungsional, pengguna dapat menambahkan, mengedit, mencari, menyaring, dan melihat ringkasan statistik dari buku-buku mereka. Data disimpan secara otomatis di browser melalui `localStorage`.

---

## Fitur Utama

- Tambah buku baru lengkap dengan judul, penulis, dan status (Dimiliki, Sedang Dibaca, atau Ingin Dibeli)
- Edit dan hapus buku dari daftar
- Pencarian buku berdasarkan judul atau penulis
- Filter buku berdasarkan status
- Statistik jumlah buku dan distribusinya
- Menampilkan penulis terbanyak dan daftar buku terbaru
- Data tersimpan otomatis di `localStorage`, tidak hilang saat aplikasi ditutup

---

## Struktur Komponen

### `BookForm`
Formulir untuk menambahkan atau mengedit buku:
- Validasi input: judul dan penulis wajib diisi
- Opsi dropdown untuk status buku
- Menggunakan `useState` dan validasi input manual

### `BookList`
Menampilkan semua buku dalam bentuk daftar:
- Menampilkan berdasarkan hasil filter dan pencarian
- Menyediakan tombol untuk edit dan hapus

### `BookFilter`
Filter berdasarkan status:
- Dropdown pilihan status: Semua, Dimiliki, Sedang Dibaca, Ingin Dibeli
- State global diatur menggunakan Context API

### `Stats`
Menampilkan ringkasan statistik:
- Jumlah total buku
- Jumlah dan persentase berdasarkan status
- Penulis terbanyak
- Daftar 5 buku terbaru

---

## Fitur React yang Digunakan

- **`useState`**: Untuk mengatur state lokal pada form, filter, dan input pencarian
- **`useEffect`**: Sinkronisasi data dengan `localStorage`
- **Context API**: Pengelolaan state global seperti data buku
- **Custom Hooks**:
  - `useBookStorage`: Untuk logika tambah, hapus, dan update data buku
  - `useBookStats`: Untuk menghitung statistik buku
- **React Router**: Navigasi antar halaman (`/` dan `/stats`)
- **PropTypes**: Validasi tipe data props
- **React Testing Library**: Pengujian fungsi dan hook utama

---

## Instalasi dan Menjalankan Proyek

```bash
# Clone repository
git clone https://github.com/fajrulaqsa122140118/pemrograman_web_itera_122140118.git

cd tugas3

# Install dependencies
npm install

# Jalankan aplikasi di local
npm start

```

<br/> 

# Screenshot Antarmuka
## Home

![Screenshot Dashboard](./image/1.png)

<li> menambahkan buku 
<li> melihat filter 
<li> melihat list buku 
<li> menghapus buku

## statistik koleksi buku 

![Screenshot Dashboard](./image/2.png)

<li> melihat total buku
<li> melihat status buku
<li> melihat urutan buku terbaru

<br/>

## Komentar dan Dokumentasi Kode
Kode telah dilengkapi dengan komentar untuk bagian penting, terutama di custom hook dan komponen form. Dokumentasi juga dijelaskan melalui struktur folder dan penamaan yang konsisten.

## Testing
Pengujian dilakukan dengan React Testing Library:

<li> useBookStats.test.js: untuk mengecek logika statistik

<li> useBookStorage.test.js: untuk memverifikasi fungsi tambah, edit, hapus

## Teknologi yang Digunakan

<ul>
  <li>React.js</li>
  <li>React Router</li>
  <li>Context API</li>
  <li>PropTypes</li>
  <li>React Testing Library</li>
</ul>



