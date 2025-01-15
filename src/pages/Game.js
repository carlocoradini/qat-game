import React, { useState } from "react";
import { GameProvider } from "../context/GameContext";
import { InputField } from "../components/InputField";
import { Keyboard } from "../components/Keyboard";
import { WordList } from "../components/WordList";
import AudioPlayer from "../components/AudioPlayer";
import musicLogo from '../assets/microphone-solid.svg';
import musicDisabledLogo from '../assets/microphone-slash-solid.svg';
import WordPhoto from "../components/WordPhoto";
import Translation from "../components/Translation";
import SwapLetter from "../components/SwapLetter";
import WordsValid from "../components/WordsValid";

const Game = () => {
  const test = "https://api.dictionaryapi.dev/media/pronunciations/en/and-us.mp3"
  const [ playAudio, setPlayAudio ] = useState(false)
  const [ isDisabled, setIsDisable ] = useState(true)
  return (
      <div className="game text-center py-3">
        <InputField />
        <Keyboard />
        <WordList />
        <AudioPlayer />
        <WordPhoto />
        <Translation/>
        <SwapLetter />
        <WordsValid />
      </div>
  );
};

export default Game;