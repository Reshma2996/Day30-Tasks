import React from 'react';
import UserList from './components/UserList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>User Management</h1>
      </header>
      <UserList />
    </div>
  );
}

export default App;
