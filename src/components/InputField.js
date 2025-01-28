import React, { useEffect, useState } from "react";
import { useGameContext } from "../context/GameContext";
import { checkWordValidity } from "../services/wordService";

export function InputField() {
  const {
    currentLetters,
    updateLetters,
    addUsedLetters,
    setWordInfo,
    addValidWord,
    currentPhase, // Pegue o valor da fase atual
    wordLength, // Esse é o comprimento da palavra para a fase atual
  } = useGameContext();
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [inputValid, setInputValid] = useState(null);

  const checkWord = async () => {
    const word = currentLetters.join("");
    if (word.length === wordLength) { // Agora usamos o `wordLength` da fase
      const result = await checkWordValidity(word);
      setInputValid(result.isValid);
      if (result.isValid) {
        addUsedLetters(currentLetters);
        setWordInfo(result.word, result.audio, result.definition);
        addValidWord(word);
      }
    }
  };

  const handleLetterChange = (newLetter) => {
    updateLetters(newLetter.toUpperCase(), selectedIndex);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      setSelectedIndex((prev) => (prev + 1) % currentLetters.length);
    } else if (e.key === "ArrowLeft") {
      setSelectedIndex(
        (prev) => (prev - 1 + currentLetters.length) % currentLetters.length
      );
    } else if (/^[a-zA-Z]$/.test(e.key)) {
      handleLetterChange(e.key);
    }
  };

  useEffect(() => {
    checkWord();
  }, [currentLetters]);

  useEffect(() => {
    if (inputValid !== null) {
      const timer = setTimeout(() => {
        setInputValid(null);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [inputValid]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, currentLetters]);

  // Ajusta o número de letras com base na fase atual
  useEffect(() => {
    if (currentPhase > 0) {
      // Alterar a quantidade de letras conforme a fase
      // Para fase 1, 3 letras, para fase 2, 4 letras, para fase 3, 5 letras, etc.
      const newLetters = Array(wordLength).fill("Q"); // Palavra com o número correto de letras
      updateLetters(newLetters);  // Atualiza as letras no estado
    }
  }, [currentPhase, wordLength]);

  return (
    <div>
      <div className="input-field">
        {currentLetters.map((letter, index) => (
          <input
            key={index}
            type="text"
            value={letter}
            maxLength="1"
            readOnly
            className={`letter-input ${index === selectedIndex ? "selected" : ""} 
            ${inputValid === true ? "valid" : inputValid === false ? "invalid" : ""}`}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
