import React from 'react';

const Navbar = () => {
return (
    <nav className="navbar">
    <div className="nav-logo">Silver Sosmed</div>
    <ul className="nav-links">
        <li><a href="/">Beranda</a></li>
        <li><a href="/tentang">Tentang Kami</a></li>
        <li><a href="/kontak">Kontak</a></li>
    </ul>
    </nav>
);
};

export default Navbar;