import { ReactNode, memo } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { ReducersObject, StateSchema } from '../config/StateSchema';

/**
 * @param children - что мы хотим обернуть в Provider?
 * @param initialState - Состояние стейта по умолчанию. Используется только в тестах и сторибуке.
 * Предназначен для мокания стейта.
 * @param asyncReducers - Редюсеры стора по умолчанию. Используется только в тестах и сторибуке.
 * Предназначен для мокания редюсеров.
 * */
interface StoreProviderProps {
	children: ReactNode;
	initialState?: StateSchema;
	asyncReducers?: ReducersObject;
}

/**
 * StoreProvider создаёт стор и оборачивает children в Provider со стором.
 * */
export const StoreProvider = memo((props: StoreProviderProps) => {
	const { children, initialState, asyncReducers } = props;

	const store = createReduxStore(initialState, asyncReducers);

	return <Provider store={store}>{children}</Provider>;
});
