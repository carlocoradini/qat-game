import React, { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [currentLetters, setCurrentLetters] = useState(["Q", "A", "T"]);
  const [usedLetters, setUsedLetters] = useState([]);
  const [ wordData, setWordData ] = useState({
    word: "",
    audio: "",
    definition: ""
  })
  const [ lettersSwap, setLettersSwap ] = useState(0)
  const [ validWords, setValidWords ] = useState([])

  const updateLetters = (newLetter, index) => {
    const updated = [...currentLetters];
    updated[index] = newLetter;
    setCurrentLetters(updated);
    setLettersSwap((prev) => prev + 1)
  };

  const addUsedLetters = (letters) => {
    setUsedLetters((prev) => [...new Set([...prev, ...letters])]);
  };

  const setWordInfo = (word, audio, definition) => {
    setWordData({ word, audio, definition})
  }

  const addValidWord = (word) => {
    setValidWords((prev) => [... new Set([...prev, word])])
  }

  return (
    <GameContext.Provider
      value={{ currentLetters, usedLetters, updateLetters, addUsedLetters, wordData, lettersSwap, validWords, setWordInfo, addValidWord }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGameContext() {
  return useContext(GameContext);
}
