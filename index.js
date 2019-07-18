const express = require('express');
const knex = require('knex');
const db = knex(require('./knexfile').development);

const app = express();
app.use(express.json());

function getRecipes() {
	return db
		.select('recipes.name')
		.from('recipes')
}

function getShoppingList(recipe_id) {
	return db
		.select('recipes.name', 'quantities.quantity', 'ingredients.name')
		.from('recipes')
		.innerJoin('quantities')
}

app.listen(4000, () => {
	console.log('listening on 4000');
});
