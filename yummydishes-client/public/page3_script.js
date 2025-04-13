document.addEventListener('DOMContentLoaded', function() {
    const selectedIngredients = JSON.parse(sessionStorage.getItem('foodData'))?.ingredients || [];
    const recipes = [
        { "Recipe Name": "Spicy Shrimp and Zucchini Stir-Fry", "Ingredients": ["Shrimp", "Zucchini", "Onion", "Garlic", "Soy sauce", "Jalapeno hot sauce", "Olive oil"] },
        { "Recipe Name": "Creamy Tomato and Spinach Pasta", "Ingredients": ["Pasta noodle", "Tomato sauce", "Spinach", "Garlic", "Milk", "Cheese", "Olive oil"] },
        { "Recipe Name": "Chicken and Mushroom Rice Bowl", "Ingredients": ["Chicken", "Mushroom", "Rice", "Soy sauce", "Ginger", "Scallion"] },
        { "Recipe Name": "Potato and Carrot Frittata", "Ingredients": ["Potato", "Carrot", "Egg", "Milk", "Cheese", "Olive oil", "Salt", "Pepper"] },
        { "Recipe Name": "Lemon Herb Baked Turkey", "Ingredients": ["Turkey", "Lemon", "Garlic", "Olive oil", "Parsley", "Salt", "Pepper"] },
        { "Recipe Name": "Apple Cinnamon Oatmeal with Walnuts", "Ingredients": ["Apple", "Oats", "Milk", "Cinnamon", "Honey", "Walnut"] },
        { "Recipe Name": "Banana Peanut Butter Bread", "Ingredients": ["Banana", "Flour", "Sugar", "Peanut", "Egg", "Butter"] },
        { "Recipe Name": "Avocado and Tomato Salad with Lime", "Ingredients": ["Avocado", "Tomato", "Lime", "Cilantro", "Salt"] },
        { "Recipe Name": "Lentil and Spinach Soup", "Ingredients": ["Lentil", "Spinach", "Carrot", "Onion", "Garlic", "Cumin"] },
        { "Recipe Name": "Coconut Chicken Curry", "Ingredients": ["Chicken", "Onion", "Garlic", "Ginger", "Coconut", "Rice", "Cumin"] },
        { "Recipe Name": "Tofu and Broccoli Stir-Fry", "Ingredients": ["Tofu", "Broccoli", "Soy sauce", "Garlic", "Ginger", "Olive oil"] },
        { "Recipe Name": "Beef and Bean Chili with Corn", "Ingredients": ["Beef", "Bean", "Tomato sauce", "Onion", "Corn", "Jalapeno hot sauce"] },
        { "Recipe Name": "Garlic Butter Shrimp Pasta with Lemon", "Ingredients": ["Shrimp", "Pasta noodle", "Garlic", "Butter", "Lemon", "Salt", "Pepper"] },
        { "Recipe Name": "Broccoli and Cheese Soup with Bacon", "Ingredients": ["Broccoli", "Cheese", "Milk", "Bacon", "Onion", "Flour"] },
        { "Recipe Name": "Pork and Apple Stew with Cinnamon", "Ingredients": ["Pork", "Apple", "Onion", "Salt", "Pepper"] },
        { "Recipe Name": "Tomato and Basil Bruschetta", "Ingredients": ["Tomato", "Basil", "Olive oil", "Bread", "Garlic"] },
        { "Recipe Name": "Spinach and Egg Scramble", "Ingredients": ["Spinach", "Egg", "Olive oil", "Salt", "Pepper"] },
        { "Recipe Name": "Chicken and Potato Bake with Rosemary", "Ingredients": ["Chicken", "Potato", "Onion", "Olive oil", "Salt", "Pepper"] },
        { "Recipe Name": "Cucumber Salad with Yogurt and Dill", "Ingredients": ["Cucumber", "Yogurt", "Vinegar", "Salt"] },
        { "Recipe Name": "Pork and Bean Burritos with Avocado", "Ingredients": ["Pork", "Bean", "Onion", "Cheese", "Avocado"] },
        { "Recipe Name": "Garlic Roasted Potatoes with Parsley", "Ingredients": ["Potato", "Garlic", "Olive oil", "Parsley", "Salt", "Pepper"] },
        { "Recipe Name": "Beef and Bell Pepper Stir-Fry", "Ingredients": ["Beef", "Bell pepper", "Soy sauce", "Olive oil", "Garlic", "Rice"] },
        { "Recipe Name": "Potato and Leek Soup with Milk", "Ingredients": ["Potato", "Onion", "Milk", "Butter", "Salt", "Pepper"] },
        { "Recipe Name": "Pork and Cabbage Stir-Fry with Ginger", "Ingredients": ["Pork", "Onion", "Soy sauce", "Olive oil", "Garlic", "Ginger"] },
        { "Recipe Name": "Banana Pancakes with Honey", "Ingredients": ["Banana", "Flour", "Egg", "Milk", "Sugar", "Butter", "Honey"] },
        { "Recipe Name": "Chicken and Rice Bowl with Scallions", "Ingredients": ["Chicken", "Rice", "Bell pepper", "Onion", "Soy sauce", "Scallion"] },
        { "Recipe Name": "Beef and Tomato Soup with Cumin", "Ingredients": ["Beef", "Tomato", "Onion", "Cumin", "Salt", "Pepper"] },
        { "Recipe Name": "Lentil and Vegetable Curry with Coconut", "Ingredients": ["Lentil", "Carrot", "Onion", "Coconut", "Rice", "Cumin"] },
        { "Recipe Name": "Shrimp and Corn Salad with Lime", "Ingredients": ["Shrimp", "Corn", "Lime", "Cilantro", "Olive oil"] },
        { "Recipe Name": "Pork and Zucchini Stir-Fry", "Ingredients": ["Pork", "Zucchini", "Soy sauce", "Garlic", "Ginger"] },
        { "Recipe Name": "Banana and Almond Smoothie", "Ingredients": ["Banana", "Almond", "Milk", "Honey"] },
        { "Recipe Name": "Chicken and Bean Tacos", "Ingredients": ["Chicken", "Bean", "Cheese", "Avocado", "Jalapeno hot sauce"] },
        { "Recipe Name": "Potato and Cheese Gratin with Bacon", "Ingredients": ["Potato", "Cheese", "Milk", "Garlic", "Bacon", "Salt", "Pepper"] },
        { "Recipe Name": "Beef and Vegetable Skewers", "Ingredients": ["Beef", "Bell pepper", "Onion", "Olive oil", "Garlic"] },
        { "Recipe Name": "Tofu and Spinach Scramble", "Ingredients": ["Tofu", "Spinach", "Egg", "Olive oil", "Salt", "Pepper"] },
        { "Recipe Name": "Tomato and Avocado Salad with Cilantro", "Ingredients": ["Tomato", "Avocado", "Lime", "Cilantro", "Salt"] },
        { "Recipe Name": "Pork and Sweet Potato Hash", "Ingredients": ["Pork", "Potato", "Onion", "Olive oil", "Salt", "Pepper"] },
        { "Recipe Name": "Banana and Walnut Muffins", "Ingredients": ["Banana", "Walnut", "Flour", "Sugar", "Egg"] },
        { "Recipe Name": "Chicken and Carrot Soup", "Ingredients": ["Chicken", "Carrot", "Onion", "Garlic"] },
        { "Recipe Name": "Potato and Mushroom Curry with Coconut", "Ingredients": ["Potato", "Mushroom", "Coconut", "Rice", "Cumin"] },
        { "Recipe Name": "Beef and Egg Fried Rice with Scallions", "Ingredients": ["Beef", "Egg", "Rice", "Soy sauce", "Scallion"] },
        { "Recipe Name": "Potato and Bacon Hash", "Ingredients": ["Potato", "Bacon", "Onion", "Olive oil", "Salt", "Pepper"] },
        { "Recipe Name": "Tomato and Basil Pasta with Shrimp", "Ingredients": ["Tomato", "Basil", "Pasta noodle", "Olive oil", "Garlic", "Shrimp"] },
        { "Recipe Name": "Pork and Cabbage Rolls with Tomato Sauce", "Ingredients": ["Pork", "Cabbage", "Rice", "Tomato sauce"] },
        { "Recipe Name": "Banana and Oatmeal Cookies", "Ingredients": ["Banana", "Oats", "Sugar", "Butter"] },
        { "Recipe Name": "Chicken and Vegetable Stir-Fry", "Ingredients": ["Chicken", "Bell pepper", "Carrot", "Onion", "Soy sauce", "Olive oil"] },
        { "Recipe Name": "Potato and Lentil Stew", "Ingredients": ["Potato", "Lentil", "Carrot", "Onion"] },
        { "Recipe Name": "Tomato and Chickpea Curry with Coconut", "Ingredients": ["Tomato", "Coconut", "Rice", "Cumin"] },
        { "Recipe Name": "Pork and Apple Sauce with Cinnamon", "Ingredients": ["Pork", "Apple", "Sugar"] },
        { "Recipe Name": "Beef and Mushroom Stroganoff", "Ingredients": ["Beef", "Mushroom", "Onion", "Flour", "Pasta noodle"] },
        { "Recipe Name": "Carrot Cake with Cream Cheese Frosting", "Ingredients": ["Carrot", "Flour", "Sugar", "Egg", "Cheese"] },
        { "Recipe Name": "Chicken and Corn Chowder with Bacon", "Ingredients": ["Chicken", "Corn", "Potato", "Milk", "Butter", "Bacon", "Onion"] },
        { "Recipe Name": "Egg Salad Sandwich with Lettuce", "Ingredients": ["Egg", "Bread", "Lettuce", "Salt", "Pepper"] },
        { "Recipe Name": "Almond Butter and Banana Smoothie with Oats", "Ingredients": ["Banana", "Almond", "Milk", "Honey", "Oats"] },
        { "Recipe Name": "Spinach and Ricotta Stuffed Shells", "Ingredients": ["Spinach", "Cheese", "Pasta noodle", "Tomato sauce"] },
        { "Recipe Name": "Chicken Salad with Grapes and Walnuts", "Ingredients": ["Chicken", "Walnut", "Lettuce"] },
        { "Recipe Name": "Tomato and Mozzarella Salad with Basil", "Ingredients": ["Tomato", "Cheese", "Basil", "Olive oil", "Salt", "Pepper"] },
        { "Recipe Name": "Spinach and Artichoke Dip with Bread", "Ingredients": ["Spinach", "Garlic", "Bread"] },
        { "Recipe Name": "Chicken and Zucchini Noodles", "Ingredients": ["Chicken", "Zucchini", "Tomato sauce", "Olive oil"] },
        { "Recipe Name": "Spinach and Goat Cheese Salad with Walnuts", "Ingredients": ["Spinach", "Cheese", "Walnut", "Vinegar"] },
        { "Recipe Name": "Beef and Bean Burritos with Avocado", "Ingredients": ["Beef", "Bean", "Onion", "Cheese", "Avocado"] },
        { "Recipe Name": "Turkey and Rice Bowl with Scallions", "Ingredients": ["Turkey", "Rice", "Bell pepper", "Onion", "Soy sauce", "Scallion"] },
        { "Recipe Name": "Shrimp and Zucchini Pasta", "Ingredients": ["Shrimp", "Zucchini", "Pasta noodle", "Garlic", "Olive oil"] },
        { "Recipe Name": "Tofu and Bell pepper Stir-Fry", "Ingredients": ["Tofu", "Bell pepper", "Soy sauce", "Ginger"] },
        { "Recipe Name": "Bacon and Corn Chowder", "Ingredients": ["Bacon", "Corn", "Potato", "Milk", "Butter", "Onion"] },
        { "Recipe Name": "Avocado and Tomato Bread", "Ingredients": ["Avocado", "Tomato", "Bread", "Salt", "Pepper"] },
        { "Recipe Name": "Spinach and Mushroom Omelette", "Ingredients": ["Spinach", "Mushroom", "Egg", "Cheese", "Olive oil"] },
        { "Recipe Name": "Chicken and Coconut Curry with Zucchini", "Ingredients": ["Chicken", "Coconut", "Zucchini", "Onion", "Garlic", "Rice"] },
        { "Recipe Name": "Pork and Potato Stew with Carrots", "Ingredients": ["Pork", "Potato", "Carrot", "Onion"] },
        { "Recipe Name": "Beef and Rice with Bell Pepper", "Ingredients": ["Beef", "Rice", "Bell pepper", "Soy sauce"] },
        { "Recipe Name": "Shrimp and Tomato Soup", "Ingredients": ["Shrimp", "Tomato", "Onion", "Garlic"] },
        { "Recipe Name": "Tofu and Peanut Noodles", "Ingredients": ["Tofu", "Peanut", "Pasta noodle", "Soy sauce"] },
        { "Recipe Name": "Bacon and Egg Breakfast Bowl", "Ingredients": ["Bacon", "Egg", "Potato", "Spinach"] },
        { "Recipe Name": "Avocado and Shrimp Salad", "Ingredients": ["Avocado", "Shrimp", "Lettuce", "Lime"] },
        { "Recipe Name": "Spinach and Almond Pesto Pasta", "Ingredients": ["Spinach", "Almond", "Pasta noodle", "Garlic", "Olive oil"] },
        { "Recipe Name": "Chicken and Apple Salad", "Ingredients": ["Chicken", "Apple", "Yogurt", "Walnut"] },
        { "Recipe Name": "Pork and Corn Tacos", "Ingredients": ["Pork", "Corn", "Cheese", "Jalapeno hot sauce"] },
        { "Recipe Name": "Beef and Zucchini Lasagna", "Ingredients": ["Beef", "Zucchini", "Pasta noodle", "Cheese", "Tomato sauce"] },
        { "Recipe Name": "Shrimp and Coconut Rice", "Ingredients": ["Shrimp", "Coconut", "Rice", "Garlic", "Ginger"] },
        { "Recipe Name": "Tofu and Broccoli with Peanut Sauce", "Ingredients": ["Tofu", "Broccoli", "Peanut", "Soy sauce"] },
        { "Recipe Name": "Bacon and Potato Frittata", "Ingredients": ["Bacon", "Potato", "Egg", "Cheese", "Onion"] },
        { "Recipe Name": "Avocado and Tomato Soup", "Ingredients": ["Avocado", "Tomato", "Garlic", "Cilantro"] },
        { "Recipe Name": "Spinach and Walnut Bread", "Ingredients": ["Spinach", "Walnut", "Flour", "Egg"] },
        { "Recipe Name": "Chicken and Bean Chili", "Ingredients": ["Chicken", "Bean", "Tomato", "Onion", "Jalapeno hot sauce"] },
        { "Recipe Name": "Pork and Cabbage Stir-Fry with Apples", "Ingredients": ["Pork", "Cabbage", "Apple", "Soy sauce"] },
        { "Recipe Name": "Beef and Carrot Stew", "Ingredients": ["Beef", "Carrot", "Potato", "Onion"] },
        { "Recipe Name": "Shrimp and Zucchini with Lemon Butter", "Ingredients": ["Shrimp", "Zucchini", "Lemon", "Butter", "Garlic"] },
        { "Recipe Name": "Tofu and Corn Fritters", "Ingredients": ["Tofu", "Corn", "Flour", "Egg"] },
        { "Recipe Name": "Bacon and Cheese Omelette", "Ingredients": ["Bacon", "Cheese", "Egg", "Onion"] },
        { "Recipe Name": "Avocado and Pineapple Salsa with Shrimp", "Ingredients": ["Avocado", "Pineapple", "Shrimp", "Cilantro"] },
        { "Recipe Name": "Spinach and Coconut Curry with Tofu", "Ingredients": ["Spinach", "Coconut", "Tofu", "Rice"] },
        { "Recipe Name": "Chicken and Mushroom Risotto", "Ingredients": ["Chicken", "Mushroom", "Rice", "Cheese"] },
        { "Recipe Name": "Pork and Zucchini Noodles with Tomato Sauce", "Ingredients": ["Pork", "Zucchini", "Tomato sauce", "Garlic", "Olive oil"] },
        { "Recipe Name": "Beef and Spinach Meatballs with Tomato Sauce", "Ingredients": ["Beef", "Spinach", "Bread", "Egg", "Tomato sauce"] },
        { "Recipe Name": "Shrimp and Avocado Tacos with Cilantro Lime Crema", "Ingredients": ["Shrimp", "Avocado", "Lime", "Cilantro", "Yogurt", "Jalapeno hot sauce"] },
        { "Recipe Name": "Tofu and Peanut Butter Curry with Coconut Rice", "Ingredients": ["Tofu", "Peanut", "Coconut", "Rice", "Cumin", "Ginger"] },
        { "Recipe Name": "Bacon, Lettuce, Avocado, Tomato (BLAT) Sandwich", "Ingredients": ["Bacon", "Lettuce", "Avocado", "Tomato", "Bread"] },
        { "Recipe Name": "Chicken and Corn Fritters with Honey Mustard Dip", "Ingredients": ["Chicken", "Corn", "Flour", "Egg", "Honey"] },
        { "Recipe Name": "Potato and Mushroom Gratin with Cheese and Garlic", "Ingredients": ["Potato", "Mushroom", "Cheese", "Garlic", "Milk"] },
        { "Recipe Name": "Apple and Walnut Stuffed Pork Loin with Honey Glaze", "Ingredients": ["Pork", "Apple", "Walnut", "Honey", "Onion"] }
    ];

    const imageGrid = document.querySelector('.image-grid');

    function displayRecipes(recipesToDisplay) {
        imageGrid.innerHTML = ''; // Clear previous recipes

        if (recipesToDisplay.length > 0) {
            recipesToDisplay.forEach(recipe => {
                const recipeDiv = document.createElement('div');
                recipeDiv.className = 'image-item';
                recipeDiv.innerHTML = `<p>${recipe["Recipe Name"]}</p>`;
                imageGrid.appendChild(recipeDiv);
            });
        } else {
            imageGrid.innerHTML = '<p>No recipes found with the selected ingredients.</p>';
        }
    }

    function findMatchingRecipes(selected, allRecipes) {
        return allRecipes.filter(recipe => {
            return selected.every(ingredient => recipe.Ingredients.includes(ingredient));
        });
    }

    const matchingRecipes = findMatchingRecipes(selectedIngredients, recipes);
    displayRecipes(matchingRecipes);
});