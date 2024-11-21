const { resolveRoot, firstCharUpperCase } = require('../helpers');
const fs = require('fs/promises');
const publicApiTemplate = require('../templates/publicApiTemplate');
const testingPublicApiTemplate = require('../templates/testingPublicApiTemplate');

module.exports = async (layer, sliceName) => {
	const resolvePublicApiPath = (...segments) => resolveRoot('src', layer, sliceName, ...segments);
	const componentName = firstCharUpperCase(sliceName);
	const schemaName = `${sliceName}Schema`;

	const createIndex = async () => {
		try {
			await fs.writeFile(
				resolvePublicApiPath('index.ts'),
				publicApiTemplate(componentName, schemaName)
			);
		} catch (e) {
			console.log(`Не удалось создать PublicApi(index.ts). Error: ${e}`);
		}
	};

	const createTesting = async () => {
		try {
			await fs.writeFile(
				resolvePublicApiPath('testing.ts'),
				testingPublicApiTemplate(sliceName, schemaName)
			);
		} catch (e) {
			console.log(`Не удалось создать testingPublicApi(testing.ts). Error: ${e}`);
		}
	};

	await createIndex();
	await createTesting();
};
