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
