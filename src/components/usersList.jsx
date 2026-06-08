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
