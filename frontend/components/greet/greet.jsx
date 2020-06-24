import React from 'react';
import { Link } from 'react-router-dom'

const Greet = ({ currentUser, logout }) => (
  currentUser ? (
    <>
      <h1 className='greetUser'>{currentUser.username}</h1>
      <button className='greetLogout' onClick={logout}>logout</button>
    </>
  ) : (
    <Link to='/login'>login</Link>
  )
);

export default Greet;