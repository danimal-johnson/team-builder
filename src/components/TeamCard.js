import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;

  width: 200px;
  max-width: 200px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  margin: 1rem;

  h3 {
    line-spacing: 1;
    color: red;
    margin-bottom: 0;
  }

  h4 {
    line-spacing: 1;
    color: #2098D1;
    margin-top:0;
    margin-bottom: 0;
  }

`;

const TeamCard = props => {
  return (
    <CardStyle>
      <h3>{props.person.name}</h3>
      <h4>{props.person.role}</h4>
      <p>{props.person.email}</p>
    </CardStyle>
  )
}

export default TeamCard;