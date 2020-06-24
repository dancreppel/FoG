import React from 'react';
import { Link } from 'react-router-dom'

const HeaderUser = ({ currentUser, logout }) => (
  currentUser ? (
    <div>
      <h1 className='headerUser'>{currentUser.username}</h1>
      <span className="material-icons">
        arrow_drop_down
        <button className='headerLogout hidden' onClick={logout}>logout</button>
      </span>
    </div>
  ) : (
    <Link to='/login'>login</Link>
  )
);

export default HeaderUser;