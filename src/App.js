import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import ListTeam from './components/ListTeam';
import data from './Data';

function App() {
  const [team, updateTeam] = useState(data);

  const addNewMember = member => {
    updateTeam([...team, member]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the greatest app of all time!</h1>
        <ListTeam team={team} />
        <Form addNewMember={addNewMember} />
      </header>
    </div>
  );
}

export default App;
