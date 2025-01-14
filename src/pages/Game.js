import React from "react";
import { GameProvider } from "../context/GameContext";
import { InputField } from "../components/InputField";
import { Keyboard } from "../components/Keyboard";

const Game = () => {
  return (
    <GameProvider>
      <div className="game">
        <h1>QAT - The Game</h1>
        <InputField />
        <Keyboard />
      </div>
    </GameProvider>
  );
};

export default Game;