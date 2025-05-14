import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState(() => {
    return localStorage.getItem("state") || 0;
  });

  useEffect(() => {
    localStorage.setItem("state", state);
  }, [state]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Счетчик: {state}</h1>
        <button onClick={() => setState(state + 1)}>Добавить</button>
        <button onClick={() => setState(state - 1)}>Уменьшить</button>
      </header>
    </div>
  );
}

// lol

export default App;
