const fs = require('fs/promises');
const { resolveRoot } = require('../helpers');
const createModel = require('./createModel');
const createComponents = require('./createComponents');
const createPublicApi = require('./createPublicApi');

module.exports = async (layer, sliceName) => {
	try {
		await fs.mkdir(resolveRoot('src', layer, sliceName));
	} catch (e) {
		console.log(`Не удалось создать директорию для слайса ${sliceName}.`);
	}

	await createModel(layer, sliceName);
	await createComponents(layer, sliceName);
	await createPublicApi(layer, sliceName);
};
