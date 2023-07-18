import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../redux/hook';

interface PublicRouteProps {
    children: ReactNode;
}
const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
    const { user } = useAppSelector(state => state.user);
    if (user?.email) return <Navigate to="/" />;
    if (!user?.email) return <>{children}</>;
};

export default PublicRoute;
