import React from 'react'
import HeaderUserContainer from './header_user_container';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <div className='logo'>
        <div className='logo-picture'></div>
        <Link className='logo-title' to='/'>FoG</Link>
      </div>
      <ul className='navItems'>
        {/* <div>Store
          <ul className='store dropdown'>
            <li>Featured</li>
            <li>Wishlist</li>
            <li>News</li>
            <li>Stats</li>
          </ul>
        </div>
        <div>Community
          <ul className='community dropdown'>
            <li>Home</li>
            <li>Discussions</li>
            <li>Workshop</li>
            <li>Market</li>
            <li>Broadcasts</li>
          </ul>
        </div>
        <li>About</li>
        <li>Support</li> */}
        <li>Github</li>
        <li>LinkedIn</li>
        <li>Resume</li>
      </ul>
      <HeaderUserContainer />
    </nav>
  </header>
);

export default Header;