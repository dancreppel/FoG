import React from 'react';
import AuthRoute from './routes/auth_route';
import { Route } from 'react-router-dom';
import Header from './header/header';
import LoginContainer from './session_forms/login_container';
import SignupContainer from './session_forms/signup_container';
import JoinMessage from './session_forms/join_message';

const App = () => (
  <>
    <Header />

    <div className='auth'>
      <AuthRoute path='/login' component={LoginContainer} />
      <AuthRoute path='/signup'component={SignupContainer} />
      <JoinMessage />
    </div>
  </>
);

export default App;