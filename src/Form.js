import React, { useState } from 'react';

const Form = props => {

  const [contents, setContents] =
      useState( {name: "", email: "", role: ""} );
  
  const changeHandler = event => {
    setContents({ ...contents, [event.target.name]: event.target.value });
    console.log(event.target.value);
  };
  const submitForm = event => {
    event.preventDefault();
    props.addNewMember(contents);
    alert("Adding new member " + contents.name);
  }
  return (
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
      <button type="submit">Add User</button>
    </form>
  );
}


export default Form;