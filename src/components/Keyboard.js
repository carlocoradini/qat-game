import React, { useEffect, useState } from "react";
import { useGameContext } from "../context/GameContext";
import "./Keyboard.css";

export function Keyboard() {
  const { currentLetters, updateLetters, usedLetters } = useGameContext();
  const [clickedLetters, setClickedLetters] = useState([]);

  const handleKeyPress = (letter) => {
    if (clickedLetters.includes(letter) || usedLetters.includes(letter)) return;

    const index = currentLetters.indexOf("");
    if (index !== -1) {
      updateLetters(letter.toUpperCase(), index);
      setClickedLetters((prev) => [...prev, letter]);
    }
  };

  const handlePhysicalKeyPress = (event) => {
    const letter = event.key.toUpperCase();
    if (/^[A-Z]$/.test(letter)) {
      handleKeyPress(letter);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handlePhysicalKeyPress);
    return () => {
      window.removeEventListener("keydown", handlePhysicalKeyPress);
    };
  }, [clickedLetters, usedLetters, currentLetters]);

  const rows = [
    "QWERTYUIOP".split(""),
    "ASDFGHJKL".split(""),
    "ZXCVBNM".split("")
  ];

  return (
    <div className="keyboard">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((letter) => (
            <button
              key={letter}
              onClick={() => handleKeyPress(letter)}
              className={`keyboard-button ${
                clickedLetters.includes(letter) || usedLetters.includes(letter)
                  ? "used"
                  : ""
              }`}
              disabled={clickedLetters.includes(letter) || usedLetters.includes(letter)}
            >
              {letter}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
