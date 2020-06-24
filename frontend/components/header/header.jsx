import React from 'react'
import HeaderUserContainer from './header_user_container';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <Link className='logo' to='/'>Fans of Gaming</Link>
      <HeaderUserContainer />
    </nav>
  </header>
);

export default Header;