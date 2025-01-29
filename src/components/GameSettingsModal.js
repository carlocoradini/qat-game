import React, { useState } from "react";
import { useGameContext } from "../context/GameContext";
import "./GameSettingsModal.css";
import usa from "../assets/map.png"
import bra from "../assets/brazil.png"


export function GameSettingsModal({ onClose, onStartGame }) {
  const { setGameMode, setGameTime, setWordLength } = useGameContext();
  const [selectedMode, setSelectedMode] = useState("Classic");
  const [selectedTime, setSelectedTime] = useState(2);
  const [selectedLength, setSelectedLength] = useState(3);
  const [inputLang, setInputLang] = useState("en");
  const [outputLang, setOutputLang] = useState("pt");

  const handleModeChange = (mode) => {
    setSelectedMode(mode);
  };

  const handleStartGame = () => {
    setGameMode(selectedMode);
    if (selectedMode === "Running") {
      setGameTime(selectedTime);
    } else {
      setWordLength(selectedLength);
    }
    onStartGame();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Escolha o Modo de Jogo</h2>

        {/* Seleção de Modo */}
        <div className="mode-selection">
          <button className={selectedMode === "Classic" ? "selected" : ""} onClick={() => handleModeChange("Classic")}>
            <span className="icon-classic" /> Classic
          </button>
          <button disabled={true} className={selectedMode === "Running" ? "selected" : ""} onClick={() => handleModeChange("Running")}>
            <span className="icon-running" /> Running
          </button>
        </div>

        {/* Opções de Tempo para Running Mode */}
        {selectedMode === "Running" && (
          <div className="time-selection">
            <label>Tempo:</label>
            <button onClick={() => setSelectedTime(2)} className={selectedTime === 2 ? "selected" : ""}>2 min</button>
            <button onClick={() => setSelectedTime(5)} className={selectedTime === 5 ? "selected" : ""}>5 min</button>
            <button onClick={() => setSelectedTime(10)} className={selectedTime === 10 ? "selected" : ""}>10 min</button>
          </div>
        )}

        {/* Opções de Letras para Classic Mode */}
        {selectedMode === "Classic" && (
          <div className="length-selection">
            <label>Quantidade de Letras:</label>
            <button onClick={() => setSelectedLength(3)} className={selectedLength === 3 ? "selected" : ""}>3</button>
            <button onClick={() => setSelectedLength(4)} className={selectedLength === 4 ? "selected" : ""}>4</button>
            <button onClick={() => setSelectedLength(5)} className={selectedLength === 5 ? "selected" : ""}>5</button>
          </div>
        )}
        {/*
        {/* Seleção de Idiomas
        <div className="language-selection">
          <label>Idioma de Entrada:</label>
          <select value={inputLang} onChange={(e) => setInputLang(e.target.value)}>
            <option value="en"><img src={usa} /> English</option>
          </select>

          <label>Idioma de Saída:</label>
          <select value={outputLang} onChange={(e) => setOutputLang(e.target.value)}>
            <option value="en">English</option>
            <option value="pt"><img src={bra}/> Portuguese</option>
          </select>
        </div>
        */}
        {/* Botões de Ação */}
        <div className="modal-buttons">
          <button onClick={handleStartGame} className="play-button">Jogar</button>
          <button onClick={onClose} className="cancel-button">Cancelar</button>
        </div>
      </div>
    </div>
  );
}

export default GameSettingsModal;
