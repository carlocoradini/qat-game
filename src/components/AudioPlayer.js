import React, { useEffect, useRef, useState } from "react";
import { useGameContext } from "../context/GameContext";
import musicLogo from '../assets/microphone-solid.svg';
import musicDisabledLogo from '../assets/microphone-slash-solid.svg';
import './AudioPlayer.css'

const AudioController = () => {
  const { wordData } = useGameContext()
  const audioRef = useRef(null);

  const playAudio = () => {
    const audio = audioRef.current;

    if (audio && wordData.audio) {
      audio.play();
    }
  }

  useEffect(() => {
    playAudio()
  }, [wordData.audio])

  return (
      <>
        <audio ref={audioRef} src={wordData.audio} />
        <img 
        src={wordData.audio ? musicLogo : musicDisabledLogo} 
        style={{height: '2vw'}} 
        onClick={wordData.audio ? playAudio : null} 
        className={`clickable ${!wordData.audio ? 'disabled': ''}`}/>
      </>
    );
};

export default AudioController;
