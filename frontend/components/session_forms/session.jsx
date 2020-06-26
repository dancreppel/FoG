import React from 'react';
import AuthRoute from '../routes/auth_route';
import LoginContainer from './login_container';
import SignupContainer from './signup_container';
import JoinMessage from './join_message';

const Session = () => (
  <div className='auth'>
    <AuthRoute path='/login' component={LoginContainer} />
    <AuthRoute path='/login' component={JoinMessage} />
    <AuthRoute path='/signup' component={SignupContainer} />
    <AuthRoute path='/signup' component={JoinMessage} />
  </div>
)

export default Session;