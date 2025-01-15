import React from "react";
import "./WordList.css";
import { useGameContext } from "../context/GameContext";

export function WordList() {
  const { usedLetters } = useGameContext();

  return (
    <div className="word-list">
      <h3>Letras Usadas ({usedLetters.length}/26)</h3>
      <ul>
        {usedLetters.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  );
}
