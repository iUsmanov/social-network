const { firstCharUpperCase } = require('../helpers');

module.exports = (sliceName) => {
	const Type = firstCharUpperCase(sliceName);

	return `export interface ${Type} {

}`;
};
