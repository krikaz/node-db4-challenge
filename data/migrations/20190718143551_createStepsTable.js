exports.up = function(knex) {
	return knex.schema.createTable('steps', table => {
		table.increments();
		table
			.integer('recipe_id')
			.references('id')
			.inTable('recipes');
		table.integer('step_order');
		table
			.integer('quantity_id')
			.references('id')
			.inTable('quantities');
		table
			.integer('ingredient_id')
			.references('id')
			.inTable('ingredients');
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('steps');
};
