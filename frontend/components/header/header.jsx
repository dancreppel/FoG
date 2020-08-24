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
        <a className="nav-item" href="https://github.com/dancreppel/FoG">Github</a>
        <a className="nav-item" href="https://www.linkedin.com/in/daniel-creppel-7b289318a/">LinkedIn</a>
        {/* <a className="nav-item" href="https://angel.co/u/daniel-creppel">AngelList</a> */}
        <a className="nav-item" href="https://www.dancreppel.com">Personal Site</a>
      </ul>
      <HeaderUserContainer />
    </nav>
  </header>
);

export default Header;