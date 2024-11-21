const path = require('path');

const resolveRoot = (...segments) => path.resolve(__dirname, '..', '..', ...segments);
const firstCharUpperCase = (str) => str[0].toUpperCase() + str.slice(1);

module.exports = {
	resolveRoot,
	firstCharUpperCase,
};
