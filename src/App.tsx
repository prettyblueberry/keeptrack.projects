import React from 'react';
import './App.css';
import Hello from "./Hello";

function App() {
  return (
    <div className="App">
      <Hello  name="David" enthusiasmLevel={2}/>
    </div>
  );
}

export default App;
