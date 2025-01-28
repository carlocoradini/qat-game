import { useGameContext } from '../context/GameContext'
import { translateText } from '../services/translationService'
import { useEffect, useState } from 'react'

export default function Translation() {
    const { wordData } = useGameContext()
    const [ wordTranslation, setWordTranslation ] = useState("")
    const [ sentenceTranslation, setSentenceTranslation ] = useState("")

    useEffect(() => {
        const translate = async () => {
            if(wordData.word){
                const wordTranslated = await translateText(wordData.word);
                setWordTranslation(wordTranslated)
            }

            if(wordData.definition) {
                const sentenceTranslated = await translateText(wordData.definition)
                setSentenceTranslation(sentenceTranslated)
            }
        }

        if (wordData.word || wordData.definition )
            translate()
    }, [wordData.word, wordData.definition])

    return (
        <>
        {wordTranslation && <p>{wordTranslation}</p>}
        {sentenceTranslation && <p>{sentenceTranslation}</p>}
        </>
    )
}