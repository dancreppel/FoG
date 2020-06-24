import React from 'react';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';

const LoginForm = props => (
  <>
    <SessionForm {...props} />
    <div>
      <Link to='/signup'>Join FoG</Link>
    </div>
  </>
);

export default LoginForm;