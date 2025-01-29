import { useGameContext } from "../context/GameContext";
import "./WordList.css";

export default function WordsValid(){
    const {validWords} = useGameContext()

    return (
        <div className="word-list">
            <h3>Palavras validas</h3>
            <ul>
                {validWords.map((word, index) => (
                <li key={index}>{word}</li>
                ))}
            </ul>
        </div>
    )
}