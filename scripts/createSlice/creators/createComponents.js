const fs = require('fs/promises');
const { resolveRoot, firstCharUpperCase } = require('../helpers');
const componentTemplate = require('../templates/componentTemplate');
const storyTemplate = require('../templates/storyTemplate');
const styleTemplate = require('../templates/styleTemplate');

module.exports = async (layer, sliceName) => {
	const resolveComponentsPath = (...segments) =>
		resolveRoot('src', layer, sliceName, 'components', ...segments);

	const createComponentsDir = async () => {
		try {
			await fs.mkdir(resolveComponentsPath());
		} catch (e) {
			console.log(`Не удалось создать папку components. Error: ${e}`);
		}
	};

	const createComponents = async () => {
		try {
			const componentName = firstCharUpperCase(sliceName);
			// Create head component
			await fs.mkdir(resolveComponentsPath(componentName));
			await fs.writeFile(
				resolveComponentsPath(componentName, `${componentName}.tsx`),
				componentTemplate(sliceName)
			);
			// Create Story
			await fs.writeFile(
				resolveComponentsPath(componentName, `${componentName}.stories.ts`),
				storyTemplate(layer, componentName)
			);
			// Create SCSS-file
			await fs.writeFile(
				resolveComponentsPath(componentName, `${componentName}.module.scss`),
				styleTemplate(sliceName)
			);
		} catch (e) {
			console.log(`Не удалось создать Компоненты. Error: ${e}`);
		}
	};

	await createComponentsDir();
	await createComponents();
};
