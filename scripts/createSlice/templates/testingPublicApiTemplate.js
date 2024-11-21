const { firstCharUpperCase } = require('../helpers');

module.exports = (sliceName, schemaName) => {
	const Schema = firstCharUpperCase(schemaName);

	return `export { ${sliceName}Reducer } from './model/slices/${sliceName}Slice';
export { ${Schema} } from './model/types/${schemaName}';`;
};
