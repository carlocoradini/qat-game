import { fetchImageByKeyword } from '../services/imageService'
import { useEffect, useState } from "react";
import logo from '../assets/download.png'
import { useGameContext } from '../context/GameContext';

export default function WordPhoto() {
    const {wordData} = useGameContext()
    const [imageUrl, setImageUrl] = useState(logo)

    useEffect(() => {
        const fetchImage = async () => {
            const image = await fetchImageByKeyword(wordData.word)
            setImageUrl(image)
        }
        if(wordData.word && wordData.word !== "QAT"){
            fetchImage()
        } else {
            setImageUrl(logo)
        }
    }, [wordData])

    return (
        <div>
            <img src={imageUrl} alt={wordData.word} />
        </div>
    )
}