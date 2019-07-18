exports.seed = function(knex) {
	return knex('recipes')
		.truncate()
		.then(function() {
			return knex('recipes').insert([
				{ recipe_id: 1, step_order: 1, quantity_id: 2, ingredient_id: 7 },
				{ recipe_id: 1, step_order: 2, quantity_id: 5, ingredient_id: 3 },
				{ recipe_id: 1, step_order: 3, quantity_id: 3, ingredient_id: 8 },
				{ recipe_id: 2, step_order: 1, quantity_id: 5, ingredient_id: 1 },
				{ recipe_id: 2, step_order: 2, quantity_id: 4, ingredient_id: 6 },
				{ recipe_id: 2, step_order: 3, quantity_id: 1, ingredient_id: 7 },
				{ recipe_id: 2, step_order: 4, quantity_id: 2, ingredient_id: 5 },
				{ recipe_id: 3, step_order: 1, quantity_id: 4, ingredient_id: 5 },
				{ recipe_id: 3, step_order: 2, quantity_id: 5, ingredient_id: 4 },
				{ recipe_id: 3, step_order: 3, quantity_id: 2, ingredient_id: 2 },
			]);
		});
};
