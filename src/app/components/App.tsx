import { memo } from 'react';
import { Outlet } from 'react-router-dom';

export const App = memo(() => {
	return <Outlet />;
});
