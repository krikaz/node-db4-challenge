const express = require('express');
const knex = require('knex');
const db = knex(require('./knexfile').development);

const app = express();
app.use(express.json());

function getRecipes() {
	return db.select('recipes.name').from('recipes');
}

function getShoppingList(recipe_id) {
	return db
		.select('quantity', 'ingredients.name')
		.from('steps')
		.innerJoin('quantities', 'quantities.id', 'steps.quantity_id')
		.innerJoin('ingredients', 'ingredients.id', 'steps.ingredient_id')
		.where('steps.recipe_id', recipe_id);
}

function getInstructions(recipe_id) {
	return db
		.select('step_order', 'quantity', 'ingredients.name')
		.from('steps')
		.innerJoin('quantities', 'quantities.id', 'steps.quantity_id')
		.innerJoin('ingredients', 'ingredients.id', 'steps.ingredient_id')
		.where('steps.recipe_id', recipe_id);
}

function getRecipesFromSingleIngredient(ingredient_id) {
	return db
		.select('recipes.name')
		.from('recipes')
		.innerJoin('steps', 'recipes.id', 'steps.recipe_id')
		.where('steps.ingredient_id', ingredient_id);
}

app.get('/api/recipes', async (req, res, next) => {
	try {
		const result = await getRecipes();
		res.json(result);
	} catch (error) {
		next(error);
	}
});

app.get('/api/recipes/:id/shoppingList', async (req, res, next) => {
	try {
		const { id } = req.params;
		const result = await getShoppingList(id);
		res.json(result);
	} catch (error) {
		next(error);
	}
});

app.get('/api/recipes/:id/instructions', async (req, res, next) => {
	try {
		const { id } = req.params;
		const result = await getInstructions(id);
		res.json(result);
	} catch (error) {
		next(error);
	}
});

app.get('/api/ingredients/:id/recipes', async (req, res, next) => {
	try {
		const { id } = req.params;
		const result = await getRecipesFromSingleIngredient(id);
		res.json(result);
	} catch (error) {
		next(error);
	}
});

app.listen(4000, () => {
	console.log('listening on 4000');
});
