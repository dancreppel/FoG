import React from 'react';
import { Route } from 'react-router-dom';
import Header from './header/header';
import LoginContainer from './session_forms/login_container';
import SignupContainer from './session_forms/signup_container';

const App = () => (
  <>
    <Header />

    <Route path='/login' component={LoginContainer} />
    <Route path='/signup'component={SignupContainer} />
  </>
);

export default App;