const express = require('express');
const { sortFruits } = require('./lib.js');

const app = express();

const PORT = process.env.PORT || 4000;

app.get('/', (_, res) => {
	res.send('Welcome!');
});

app.get('/search', (req, res) => {
	const askedFruit = req.query.query;

	res.send(sortFruits(askedFruit));
});

app.listen(PORT, () => console.log(`Server ready localhost at ${PORT}`));
