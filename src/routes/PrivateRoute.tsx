import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../redux/hook';

interface PublicRouteProps {
    children: ReactNode;
}
const PrivateRoute: React.FC<PublicRouteProps> = ({ children }) => {
    const { user } = useAppSelector(state => state.user);
    if (user?.email) {
        return <>{children}</>
    }
    return <Navigate to="/" />;
};

export default PrivateRoute;
