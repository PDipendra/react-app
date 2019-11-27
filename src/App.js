import React from 'react';
import './App.css';
import DataFetching from './components/DataFetching';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to React World
        </p>
        <DataFetching />
      </header>
    </div>
  );
}

export default App;
