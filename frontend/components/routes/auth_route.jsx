import { Route, Redirect } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';

const Auth = ({ path, component: Component, loggedIn, exact }) => (
  <Route 
    path={path}
    exact={exact}
    render={ props => (
      loggedIn ? (
        <Redirect to='/' />
      ) : (
        <Component {...props} />
      )
    )}
  />
);

const MSP = ({ sessionUser }) => ({
  loggedIn: Boolean(sessionUser)
})

const AuthRoute = connect(MSP, null)(Auth);
export default AuthRoute;