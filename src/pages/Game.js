import React from "react";
import { GameProvider } from "../context/GameContext";
import { InputField } from "../components/InputField";
import { Keyboard } from "../components/Keyboard";
import { WordList } from "../components/WordList";

const Game = () => {
  return (
    <GameProvider>
      <div className="game text-center py-3">
        <h1>QAT - The Game</h1>
        <InputField />
        <Keyboard />
        <WordList />
      </div>
    </GameProvider>
  );
};

export default Game;