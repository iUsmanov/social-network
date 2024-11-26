import { memo } from 'react';
import { App } from './App';
import { StoreProvider } from '../providers/storeProvider';

export const RootLayout = memo(() => {
	return (
		<StoreProvider>
			<App />
		</StoreProvider>
	);
});
