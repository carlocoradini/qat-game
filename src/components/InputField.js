import React, { useEffect, useState } from "react";
import { useGameContext } from "../context/GameContext";
import { WordChecker } from "./WordChecker";
import { checkWordValidity } from "../services/wordService";

export function InputField() {
  const { currentLetters, updateLetters, addUsedLetters, setWordInfo, addValidWord } = useGameContext();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [ inputValid, setInputValid ] = useState(false)

  const checkWord = async () => {
    const word = currentLetters.join("")
    if(word.length === 3){
      const result = await checkWordValidity(word)
      setInputValid(result.isValid)
      if(result.isValid){
        addUsedLetters(currentLetters)
        setWordInfo(result.word, result.audio, result.definition)
        addValidWord(word)
        // aqui atualizo o contexto com as inforamções
      }
    }
  }

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
    checkWord()
  }, [currentLetters])

  useEffect(() => {
    if (inputValid !== null) { // Se já foi validado
      const timer = setTimeout(() => {
        setInputValid(null); // Remove a classe após 1 segundo
      }, 1000);

      return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado ou se o inputValid mudar
    }
  }, [inputValid]); // Este efeito depende de `inputValid`

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
            className={`letter-input ${index === selectedIndex ? "selected" : ""} 
            ${inputValid === true ? "valid" : inputValid === false ? "invalid" : ""}`} // Estilo para o campo selecionado
            onClick={() => setSelectedIndex(index)} // Clique no campo para selecioná-lo
          />
        ))}
      </div>

    </div>
  );
}
