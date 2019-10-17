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
      <header>
        <h1>Inittech&reg; Team Management System</h1>
        </header>
        <ListTeam team={team} />
        <Form addNewMember={addNewMember} />
    </div>
  );
}

export default App;
