import axios from "axios";

const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en"

export const validateWord = async (word) => {
    const response = await axios.get(`${BASE_URL}/${word}`)
    return response.data;
}