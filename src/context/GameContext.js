// Contexto do Jogo
import React, { createContext, useContext, useState, useEffect } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [currentLetters, setCurrentLetters] = useState(["Q", "A", "T"]);
  const [usedLetters, setUsedLetters] = useState([]);
  const [wordData, setWordData] = useState({
    word: "",
    audio: "",
    definition: ""
  });

  const [gameMode, setGameMode] = useState("Classic");
  const [gameTime, setGameTime] = useState(null);

  const [lettersSwap, setLettersSwap] = useState(0);
  const [validWords, setValidWords] = useState([]);

  const [gameStartTime, setGameStartTime] = useState(Date.now());
  const [attempts, setAttempts] = useState(0);

  const [wordLength, setWordLength] = useState(3);  // Define o número de letras da fase inicial
  const [gameHistory, setGameHistory] = useState([]); 
  const [currentPhase, setCurrentPhase] = useState(1);  // Controle da fase

  useEffect(() => {
    if(wordLength === 4)
      setCurrentLetters(["Q", "U", "I", "Z"])
    else if (wordLength === 3)
      setCurrentLetters(["Q", "A","T"])
    else if(wordLength === 5)
      setCurrentLetters(["G", "L", "Y", "P", "H"])
  }, [wordLength])

  const updateLetters = (newLetter, index) => {
    if (index < wordLength) {
      const updated = [...currentLetters];
      updated[index] = newLetter;
      setCurrentLetters(updated);
      setLettersSwap((prev) => prev + 1)
    }
  };

  const addPhaseStats = (duration, attempts, words) => {
    setGameHistory((prev) => [
      ...prev,
      { duration, attempts, words, level: wordLength }
    ]);
  };

  useEffect(() => {
    setGameStartTime(Date.now()); // Start the game timer when context mounts
  }, []);

  const addUsedLetters = (letters) => {
    setUsedLetters((prev) => [...new Set([...prev, ...letters])]);
    setAttempts((prev) => prev + 1); // Contar cada tentativa
  };

  const setWordInfo = (word, audio, definition) => {
    setWordData({ word, audio, definition });
  };

  const addValidWord = (word) => {
    setValidWords((prev) => [...new Set([...prev, word])]);
  };

  const nextPhase = () => {
    if (currentPhase < 3) {
      setCurrentPhase((prev) => prev + 1);
      setWordLength((prev) => prev + 1);  // Aumenta o número de letras da palavra
      //setCurrentLetters(new Array(wordLength).fill("")); // Reinicia as letras para a nova fase
    } else {
      console.log("Jogo concluído!");
    }
  };

  return (
    <GameContext.Provider
      value={{
        currentLetters, usedLetters, updateLetters, addUsedLetters, gameStartTime,
        wordLength, setWordLength, addPhaseStats, wordData, lettersSwap, validWords,
        setWordInfo, addValidWord, currentPhase, nextPhase, gameHistory, setCurrentPhase,
        gameMode, setGameMode,
        gameTime, setGameTime,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGameContext() {
  return useContext(GameContext);
}
