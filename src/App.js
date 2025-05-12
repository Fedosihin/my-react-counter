import React, { useState } from 'react';
import './App.css';

function App() {

  const [state, setState] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Счетчик: {state}</h1>
        <button onClick={()=>setState(state + 1)}>Добавить</button>
        <button onClick={()=>setState(state - 1)}>Уменьшить</button>
      </header>
    </div>
  );
}

// lol

export default App;