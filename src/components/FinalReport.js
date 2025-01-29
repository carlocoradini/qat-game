import React, { useState } from "react";
import { useGameContext } from "../context/GameContext";
import { useNavigate } from "react-router-dom";
import GameSettingsModal from "./GameSettingsModal";

export function FinalReport() {
  const { gameHistory } = useGameContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate()

  if (!gameHistory || gameHistory.length === 0) return null;
  
  const handleStartGame  = () => {
    setIsModalOpen(false); // Fecha o modal
    navigate("/game")
  }

  return (
    <div className="final-report">
      <h1>Relatório Final</h1>
      <ul>
        {gameHistory.map((phase, index) => (
          <li key={index}>
            <strong>Fase de {phase.level} letras:</strong>
            <p>Tempo: {phase.duration} segundos</p>
            <p>Tentativas: {phase.attempts}</p>
            <p>Palavras Formadas: {phase.words}</p>
          </li>
        ))}
      </ul>
      <button onClick={() => setIsModalOpen(true)}>Reiniciar Jogo</button>
      {isModalOpen && <GameSettingsModal onClose={() => setIsModalOpen(false)} onStartGame={handleStartGame} />}
    </div>
  );
}
