import { fallbackTheme } from '@/shared/consts/theme';
import { ThemeContext, ThemeContextProps } from '@/shared/lib/context/ThemeContext';
import { Theme } from '@/shared/types/theme';
import { memo, ReactNode, useEffect, useMemo, useState } from 'react';

interface ThemeProviderProps {
	initialTheme?: Theme;
	children: ReactNode;
}

export const ThemeProvider = memo((props: ThemeProviderProps) => {
	const { children, initialTheme } = props;
	const [theme, setTheme] = useState<Theme>(initialTheme || fallbackTheme);
	const [isThemeInited, setIsThemeInited] = useState<boolean>(false);

	const defaultProps = useMemo<ThemeContextProps>(
		() => ({
			theme,
			setTheme,
		}),
		[theme]
	);

	useEffect(() => {
		if (!isThemeInited) {
			setTheme(theme);
			setIsThemeInited(true);
			document.body.setAttribute('data-theme', theme);
		}
	}, [isThemeInited, theme]);

	return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
});
