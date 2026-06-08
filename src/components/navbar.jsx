import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className={`navbar ${theme === 'dark' ? 'navbar-dark' : ''}`}>
            <div className="nav-logo">Silver Sosmed</div>
            <ul className="nav-links">
                <li><a href="/">Beranda</a></li>
                <li><a href="/tentang">Tentang Kami</a></li>
                <li><a href="/kontak">Kontak</a></li>
            </ul>
            <button onClick={toggleTheme} className="theme-toggle">
                {theme === 'light' ? '🌙' : '☀️'}
            </button>
        </nav>
    );
};

export default Navbar;