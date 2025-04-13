"use strict";
const fs = require('fs').promises;
const AiAPI = require('../api/api')

class Controller {
    constructor(body) {
        this.body = body;
    }

    async foodReq() {
        const clientIngredients = Array.isArray(this.body) ? this.body : (this.body && this.body.ingredients ? this.body.ingredients : []);
    
        try {
            const filePath = './public/data/Recipe.json';
            const fileContent = await fs.readFile(filePath, 'utf8');
            const recipes = JSON.parse(fileContent);
    
            const matchingRecipes = recipes.filter(recipe => {
                return clientIngredients.every(clientIng =>
                    recipe.Ingredients.map(ing => ing.toLowerCase()).includes(clientIng.toLowerCase())
                );
            });
    
            if (matchingRecipes.length > 0) {
                return matchingRecipes.map(recipe => ({
                    "RecipeName": recipe["RecipeName"], // Ensure this matches the actual key in your JSON
                    "Ingredients": recipe.Ingredients
                }));
            } else {
                return [];
            }
        } catch (error) {
            console.error("Error reading or processing the server JSON file:", error);
            throw error;
        }
    }

    async recipeReq() {
        const client = this.body;
        try {
            const filePath = './public/data/Recipe.json';
            const fileContent = await fs.readFile(filePath, 'utf8');
            const recipes = JSON.parse(fileContent);

            const requestedRecipeName = client.RecipeName;

            if (!requestedRecipeName) {
                return { error: "Please provide a 'RecipeName' in the request body." };
            }

            const foundRecipe = recipes.find(recipe =>
                recipe["RecipeName"]?.toLowerCase() === requestedRecipeName.toLowerCase()
            );

            if (foundRecipe) {
                const recipeName = foundRecipe["RecipeName"];
                const ingredients = foundRecipe.Ingredients;

                try {
                    const introduction = await AiAPI.generateRecipeIntroduction(recipeName, ingredients);
                    return {
                        "Introduction": introduction
                    };
                } catch (aiError) {
                    console.error("Error generating recipe introduction:", aiError);
                    return {
                        "RecipeName": recipeName,
                        "Ingredients": ingredients,
                        "Introduction": "Failed to generate introduction." // Or a more informative message
                    };
                }
            } else {
                return { error: `Recipe "${requestedRecipeName}" not found.` };
            }

        } catch (error) {
            console.error("Error processing recipe request:", error);
            throw error; // Re-throw the error for the calling function to handle
        }
    }
}

module.exports = Controller;