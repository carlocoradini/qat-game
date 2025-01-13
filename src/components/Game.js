import React from "react";
import { GameProvider } from "./GameContext";
import { InputField } from "./InputField";
import { Keyboard } from "./Keyboard";

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