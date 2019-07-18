exports.seed = function(knex) {
	return knex('recipes')
		.truncate()
		.then(function() {
			return knex('recipes').insert([
				{ name: 'chocolate cake' },
				{ name: 'yoghurt cake' },
				{ name: 'pizza' },
			]);
		});
};
