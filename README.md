Nama: Silvester O. Alvin M. A.
Kelas: XI PPLG 2

# *Components dan Fungsinya*
1. Navbar berfungsi sebagai header pada website, Komponen ini digunakan untuk menampilkan menu aplikasi serta menyediakan fitur menu pengguna. Fungsinya adalah membantu pengguna mencari informasi tentang kontak, perusahaan, dan menu beranda.

``` javascript 
import React from 'react';

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

export default Navbar;
```
2. UserCard berfungsi untuk menampilkan informasi setiap pengguna dalam bentuk kartu, Informasi yang ditampilkan adalah nama, username, dan email. Selain itu juga, terdapat tombol Like dan Follow. Fungsinya adalah menampilkan data pengguna pada tampilan pengguna yang menggunakannya.

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
import React, { useEffect, useState } from 'react';
import UserCard from './userCard';

function UsersList() {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

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

    return (
        <div>
            <div style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
                <input
                    type="text"
                    placeholder="Cari berdasarkan nama, username, atau email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <p style={{ margin: '10px 0 0 0', color: '#666' }}>
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
                    <div style={{ width: '100%', textAlign: 'center', padding: '40px', color: '#999' }}>
                        <p>Tidak ada pengguna yang ditemukan</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default UsersList;

```

4. Footer berfungsi sebagai bagian bawah pada website yang tujuannya adalah menampilkan informasi tambahan, seperti nama perusahaan, hak cipta, dan informasi dari perusahaan. Fungsinya adalah memberikan informasi kepada pengguna mengenai informasi tentang perusahaan yang membuat aplikasi atau web tersebut.

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