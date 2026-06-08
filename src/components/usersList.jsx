import React, { useEffect, useState } from 'react';
import UserCard from './userCard';

function UsersList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div style={{ display: 'flex', padding: '20px', gap: '12px', flexWrap: 'wrap' }}>
            {users.map((u) => (
                <UserCard
                    key={u.id}
                    avatar={`https://i.pravatar.cc/150?u=${u.id}`}
                    name={u.name}
                    role={u.username}
                    bio={u.email}
                />
            ))}
        </div>
    );
}

export default UsersList;
