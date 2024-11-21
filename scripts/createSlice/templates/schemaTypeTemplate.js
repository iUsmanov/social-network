const { firstCharUpperCase } = require('../helpers');

module.exports = (sliceName) => {
	const Schema = firstCharUpperCase(`${sliceName}Schema`);

	return `export interface ${Schema} {

}`;
};
