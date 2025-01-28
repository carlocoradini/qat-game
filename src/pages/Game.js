import React, { useState, useEffect } from "react";
import { GameProvider, useGameContext } from "../context/GameContext";
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
import { VictoryModal } from "../components/VictoryModal";
import { FinalReport } from "../components/FinalReport";

const Game = () => {
  const { gameHistory, addPhaseStats } = useGameContext();
  const [playAudio, setPlayAudio] = useState(false);
  const [isDisabled, setIsDisable] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  const { currentPhase, wordLength } = useGameContext(); // Pegando a fase e wordLength
  
  useEffect(() => {
    if (gameHistory.length > 0 && gameHistory[gameHistory.length - 1].words >= 26) {
      // Condição de vitória: se 26 palavras foram formadas (ou outras condições de vitória)
      setGameOver(true);
    }
  }, [gameHistory]);

  return (
    <div className="game text-center py-3">
      {gameOver ? (
        <FinalReport />
      ) : (
        <>
          <InputField wordLength={wordLength} />
          <WordList />
          <AudioPlayer />
          <WordPhoto />
          <Keyboard />
          <VictoryModal />
          <Translation />
          <SwapLetter />
          <WordsValid />
        </>
      )}
    </div>
  );
};

export default Game;