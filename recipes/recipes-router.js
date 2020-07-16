const express = require('express');

const Recipes = require('./recipes-model.js')

const router = express.Router();

router.get('/', (req, res)=>{
    Recipes.getRecipes()
        .then(recipe =>{
            res.status(200).json(recipe)
        })
        .catch(err =>{
            res.status(500).json({message: err.message })
        })
})

router.get('/:id/ingredients', (req, res) => {
    const {id} = req.params

    Recipes.getShoppingList(id)
        .then(ingredients => {
            res.status(200).json(ingredients)
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
})

router.get('/:id/instructions', (req, res) => {
    const {id} = req.params

    Recipes.getInstructions(id)
        .then(instructions => {
            res.status(200).json(instructions)
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
})

module.exports = router;
