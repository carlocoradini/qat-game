import React from "react";
import { useGameContext } from "../context/GameContext";

export function Keyboard() {
  const { usedLetters, currentLetters, updateLetters } = useGameContext();

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const isUsed = (letter) => usedLetters.includes(letter);

  const handleClick = (letter) => {
    if (!isUsed(letter)) {
      const indexToReplace = currentLetters.indexOf("");
      if (indexToReplace !== -1) {
        updateLetters(letter, indexToReplace);
      }
    }
  };

  return (
    <div className="keyboard">
      {alphabet.map((letter) => (
        <button
          key={letter}
          className={`key ${isUsed(letter) ? "used" : ""}`}
          disabled={isUsed(letter)}
          onClick={() => handleClick(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}
