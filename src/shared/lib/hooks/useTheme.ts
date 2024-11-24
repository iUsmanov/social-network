import { Theme } from '@/shared/types/theme';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { fallbackTheme } from '@/shared/consts/theme';
import { LOCAL_STORAGE_KEY_THEME } from '@/shared/consts/localStorage';

interface UseThemeReturn {
	theme: Theme;
	changeTheme: (theme: Theme) => void;
}
export function useTheme(): UseThemeReturn {
	const { setTheme, theme } = useContext(ThemeContext);

	const changeTheme = (newTheme: Theme) => {
		document.body.setAttribute('data-theme', newTheme);
		setTheme?.(newTheme);
		localStorage.setItem(LOCAL_STORAGE_KEY_THEME, newTheme);
	};

	return {
		theme: theme || fallbackTheme,
		changeTheme,
	};
}
