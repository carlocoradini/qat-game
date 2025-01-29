import { useGameContext } from "../context/GameContext"


export default function SwapLetter(){
    const {lettersSwap} = useGameContext()
    return (
        <>
            <div className="word-list">
                <h3>Swapping letters</h3>
            <p>{lettersSwap}</p>
            </div>
        </>
    )
}