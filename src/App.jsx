import React from 'react';
import Navbar from './components/navbar';
import UserCard from './components/userCard';
import UsersList from './components/usersList';
import Footer from './components/footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
return (
    <ThemeProvider>
    <div className="App">
    <Navbar />
    <div style={{ padding: '2rem' }}>
    <UsersList />
    </div>
    <div className="app-container">
    <Footer />
    </div>
    </div>
    </ThemeProvider>
);
}

export default App;