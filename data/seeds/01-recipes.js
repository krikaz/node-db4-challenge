exports.seed = function(knex) {
	return knex('recipes')
		.truncate()
		.then(function() {
			return knex('recipes').insert([
				{ name: 'crazy cake' },
				{ name: 'fancy dish' },
				{ name: 'funny pizza' },
			]);
		});
};
