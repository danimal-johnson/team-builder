import React, { useState } from 'react';
import styled from 'styled-components';

const FormStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  
  form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid black;

    width: 400px;
    padding: 1rem;
  }

  label {
    font-weight: bold;
  }
  
  input {
    margin: 0 0 1rem 0;
  }

  button:hover {
    cursor: pointer;
    transform: perspective(1px) translateZ(0);
    color: white;
    background-color: #2098D1;
    transition-duration: 0.3s;
  }


`;

const Form = props => {

  const [contents, setContents] =
      useState( {name: "", email: "", role: ""} );
  
  const changeHandler = event => {
    setContents({ ...contents, [event.target.name]: event.target.value });
  };
  const submitForm = event => {
    event.preventDefault();
    props.addNewMember(contents);
    setContents({ name: "", email: "", role: ""});
  }
  return (
    <FormStyle>
      <form onSubmit={submitForm}>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          id="name"
          type="text"
          placeholder="Full Name"
          onChange={changeHandler}
          value={contents.name}
        />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          id="email"
          type="text"
          placeholder="firstname@inittech.com"
          onChange={changeHandler}
          value={contents.email}
        />
        <label htmlFor="role">Role</label>
        <input
          name="role"
          id="role"
          type="text"
          placeholder="Role"
          onChange={changeHandler}
          value={contents.role}
        />
        <button type="submit">Add Member</button>
      </form>
    </FormStyle>
  );
}


export default Form;