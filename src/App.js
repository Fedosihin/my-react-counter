import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Счетчик: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Добавить</button>
        <button onClick={() => setCount(count - 1)}>Уменьшить</button>
      </header>
    </div>
  );
}

// lol

export default App;