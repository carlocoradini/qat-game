// src/services/translationService.js

export const translateText = async (text) => {
    const sourceLang = "en"
    const targetLang = "pt"
    try {
      const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|pt`
      const res = await fetch(url)
      if(!res.ok)
        throw new Error("errado")
      const data = await res.json();
      return data.responseData.translatedText;
    } catch (error) {
      console.error("Error during translation:", error);
      return null;
    }
  };
  