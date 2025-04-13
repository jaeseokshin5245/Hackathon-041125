"use strict";

const express = require("express");
const route = express.Router();
const Controller = require("../controller/Controller");
const fs = require("fs");


// Correct API endpoint with parameter 'id'
route.get("/hello", (req, res) => {
    res.json({ message: "Hi from backend!" });
});

route.get("/ingred", async (req, res) => {
    const filePath = "./public/data/ingred.json";
    const imageBaseURL = "./public/images/ingredients"; // public folder served by Express

    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
            console.error("Error reading JSON file:", err);
            return res.status(500).json({ error: "Failed to read data." });
        }

        try {
            const jsonData = JSON.parse(data);
            const category = req.query.category;

            const createIngredientWithImage = (cat, name) => {
                const folderName = cat.replace(/[\/\\]/g, ""); // Remove slashes
                return {
                    name,
                    image: `${imageBaseURL}/${folderName}/${name}` // Filename same as ingredient
                };
            };

            if (category) {
                const matched = jsonData[category];
                if (matched) {
                    const withImages = matched.map(name => createIngredientWithImage(category, name));
                    return res.json({ [category]: withImages });
                } else {
                    return res.status(404).json({ error: `Category '${category}' not found.` });
                }
            }

            // No category — return all ingredients grouped
            const fullData = {};
            for (const cat in jsonData) {
                fullData[cat] = jsonData[cat].map(name => createIngredientWithImage(cat, name));
            }

            res.json(fullData);

        } catch (parseErr) {
            console.error("Error parsing JSON:", parseErr);
            res.status(500).json({ error: "Invalid JSON format" });
        }
    });
});

route.post("/food",
    async (req, res) => {
        const recipe = new Controller(req.body);
        console.log(recipe);
        try {
            const foodList = await recipe.foodReq();
            console.log(foodList);
            if (foodList && Array.isArray(foodList) && foodList.length > 0) {
                const enriched = foodList.map(recipe => {
                    const imageName = recipe["RecipeName"].replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '-');
                    const imagePath = `./public/images/foods/${imageName}`;
                    return { ...recipe, image: imagePath };
                });
                return res.status(200).json({ success: true, data: enriched });
            } else {
                return res.status(404).json({ success: false, message: 'No matching foods found.' });
            }

        } catch (error) {
            console.error("Error during searching food:", error);
            return res.status(500).json({ success: false, error: 'Internal Server Error. Please try again later.' });
        }
    }
);
route.post("/recipe",
    async (req, res) => {
        const recipe = new Controller(req.body);

        try {
            const response = await recipe.recipeReq();
            console.log(response)
            if (response.success) {
                return res.status(200).json(response);
            } else {
                return res.status(401).json(response);
            }
        } catch (error) {
            console.error("Error during requesting recipe:", error);
            return res.status(500).json({ error: 'Internal Server Error. Please try agian later.'})
        }
})


module.exports = route;
