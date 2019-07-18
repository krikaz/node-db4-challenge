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
		.select('quantities.quantity', 'ingredients.name')
		.from('steps')
		.innerJoin('quantities', 'quantities.id', 'steps.quantity_id')
		.innerJoin('ingredients', 'ingredients.id', 'steps.ingredient_id')
		.where('steps.recipe_id', recipe_id);
}

app.listen(4000, () => {
	console.log('listening on 4000');
});
