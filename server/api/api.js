
"use strict"
// npm install dotenv @google/generative-ai
const dotenv = require("dotenv");
const { GoogleGenerativeAI } = require("@google/generative-ai");
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

class AiAPI {
    async generateRecipeIntroduction(recipeName, ingredients) {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const prompt = `Write a numbering marked introduction for a recipe called "${recipeName}". Briefly mention some of the key ingredients: ${ingredients.join(', ')}.`;

        const result = await model.generateContent(prompt);
        const response = result.response;
        return response.text();
    } catch (error) {
        console.error("Error generating recipe introduction:", error);
      throw error; // Re-throw the error for the controller to handle
    }
    }
}

module.exports = new AiAPI();