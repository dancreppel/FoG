import React from 'react';
import { Route } from 'react-router-dom';
import Header from './header/header';
import SessionRoutes from './session/session_routes';
import GamesIndex from './games_index/games_index';

// Todo test slider
import Slider from './slider/slider';

const App = () => (
  <>
    <Header />
    <SessionRoutes />
    {/* <Route exact path='/' component={GamesIndex} /> */}
    <Slider />
  </>
);

export default App;