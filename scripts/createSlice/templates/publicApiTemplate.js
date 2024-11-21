const { firstCharUpperCase } = require('../helpers');

module.exports = (componentName, schemaName) => {
	const Schema = firstCharUpperCase(schemaName);

	return `export { ${componentName} } from './components/${componentName}/${componentName}';
export { ${Schema} } from './model/types/${schemaName}';`;
};
