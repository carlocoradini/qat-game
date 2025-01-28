import React from "react";
import { useGameContext } from "../context/GameContext";

export function FinalReport() {
  const { gameHistory } = useGameContext();

  if (!gameHistory || gameHistory.length === 0) return null;

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
      <button onClick={() => window.location.reload()}>Reiniciar Jogo</button>
    </div>
  );
}
