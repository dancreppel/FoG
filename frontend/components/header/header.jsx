import React from 'react'
import HeaderUserContainer from './header_user_container';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <Link className='logo' to='/'>F.o.G.</Link>
      <ul className='navItems'>
        <li>Store</li>
        <li>Community</li>
        <li>About</li>
        <li>Support</li>
      </ul>
      <HeaderUserContainer />
    </nav>
  </header>
);

export default Header;