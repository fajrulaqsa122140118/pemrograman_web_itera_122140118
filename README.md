Personal Dashboard - Jadwal Kuliah
Aplikasi Personal Dashboard ini dirancang untuk membantu pengguna dalam mengelola jadwal kuliah mereka secara interaktif. Pengguna dapat menambah, mengedit, atau menghapus jadwal kuliah mereka dengan mudah. Aplikasi ini menggunakan penyimpanan lokal (localStorage) untuk menyimpan data sehingga data tetap ada meskipun aplikasi ditutup dan dibuka kembali.

Fitur-fitur
- Menambah Jadwal Kuliah: Pengguna dapat menambahkan jadwal kuliah dengan memilih hari dan waktu.
- Mengedit Jadwal Kuliah: Pengguna dapat mengedit jadwal kuliah yang sudah ada.
- Menghapus Jadwal Kuliah: Pengguna dapat menghapus jadwal kuliah yang tidak diperlukan lagi.
- Penyimpanan Lokal: Semua data jadwal kuliah disimpan secara lokal menggunakan localStorage, jadi data tetap ada meskipun aplikasi ditutup.
- Tampilan Interaktif: Setiap perubahan (menambah, mengedit, menghapus) langsung terlihat di tampilan aplikasi.

Screenshot
![Screenshot 2025-04-13 195723](https://github.com/user-attachments/assets/1b3217fe-c090-4a66-a1e4-9496620fd17a)


Daftar Fitur ES6+ yang Diimplementasikan
- Penggunaan let dan const: Variabel dideklarasikan menggunakan let dan const sesuai dengan kebutuhan.
- Arrow Functions: Tiga atau lebih arrow functions telah diimplementasikan, seperti pada addSubject, editSubject, dan hapusJadwal.
- Template Literals: Menggunakan template literals untuk rendering HTML dinamis, seperti saat menampilkan daftar jadwal kuliah pada tampilan pengguna.
- Fungsi Asinkron (Async/Await): Menggunakan async/await untuk mengambil dan menyimpan data dari dan ke localStorage secara asinkron.
- Classes: Kelas Subject digunakan untuk merepresentasikan sebuah objek jadwal kuliah, dengan properti name dan schedule.
