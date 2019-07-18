exports.seed = function(knex) {
	return knex('quantities')
		.truncate()
		.then(function() {
			return knex('quantities').insert([
				{ quantity: 25 },
				{ quantity: 50 },
				{ quantity: 100 },
				{ quantity: 200 },
				{ quantity: 500 },
			]);
		});
};
