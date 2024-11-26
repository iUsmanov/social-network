// #store
import { createReduxStore } from './store';
import { Action, Reducer, ReducersMapObject, Store } from '@reduxjs/toolkit';
import { rtkApi } from '@/shared/api/rtkApi';
import { UISchema } from '@/shared/lib/UI';

/**
 * StateSchema описывает состояние нашего `store`.
 * */
export interface StateSchema {
	// user: UserSchema;
	ui: UISchema;
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

	// Async reducers
}

/**
 * ReducerManager описывает методы нашего reducerManager.
 * */
export interface ReducerManager {
	getReducerMap: () => ReducersObject;
	reduce: (state: StateSchema, action: Action) => StateSchema;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
}
/**
 * ReduxStoreWithManager является типом нашего `store` и наделяет его reducerManager-ом.
 * */
export interface ReduxStoreWithManager extends Store<StateSchema> {
	reducerManager: ReducerManager;
}
/**
 * Тип ThunkConfig описывает конфиг наших `AsyncThunks`.
 * */
export interface ThunkConfig<T> {
	rejectValue: T;
	// extra: ThunkExtraArg;
	state: StateSchema;
}

/**
 * Тип AppDispatch описывает наш dispatch.
 * */
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

/**
 * Тип StateSchemaKey описывает, какие поля есть в нашем корневом стейт.
 * */
export type StateSchemaKey = keyof StateSchema;

/**
 * Тип ReducersObject описывает, какому полю в корневом стейте соответствует какой редюсер.
 * */
export type ReducersObject = ReducersMapObject<StateSchema, Action>;
