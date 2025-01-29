import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PlayButton from '../components/PlayButton';
import logo from '../assets/download.png'
import { GameSettingsModal } from '../components/GameSettingsModal';

const Home = () => {

  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStartGame  = () => {
    setIsModalOpen(false); // Fecha o modal
    navigate("/game")
  }

  return (
    <div className='container-xxl py-3 display--1 text-center items-center'>
      <h1>Welcome, user!</h1>
      <img src={logo} className='w-25 h-25 mx-auto d-block' alt="Logo"/>
      <PlayButton onClick={() => setIsModalOpen(true)} />

      {isModalOpen && <GameSettingsModal onClose={() => setIsModalOpen(false)} onStartGame={handleStartGame} />}
    </div>
  );
};

export default Home;