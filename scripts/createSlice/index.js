/**
 * Скрипт для автоматического создания FSD-слайса.
 *
 */

const createTemplate = require('./creators/createTemplate');

const layer = process.argv[2];
const sliceName = process.argv[3];

const layers = ['pages', 'widgets', 'features', 'entities'];

if (!layer || !layers.includes(layer)) {
	throw new Error(`Укажите слой ${layers.join(' или ')}`);
}

if (!sliceName) {
	throw new Error(`Укажите название слайса`);
}

createTemplate(layer, sliceName);
