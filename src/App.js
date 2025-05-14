import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState(() => {
    const savedState = +localStorage.getItem("state"); 
    const parsedState = Number(savedState);
    return isNaN(parsedState) ? 0 : parsedState;
  });

  useEffect(() => {
    localStorage.setItem("state", state);
  }, [state]);

  function getRandomCyrillicText() {
    const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    const length = Math.floor(Math.random() * (10 - 3 + 1)) + 3; // число от 3 до 10
    let result = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      result += alphabet[randomIndex];
    }
  
    return result;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Счетчик: {state}</h1>
        <button onClick={() => setState(0)}>Cбросить</button>
        <button onClick={() => setState(() => getRandomCyrillicText())}>Сломать</button>
        <br></br>
        <br></br>
        <button onClick={() => setState(prev => (isNaN(prev) ? 0 : (prev + 1)))}>Добавить</button>
        <button onClick={() => setState(prev => (isNaN(prev) ? 0 : (prev - 1)))}>Уменьшить</button>
      </header>
    </div>
  );
}

// lol

export default App;
