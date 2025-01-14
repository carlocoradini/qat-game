import React, { useEffect, useState } from "react";
import { useGameContext } from "../context/GameContext";
import axios from "axios";

// URL da API Datamuse para verificar palavras
const API_URL = "https://api.datamuse.com/words";

export function WordChecker() {
  const { currentLetters, addUsedLetters } = useGameContext();
  const [message, setMessage] = useState(""); // Estado para a mensagem de erro ou sucesso

  // Função para verificar a palavra com a API Datamuse
  const checkWordValidity = async (word) => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          sp: word,  // sp indica a palavra que queremos procurar
          max: 1     // Limita a resposta a 1 palavra
        }
      });

      // Se a palavra existir, ela será retornada na lista
      if (response.data.length > 0) {
        addUsedLetters(currentLetters);
        setMessage(`A palavra '${word}' é válida!`);
      } else {
        setMessage("Palavra inválida!");
      }
    } catch (error) {
      console.error("Erro ao verificar palavra:", error);
      setMessage("Erro ao verificar a palavra.");
    }
  };

  // Verifica a palavra sempre que currentLetters mudar
  useEffect(() => {
    const word = currentLetters.join(""); // Junta as letras para formar a palavra
    if (word.length === 3) { // Apenas tenta validar quando 3 letras estão preenchidas
      checkWordValidity(word); // Valida a palavra automaticamente
    }
  }, [currentLetters]);

  return (
    <div>
      {/* Exibindo a mensagem abaixo do teclado */}
      {message && <p className="message">{message}</p>}
    </div>
  );
}
