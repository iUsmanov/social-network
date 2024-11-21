module.exports = (layer, componentName) => {
	return `import { Meta, StoryObj } from '@storybook/react';
import { ${componentName} } from './${componentName}';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

const meta = {
	title: '${layer}/${componentName}',
	component: ${componentName},
	tags: ['autodocs'],
	argTypes: {},
	args: {
		
	},
} satisfies Meta<typeof ${componentName}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalLight: Story = {
	args: {},
	decorators: [],
};

export const NormalDark: Story = {
	args: {},
	decorators: [ThemeDecorator('app-dark-theme')],
};

export const NormalOrange: Story = {
	args: {},
	decorators: [ThemeDecorator('app-orange-theme')],
};`;
};
