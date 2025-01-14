import React from 'react';
import { useNavigate } from 'react-router-dom';
import PlayButton from '../components/PlayButton';
import logo from '../assets/download.png'

const Home = () => {

  const navigate = useNavigate()

  const routerGame = () => {
    navigate("/game")
  }

  return (
    <div className='container-xxl py-3 display--1 text-center items-center'>
      <h1>Welcome, user!</h1>
      <img src={logo} className='w-25 h-25 mx-auto d-block' alt="Logo"/>
      <PlayButton onClick={routerGame} />
    </div>
  );
};

export default Home;