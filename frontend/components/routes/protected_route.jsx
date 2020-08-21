import { Route, Redirect } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';

const Protected = ({ path, component: Component, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props => (
      loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    )}
  />
);

const MSP = ({ sessionUser }) => ({
  loggedIn: Boolean(sessionUser)
});

const ProtectedRoute = connect(MSP, null)(Protected);
export default ProtectedRoute;