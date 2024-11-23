// import { UserRole, getUserRoles } from '@/entities/User';
// import { getRouteForbidden } from '@/shared/const/router';
// import { useMemo } from 'react';
// import { useSelector } from 'react-redux';
// import { Navigate, useLocation } from 'react-router-dom';

import { PropsWithChildren } from 'react';

// interface RequireRolesProps {
// 	children: JSX.Element;
// 	roles: UserRole[];
// }

// export const RequireRoles = (props: RequireRolesProps) => {
// 	const { children, roles } = props;
// const userRoles = useSelector(getUserRoles);
// const location = useLocation();

// const hasRequiredRoles = useMemo(() => {
// 	return roles.some((requiredRole) => userRoles?.includes(requiredRole));
// }, [roles, userRoles]);

// if (!hasRequiredRoles) {
// 	return <Navigate to={getRouteForbidden()} state={{ from: location }} replace />;
// }

// 	return children;
// };

export const RequireRoles = (props: PropsWithChildren) => {
	return props.children;
};
