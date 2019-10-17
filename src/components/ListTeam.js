import React from 'react';

const ListTeam = props => {

  return (
    <ul>
      
      {props.team.map( person => {
        return ( <li>{person.name}</li>);
      })}
      
    </ul>
  )

}

export default ListTeam;