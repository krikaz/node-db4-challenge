exports.seed = function(knex) {
	return knex('ingredients')
		.truncate()
		.then(function() {
			return knex('recipes').insert([
				{ name: 'g of chocolate' },
				{ name: 'g of flour' },
				{ name: 'cL of milk' },
				{ name: 'eggs' },
				{ name: 'yoghurt nature' },
				{ name: 'ham' },
				{ name: 'cheese' },
				{ name: 'mushrooms' },
			]);
		});
};
