import React from 'react';
import { Link } from 'react-router-dom'

const HeaderUser = ({ currentUser, logout }) => (
  currentUser ? (
    <>
      <h1 className='headerUser'>{currentUser.username}</h1>
      <button className='headerLogout' onClick={logout}>logout</button>
    </>
  ) : (
    <Link to='/login'>login</Link>
  )
);

export default HeaderUser;