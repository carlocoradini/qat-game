import { useGameContext } from "../context/GameContext";
import { WordChecker } from "./WordChecker"; // Importando o componente WordChecker

export function InputField() {
  const { currentLetters, setCurrentLetters, addUsedLetters } = useGameContext();
  
  // Função para trocar uma letra
  const handleChangeLetter = (index, newLetter) => {
    const updatedLetters = [...currentLetters];
    updatedLetters[index] = newLetter; // Atualiza a letra na posição especificada
    setCurrentLetters(updatedLetters);
  };

  return (
    <div>
      <div className="input-field">
        {currentLetters.map((letter, index) => (
          <input
            key={index}
            type="text"
            value={letter}
            maxLength="1"
            onChange={(e) => handleChangeLetter(index, e.target.value.toUpperCase())} // Garante letras maiúsculas
            className="letter-input"
          />
        ))}
      </div>

      {/* Verificando a palavra sempre que as letras mudam */}
      <WordChecker validateWord={addUsedLetters} />  {/* Ou você pode passar a função diretamente */}
    </div>
  );
}
