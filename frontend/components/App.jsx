import React from 'react';
import { Route, Link } from 'react-router-dom';
import Header from './header/header';
import SessionRoutes from './session/session_routes';
import GamesIndexContainer from './games_index/games_index_container';
import GameShowContainer from './games_show/games_show_container';
import ProtectedRoute from './routes/protected_route';
import CartContainer from './cart/cart_container';
import LibraryWishlistContainer from './library-wishlist/library_wishlist_container';

const App = () => (
  <>
    <Header />
    <SessionRoutes />
    <Route exact path='/' component={GamesIndexContainer} />
    <Route path='/games/:id' component={GameShowContainer} />
    <ProtectedRoute path='/cart' component={CartContainer} />
    <ProtectedRoute path='/library' component={LibraryWishlistContainer} />
    <ProtectedRoute path='/wishlist' component={LibraryWishlistContainer} />
  </>
);

export default App;