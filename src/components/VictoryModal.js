import React, { useEffect, useState } from "react";
import { useGameContext } from "../context/GameContext";
import "./VictoryModal.css";

export function VictoryModal() {
  const {
    usedLetters,
    gameStartTime,
    attempts,
    validWords,
    wordLength,
    setWordLength,
    setCurrentPhase,
    currentPhase, 
    addPhaseStats,
  } = useGameContext();
  const [showModal, setShowModal] = useState(false);
  const totalAlphabet = 26;

  useEffect(() => {
    if (usedLetters.length === totalAlphabet) {
      setShowModal(true);
    }
  }, [usedLetters]);

  const handleNextLevel = () => {
    const duration = ((Date.now() - gameStartTime) / 1000).toFixed(2);
    addPhaseStats(duration, attempts, validWords.length);

    if (currentPhase < 3) {
      setCurrentPhase(currentPhase + 1); // Avançar para a próxima fase
      setWordLength(wordLength + 1); // Aumentar o comprimento da palavra
    } else {
      console.log("Jogo finalizado!");
    }

    setShowModal(false);
  };

  const gameDuration = ((Date.now() - gameStartTime) / 1000).toFixed(2);

  if (!showModal) return null;

  return (
    <div className="victory-modal">
      <div className="modal-content">
        <h1>Parabéns! Você venceu a fase de {wordLength} letras!</h1>
        <p>Tempo de jogo: {gameDuration} segundos</p>
        <p>Tentativas: {attempts}</p>
        <p>Palavras válidas: {validWords.length}</p>
        <button onClick={handleNextLevel}>
          {currentPhase < 3 ? "Próxima Fase" : "Relatório Final"}
        </button>
      </div>
    </div>
  );
}
