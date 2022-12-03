import React from 'react';
import logo from './logo.svg';
import './App.css';
import DeletableChips from "./components/DeletableChips";

function App() {

  function deleteItem() {
    console.log("TODO delete");
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <DeletableChips name="some names" handleDelete={deleteItem}/>
      </header>
    </div>
  );
}

export default App;
