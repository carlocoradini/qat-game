import React from "react";
import { useGameContext } from "../context/GameContext";

export function Keyboard() {
  const { currentLetters, updateLetters } = useGameContext();

  const handleKeyPress = (letter) => {
    const index = currentLetters.indexOf(""); // Encontrar índice vazio, se existir
    if (index !== -1) {
      updateLetters(letter.toUpperCase(), index);
    }
  };

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="keyboard">
      {alphabet.map((letter) => (
        <button
          key={letter}
          onClick={() => handleKeyPress(letter)}
          className="keyboard-button"
        >
          {letter}
        </button>
      ))}
    </div>
  );
}
