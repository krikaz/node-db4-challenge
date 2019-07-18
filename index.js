const express = require('express');
const knex = require('knex');
const db = knex(require('./knexfile').development);

const app = express();
app.use(express.json());

app.listen(4000, () => {
	console.log('listening on 4000');
});
