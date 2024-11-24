import { ComponentType } from 'react';
import { ThemeProvider } from '../../components/ThemeProvider';

export const withTheme = (Component: ComponentType) => {
	return () => {
		const theme = 'light';
		return (
			<ThemeProvider initialTheme={theme}>
				<Component />
			</ThemeProvider>
		);
	};
};
