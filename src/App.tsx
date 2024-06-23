import React from 'react';
import './App.css';
import Login from './components/Login';

function App() {
  const a: number = 2
  const b: number = 4
  return (
    <div className="App">
      <Login/>
        <ul>
          <li>list item one</li>
          <li>list item two</li>
          <li>list item three</li>
        </ul>
        <h1 data-testid="mytestid">Hello</h1>
        <span title="sum">{a + b}</span>
    </div>
  );
}

export default App;
