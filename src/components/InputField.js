import React, { useEffect, useState } from "react";
import { useGameContext } from "../context/GameContext";
import { WordChecker } from "./WordChecker";

export function InputField() {
  const { currentLetters, updateLetters } = useGameContext();
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Função para trocar a letra no índice selecionado
  const handleLetterChange = (newLetter) => {
    updateLetters(newLetter.toUpperCase(), selectedIndex);
  };

  // Lidar com as teclas do teclado físico
  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      setSelectedIndex((prev) => (prev + 1) % currentLetters.length);
    } else if (e.key === "ArrowLeft") {
      setSelectedIndex((prev) => (prev - 1 + currentLetters.length) % currentLetters.length);
    } else if (/^[a-zA-Z]$/.test(e.key)) {
      handleLetterChange(e.key);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, currentLetters]);

  return (
    <div>
      <div className="input-field">
        {currentLetters.map((letter, index) => (
          <input
            key={index}
            type="text"
            value={letter}
            maxLength="1"
            readOnly // Impede edição direta
            className={`letter-input ${index === selectedIndex ? "selected" : ""}`} // Estilo para o campo selecionado
            onClick={() => setSelectedIndex(index)} // Clique no campo para selecioná-lo
          />
        ))}
      </div>

      <WordChecker />
    </div>
  );
}
