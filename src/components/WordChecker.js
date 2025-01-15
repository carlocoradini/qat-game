import React, { useEffect, useState } from "react";
import { useGameContext } from "../context/GameContext";
import { checkWordValidity } from '../services/wordService'
//sem usar mais, a validação foi pro inputfield
export function WordChecker() {
  const { currentLetters, addUsedLetters } = useGameContext();
  const [message, setMessage] = useState(""); // Estado para a mensagem de erro ou sucesso

  // Verifica a palavra sempre que currentLetters mudar
  useEffect(() => {
    const word = currentLetters.join(""); // Junta as letras para formar a palavra
    if (word.length === 3) { // Apenas tenta validar quando 3 letras estão preenchidas
      const validateWord = async () => {
        const { isValid, message } = await checkWordValidity(word)
        setMessage(message)
        if(isValid){
          addUsedLetters(currentLetters)
        }
      }
      validateWord()
    }
  }, [currentLetters]);

  return (
    <div>
      {/* Exibindo a mensagem abaixo do teclado */}
      {message && <p className="message">{message}</p>}
    </div>
  );
}
