import { memo } from 'react';
import { Outlet } from 'react-router-dom';
import { withTheme } from '../providers/themeProvider';

const App = memo(() => {
	return <Outlet />;
});

const AppWithTheme = withTheme(App);
export { AppWithTheme as App };
