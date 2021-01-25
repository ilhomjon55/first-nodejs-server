const { fruits } = require('./data.js');

const sortFruits = function (fruitName) {
	let found = [];

	for (let block of fruits) {
		let foundBlock = block.filter((f) => f.fruit === fruitName);

		if (foundBlock.length) {
			found = foundBlock;
		}
	}
	return found;
};

module.exports.sortFruits = sortFruits;
