import React, { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [currentLetters, setCurrentLetters] = useState(["Q", "A", "T"]);
  const [usedLetters, setUsedLetters] = useState([]);

  const updateLetters = (newLetter, index) => {
    const updated = [...currentLetters];
    updated[index] = newLetter;
    setCurrentLetters(updated);
  };

  const addUsedLetters = (letters) => {
    setUsedLetters((prev) => [...new Set([...prev, ...letters])]);
  };

  return (
    <GameContext.Provider
      value={{ currentLetters, usedLetters, updateLetters, addUsedLetters }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGameContext() {
  return useContext(GameContext);
}
