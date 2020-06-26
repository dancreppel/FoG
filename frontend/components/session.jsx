import React from 'react';
import AuthRoute from './routes/auth_route';
import LoginContainer from './session_forms/login_container';
import SignupContainer from './session_forms/signup_container';
import JoinMessage from './session_forms/join_message';

const Session = () => (
  <div className='auth'>
    <AuthRoute path='/login' component={LoginContainer} />
    <AuthRoute path='/login' component={JoinMessage} />
    <AuthRoute path='/signup' component={SignupContainer} />
    <AuthRoute path='/signup' component={JoinMessage} />
  </div>
)

export default Session;