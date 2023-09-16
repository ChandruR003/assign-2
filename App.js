import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>React Counter App</h1>
      <p>Count: {count}</p>
      <div className="buttons">
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
