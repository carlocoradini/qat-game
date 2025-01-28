import axios from "axios";

// URL da API Datamuse para verificar palavras
const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en";

// Função para verificar a palavra com a API Datamuse
export const checkWordValidity = async (word) => {
  try {
    const response = await axios.get(`${BASE_URL}/${word}`);

    // Se a palavra existir, ela será retornada na lista
    if (response.data && response.data.length > 0) {
      const wordData = response.data[0]
      const audio = wordData.phonetics[0]?.audio || null
      const definition = wordData.meanings[0]?.definitions[0]?.definition || null
      return { isValid: true,word, audio, definition, message: `A palavra '${word}' é válida!` };
    } else {
      return { isValid: false, message: "Palavra inválida!" };
    }
  } catch (error) {
    console.error("Erro ao verificar palavra:", error);
    return { isValid: false, message: "Erro ao verificar a palavra." };
  }
};
