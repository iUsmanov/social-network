import { StateSchema } from '@/app/providers/storeProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getScrollSave = (state: StateSchema) => state.ui.scroll;

export const getScrollByPath = createSelector(
	getScrollSave,
	(state: StateSchema, path: string) => path,
	(scroll, path) => scroll[path] || 0
);
