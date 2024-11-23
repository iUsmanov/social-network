import {
	getRouteAbout,
	getRouteForbidden,
	getRouteMain,
	getRouteNotFound,
} from '@/shared/consts/router';
import { createBrowserRouter } from 'react-router-dom';
import { AppRouteObject, AppRoutes } from '@/shared/types/router';
import { RequireAuth } from '../components/RouterProvider/RequireAuth';
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { RootLayout } from '../../../components/RootLayout';

const routeConfig: Record<AppRoutes, AppRouteObject> = {
	main: {
		path: getRouteMain(),
		element: <MainPage />,
	},
	about: {
		path: getRouteAbout(),
		element: <AboutPage />,
	},
	forbidden: {
		path: getRouteForbidden(),
		element: <ForbiddenPage />,
	},
	not_found: {
		path: getRouteNotFound(),
		element: <NotFoundPage />,
	},
};

export const routes = Object.values(routeConfig).map((route) => {
	if (route.authOnly) {
		const routeElement = route.element;
		route.element = <RequireAuth>{routeElement as JSX.Element}</RequireAuth>;
	}

	if (route.roles) {
		// const routeElement = route.element;
		// route.element = <RequireRoles roles={route.roles}>{routeElement as JSX.Element}</RequireRoles>;
	}

	return route;
});
export const router = createBrowserRouter([
	{
		element: <RootLayout />,
		children: routes,
	},
]);
