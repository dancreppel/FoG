import React from 'react';
import { Route } from 'react-router-dom';
import Header from './header/header';
import SessionRoutes from './session/session_routes';
import GamesIndex from './games_index/games_index';

const App = () => (
  <>
    <Header />
    <SessionRoutes />
    <Route path='/' component={GamesIndex} />
  </>
);

export default App;