const fs = require('fs/promises');
const { resolveRoot } = require('../helpers');
const reduxSliceTemplate = require('../templates/reduxSliceTemplate');
const schemaTypeTemplate = require('../templates/schemaTypeTemplate');
const typeTemplate = require('../templates/typeTemplate');

module.exports = async (layer, sliceName) => {
	const resolveModelPath = (...segments) => resolveRoot('src', layer, sliceName, 'model', ...segments);

	const createModelStructure = async () => {
		try {
			await fs.mkdir(resolveModelPath());
			await fs.mkdir(resolveModelPath('types'));
			await fs.mkdir(resolveModelPath('slices'));
			await fs.mkdir(resolveModelPath('selectors'));
			await fs.mkdir(resolveModelPath('services'));
		} catch (e) {
			console.log(`Не удалось создать model для слайса ${sliceName}. Error: ${e}`);
		}
	};

	const createReduxSlice = async () => {
		try {
			await fs.writeFile(
				resolveModelPath('slices', `${sliceName}Slice.ts`),
				reduxSliceTemplate(sliceName)
			);
		} catch (e) {
			console.log(`Не удалось создать слайс ${sliceName}. Error: ${e}`);
		}
	};

	const createSchemaType = async () => {
		try {
			await fs.writeFile(
				resolveModelPath('types', `${sliceName}Schema.ts`),
				schemaTypeTemplate(sliceName)
			);
		} catch (e) {
			console.log(`Не удалось создать тип схемы стейта. Error: ${e}`);
		}
	};

	const createType = async () => {
		try {
			await fs.writeFile(resolveModelPath('types', `${sliceName}.ts`), typeTemplate(sliceName));
		} catch (e) {
			console.log(`Не удалось создать тип. Error: ${e}`);
		}
	};

	await createModelStructure();
	await createReduxSlice();
	await createSchemaType();
	await createType();
};
