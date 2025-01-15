import { useGameContext } from "../context/GameContext"


export default function SwapLetter(){
    const {lettersSwap} = useGameContext()
    return (
        <>
            <p>{lettersSwap}</p>
        </>
    )
}