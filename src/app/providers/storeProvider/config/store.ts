import { Action, Reducer, configureStore } from '@reduxjs/toolkit';
import { ReducersObject, StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';
import { rtkApi } from '@/shared/api/rtkApi';
import { uiReducer } from '@/shared/lib/UI';

/**
 * @param children - что мы хотим обернуть в Provider?
 * @param initialState - Состояние стейта по умолчанию. Используется только в тестах и сторибуке.
 * Предназначен для мокания стейта.
 * @param asyncReducers - Редюсеры стора по умолчанию. Используется только в тестах и сторибуке.
 * Предназначен для мокания редюсеров.
 * */
export const createReduxStore = (initialState?: StateSchema, asyncReducers?: ReducersObject) => {
	const rootReducer: ReducersObject = {
		...asyncReducers,
		ui: uiReducer,
		[rtkApi.reducerPath]: rtkApi.reducer,
	};

	const reducerManager = createReducerManager(rootReducer);

	const store = configureStore({
		reducer: reducerManager.reduce as Reducer<StateSchema, Action>,
		preloadedState: initialState,
		devTools: __IS_DEV__,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(rtkApi.middleware),
	});
	// @ts-expect-error idk
	store.reducerManager = reducerManager;

	return store;
};
