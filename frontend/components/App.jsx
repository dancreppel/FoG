import React from 'react';
import AuthRoute from './routes/auth_route';
import { Route } from 'react-router-dom';
import Header from './header/header';
import LoginContainer from './session_forms/login_container';
import SignupContainer from './session_forms/signup_container';

const App = () => (
  <>
    <Header />

    <AuthRoute path='/login' component={LoginContainer} />
    <AuthRoute path='/signup'component={SignupContainer} />
  </>
);

export default App;