import React from 'react';
import { Route, Link } from 'react-router-dom';
import Header from './header/header';
import SessionRoutes from './session/session_routes';
import GamesIndex from './games_index/games_index';
import GameShowContainer from './games_show/games_show_container';

// Todo test slider
import Slider from './slider/slider';

const App = () => (
  <>
    <Header />
    <SessionRoutes />
    {/* <Route exact path='/' component={GamesIndex} /> */}
    <Route exact path='/' render={() => (
      <Link className='test-show' to='/games/1'>Test Show Page</Link>
    )} />
    <Route path='/games/:id' component={GameShowContainer} />
  </>
);

export default App;