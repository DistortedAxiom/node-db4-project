const dB = require('../data/db-config.js')
const db = require('../data/db-config.js')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes')
}

function getShoppingList(recipe_id) {
    return db('recipe_ingredients')
        .where({recipe_id})
        .select('recipe_ingredients.quantity', 'ingredients.ingredient_name')
        .join('ingredients', 'ingredients.id', 'recipe_ingredients.id')
}

function getInstructions(recipe_id) {
    return db('instructions')
        .where({recipe_id})
        .select('recipes.recipe_name', 'instructions.step_number', 'instructions.instruction')
        .join('recipes', 'instructions.recipe_id', 'recipes.id')
        .orderBy('instructions.step_number')
}
