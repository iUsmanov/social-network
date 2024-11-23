// eslint-disable-next-line fsd-paths-guard/hierarchy-imports-between-layers
import { UserRole } from '@/entities/user';
import { RouteObject } from 'react-router-dom';

export type AppRoutes = 'main' | 'about' | 'forbidden' | 'not_found';

export type AppRouteObject = RouteObject & {
	authOnly?: boolean;
	roles?: UserRole[];
};
