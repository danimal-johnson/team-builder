import React from 'react';
import TeamCard from './TeamCard';
import styled from 'styled-components';

const UserBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const ListTeam = props => {

  return (
    <UserBlock>

      {props.team.map( person => {
        return (         
          <TeamCard key={person.name} person={person} />
        );
      })}
      
    </UserBlock>
  )
}

export default ListTeam;