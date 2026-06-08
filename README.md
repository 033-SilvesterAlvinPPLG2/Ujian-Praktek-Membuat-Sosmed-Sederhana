Nama: Silvester O. Alvin M. A.
Kelas: XI PPLG 2

# *Components dan Fungsinya*
1. Navbar berfungsi sebagai header pada website, Komponen ini digunakan untuk menampilkan menu aplikasi serta menyediakan fitur menu untuk pengguna. Fungsinya adalah membantu pengguna mencari informasi tentang kontak, perusahaan, menu beranda dan pengaturan terang/gelap.

``` javascript 
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
```
2. UserCard berfungsi untuk menampilkan informasi setiap pengguna dalam bentuk kartu, Informasi yang ditampilkan adalah nama, username, email dan terdapat tombol Like dan Follow. Fungsinya adalah menampilkan data pengguna pada tampilan pengguna yang menggunakannya.

``` javascript
import React, { useEffect, useState } from 'react';

function UserCard (props) {
    const [isLiked, setIsLiked] = useState(false);
    const [isFollowed, setIsFollowed] = useState(false);

    const handleLike = () => {
        setIsLiked(!isLiked);
    };

    const handleFollow = () => {
        setIsFollowed(!isFollowed);
    };

return (
    <div className="card">
    <img className="avatar" src={props.avatar} alt={props.name} />
    <h2 className="name">{props.name}</h2>
    <p className="role">{props.role}</p>
    <p className="bio">{props.bio}</p>
    <div className="button-group">
        <button 
            className={`button like-button ${isLiked ? 'liked' : ''}`}
            onClick={handleLike}
        >
            {isLiked ? '❤️ Liked' : '🤍 Like'}
        </button>
        <button 
            className={`button follow-button ${isFollowed ? 'followed' : ''}`}
            onClick={handleFollow}
        >
            {isFollowed ? '✓ Following' : '+ Follow'}
        </button>
    </div>
    </div>
);
}

export default UserCard;
```
3. UserList berfungsi untuk memberikan dan mencari list biodata pengguna yang terdapat pada API agar bisa ditampilkan dengan mudah dan cepat (agar bisa menampilkan data pada API)

``` javascript
import React, { useEffect, useState, useRef, useContext } from 'react';
import UserCard from './userCard';
import { ThemeContext } from '../context/ThemeContext';

function UsersList() {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchInputRef = useRef(null);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => console.error(err));
    }, []);

    const filteredUsers = users.filter((u) =>
        u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleClearSearch = () => {
        setSearchTerm('');
        if (searchInputRef.current) {
            searchInputRef.current.focus();
        }
    };

    const handleFocusSearch = () => {
        if (searchInputRef.current) {
            searchInputRef.current.focus();
        }
    };

    return (
        <div>
            <div style={{ padding: '20px', backgroundColor: theme === 'dark' ? '#222' : '#f9f9f9' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <input
                        ref={searchInputRef}
                        type="text"
                        placeholder="Cari berdasarkan nama, username, atau email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={`search-input ${theme === 'dark' ? 'search-input-dark' : ''}`}
                    />
                    {searchTerm && (
                        <button 
                            onClick={handleClearSearch}
                            className="clear-button"
                            title="Bersihkan pencarian"
                        >
                            ✕
                        </button>
                    )}
                </div>
                <p style={{ margin: '10px 0 0 0', color: theme === 'dark' ? '#aaa' : '#666' }}>
                    Ditemukan {filteredUsers.length} pengguna
                </p>
            </div>
            <div style={{ display: 'flex', padding: '20px', gap: '12px', flexWrap: 'wrap' }}>
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((u) => (
                        <UserCard
                            key={u.id}
                            avatar={`https://i.pravatar.cc/150?u=${u.id}`}
                            name={u.name}
                            role={u.username}
                            bio={u.email}
                        />
                    ))
                ) : (
                    <div style={{ width: '100%', textAlign: 'center', padding: '40px', color: theme === 'dark' ? '#666' : '#999' }}>
                        <p>Tidak ada pengguna yang ditemukan</p>
                        <button 
                            onClick={handleClearSearch}
                            style={{
                                padding: '8px 16px',
                                backgroundColor: '#007bff',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}
                        >
                            Bersihkan Pencarian
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default UsersList;
```

4. Footer berfungsi sebagai bagian bawah pada website yang tujuannya adalah menampilkan informasi tambahan, seperti nama perusahaan, hak cipta, dan informasi tambahan dari perusahaan. Fungsinya adalah memberikan informasi kepada pengguna mengenai informasi tentang perusahaan yang membuat aplikasi atau web tersebut.

``` javascript
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
```
# *Penjelasan Fetch API*
Fetch API digunakan untuk mengambil atau mengirim data ke server, Biasanya untuk mengambil data dari API.

``` javascript
useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((err) => console.error(err));
}, []);
```
# *Penggunaan React Hook Menggunakan useState, useEffect, useContext, dan useRef*
1. useState adalah React hook yang digunakan untuk merubah data di dalam sebuah komponen

``` javascript
const [isLiked, setIsLiked] = useState(false);
const [isFollowed, setIsFollowed] = useState(false);
```
untuk merubah data belum like menjadi like dan merubah belum mengikuti menjadi pengikut

``` javascript
const [users, setUsers] = useState([]);
const [searchTerm, setSearchTerm] = useState('');
```
untuk mendata setiap pengguna dan mencari data pengguna

``` javascript
const [theme, setTheme] = useState('light');
```
untuk mengatur terang/gelap website

2. useEffect adalah React hook yang digunakan untuk memberikan side effect atau efek samping ke dalam komponen kita

``` javascript
useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((err) => console.error(err));
}, []);
```
mengambil data dari API setelah komponen dirender.

3. useContect adalah React hook yang digunakan untuk Mengirim data langsung ke komponen yang ada di dalam tanpa harus melewati komponen perantara (berguna untuk membagikan data ke banyak komponen tanpa ribet)

``` javascript
const { theme } = useContext(ThemeContext); // pada file usersList.jsx
const { theme, toggleTheme } = useContext(ThemeContext); // pada file navbar.jsx
```
untuk mengatur tema gelap/terang (dark mode/linght mode)

4. useRef adalah React hook yang digunakan untuk menyimpan data rahasia atau mengambil elemen layar tanpa membuat layar menyala ulang (re-render). Kegunaan: Menyimpan data yang bisa berubah-ubah, atau mengontrol elemen HTML secara langsung.

```javascript
const searchInputRef = useRef(null);
```
untuk direct access ke input element