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
    <div className="game container-fluid text-center py-3">
      {gameOver ? (
        <FinalReport />
      ) : (
        <>
          <div className="row align-items-center">
            <div className="col-md-3 d-flex flex-column align-items-center">
              <div>
                <SwapLetter />
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column align-items-center">
              <div className="mb-3">
                <Keyboard />
              </div>
              <div>
                <InputField wordLength={wordLength} />
              </div>
              <div>
                <AudioPlayer />
                <WordPhoto />
                <Translation />
              </div>
            </div>
            <div className="col-md-3 d-flex flex-column align-items-center">
              <div>
                <WordsValid />
              </div>
            </div>
          </div>
          <VictoryModal />
        </>
      )}
    </div>
  );
};

export default Game;