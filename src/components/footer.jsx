import React from 'react'; 

const Footer = () => {
const currentYear = new Date().getFullYear();

return (
    <footer className="footer-container">
    <div className="footer-content">
        <p>&copy; {currentYear} PT SilverStar. Hak Cipta Dilindungi.</p>
        <ul className="footer-links">
        <li><a href="/about">Tentang Kami</a></li>
        <li><a href="/contact">Kontak</a></li>
        <li><a href="/privacy">Kebijakan Privasi</a></li>
        </ul>
    </div>
    </footer>
);
};

export default Footer;