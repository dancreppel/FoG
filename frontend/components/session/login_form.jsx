import React from 'react';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';

const LoginForm = (props) => (
  <div className='loginDiv'>
    <SessionForm {...props} />
    <div className='createDiv'>
      <h1>Create</h1>
      <p>A new free account.</p>
      <p>
        It's free to join and easy to use. Continue on to create your FoG
        account and get FoG, the leading digital solution for PC, Mac, and Linux
        gamers.
      </p>
      <div className='signupDiv'>
        <Link to="/signup">Join FoG</Link>
      </div>
    </div>
  </div>
);

export default LoginForm;