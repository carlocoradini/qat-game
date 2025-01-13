import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className='container-xxl py-3 display--1'>
      <h1>Welcome, user!</h1>
      <Link to="/game">LINK</Link>
    </div>
  );
};

export default Home;