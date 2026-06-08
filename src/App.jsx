import React from 'react';
import Navbar from './components/navbar';
import UserCard from './components/userCard';
import UsersList from './components/usersList';

function App() {
return (
    <div className="App">
    <Navbar />
    <div style={{ padding: '2rem' }}>
    <UsersList />
    </div>
    </div>
);
}

export default App;