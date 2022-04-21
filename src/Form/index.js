import React from 'react';
import { createPassword } from "../passwordGenerators/createPassword";

export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="website">Website Adress</label>
        <input
          type="website"
          className="form-control"
          id="website"
          placeholder="https://www.google.com"
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Username</label>
        <input 
        className="form-control" 
        id="name"
        placeholder="johndoe@email.com"
        />
      </div>
      <div className="form-group">
        <label htmlFor="pwd">Password</label>
        <input type="password"
          className="form-control"
          id="pwd"
	  name="pwd"
          placeholder="***************"
	  defaultValue={createPassword(15, true, true, true)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="otherNotes" style = {{display: "block"}}>Other Notes</label>
        <textarea
          className="form-control"
          id="otherNotes"
          placeholder="Hi there, These are my notes"
        />
      </div>
      <div className="form-group">
        <button class="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
