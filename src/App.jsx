import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Project 1: React Tanpa API</h1>
      <p>aplikasi counter sederhana menggunakan useState.</p>
      <h2>Angka: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Tambah (+)</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>Kurang (-)</button>
    </div>
  );
}

export default App;