import React from 'react';
import './App.css';
import Snakegame from './SnakeGame/Snakegame'
import Counter from "./SnakeGame/component/counter/Counter";

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <Counter/>
        </header>
        <div className="App-body">
        <Snakegame />
        </div>
    </div>
  );
}

export default App;
