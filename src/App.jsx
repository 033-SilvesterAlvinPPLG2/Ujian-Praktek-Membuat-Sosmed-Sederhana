import React from 'react';
import Navbar from './components/navbar';

function App() {
return (
    <div className="App">
    <Navbar />
    <div style={{ padding: '2rem' }}>
        <h1>Halaman Utama</h1>
        <p>Konten website Anda akan berada di sini.</p>
    </div>
    </div>
);
}


export default App;