import { Theme } from '../types/theme';
import { LOCAL_STORAGE_KEY_THEME } from './localStorage';

export const fallbackTheme: Theme = (localStorage.getItem(LOCAL_STORAGE_KEY_THEME) as Theme) || 'light';
