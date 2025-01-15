import { createClient } from "pexels"

const client = createClient('xU1tCuzGDnZfxYTQM8cLJasTmRPuutfywOgCeMpWCEcRSKxnc5PfS0xG')

export const fetchImageByKeyword = async (keyword) => {
    try{
        const photos = await client.photos.search({query: keyword, per_page: 1})

        if(photos && photos.photos.length > 0){
            const image = photos.photos[0]
            return image.src.small
        } else {
            throw new Error("Não foi encontrado imagem")
        }
    } catch (error ){
        console.error("Error fetching image: ", error)
        return null
    }
}