exports.up = function(knex) {
	return knex.schema
		.createTable('recipes', table => {
			table.increments();
			table.text('name', 128).notNullable();
		})
		.createTable('ingredients', table => {
			table.increments();
			table.text('name', 128).notNullable();
		})
		.createTable('quantities', table => {
			table.increments();
			table.float('quantity').notNullable();
		});
};

exports.down = function(knex) {
	return knex.schema
		.dropTableIfExists('recipes')
		.dropTableIfExists('ingredients')
		.dropTableIfExists('quantities');
};
