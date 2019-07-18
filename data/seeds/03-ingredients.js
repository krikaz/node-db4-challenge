exports.seed = function(knex) {
	return knex('ingredients')
		.truncate()
		.then(function() {
			return knex('ingredients').insert([
				{ name: 'g of chocolate' },
				{ name: 'g of flour' },
				{ name: 'cL of milk' },
				{ name: 'eggs' },
				{ name: 'yoghurt nature' },
				{ name: 'g of ham' },
				{ name: 'g of cheese' },
				{ name: 'g of mushrooms' },
			]);
		});
};
