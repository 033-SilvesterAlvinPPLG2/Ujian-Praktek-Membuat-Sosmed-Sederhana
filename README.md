Nama: Silvester O. Alvin M. A.
Kelas: XI PPLG 2

# *Components dan Fungsinya*
Navbar berfungsi sebagai bagian atas (header) pada website, Komponen ini digunakan untuk menampilkan identitas aplikasi serta menyediakan fitur pencarian pengguna. Fungsinya adalah membantu pengguna mencari dan menyaring data pengguna berdasarkan kata kunci yang dimasukkan pada kolom pencarian, sehingga data yang dicari dapat ditemukan dengan lebih mudah dan cepat.

``` import React from 'react';

const Navbar = () => {
return (
    <nav className="navbar">
    <div className="logo">Silver Sosmed</div>
    <ul className="nav-links">
        <li><a href="/">Beranda</a></li>
        <li><a href="/tentang">Tentang Kami</a></li>
        <li><a href="/kontak">Kontak</a></li>
    </ul>
    </nav>
);
};

export default Navbar; ```