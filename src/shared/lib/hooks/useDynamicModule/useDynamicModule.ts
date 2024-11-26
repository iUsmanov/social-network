// #store
import { useEffect } from 'react';
import { useAppDispatch } from '../useAppDispatch/useAppDispatch';
import { ReduxStoreWithManager, StateSchema, StateSchemaKey } from '@/app/providers/storeProvider';
import { useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
	[name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

/**
 * useDynamicModuleProps
 * @param reducers - массив редюсеров, которые нужно добавить.
 * @param saveAfterUnmount - сохранять ли редюсер в стейте после демонтирования компонента?
 * */
interface useDynamicModuleProps {
	reducers: ReducersList;
	saveAfterUnmount?: boolean;
}

/**
 * Хук useDynamicModule служит для добавления и удаления редюсеров.
 * Использует для своих целей reducerManager.
 * */
export const useDynamicModule = (props: useDynamicModuleProps) => {
	const { saveAfterUnmount = false, reducers } = props;
	const dispatch = useAppDispatch();
	const store = useStore() as ReduxStoreWithManager;

	useEffect(() => {
		Object.entries(reducers).forEach(([name, reducer]) => {
			if (store.getState()[name as StateSchemaKey]) return;
			store.reducerManager.add(name as StateSchemaKey, reducer);
			dispatch({ type: `@INIT ${name} reducer` });
		});
		return () => {
			Object.entries(reducers).forEach(([name, reducer]) => {
				if (saveAfterUnmount) return;
				store.reducerManager.remove(name as StateSchemaKey);
				dispatch({ type: `@DESTROY ${name} reducer` });
			});
		};
		// eslint-disable-next-line
	}, []);
};
