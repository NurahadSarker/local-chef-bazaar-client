import React, { Children } from 'react';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Components/Loading';
import useAuth from '../Hooks/useAuth';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()

    if (loading) {
        return <Loading></Loading>
    }

    if (user && user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to={`/auth/login`}></Navigate>

};

export default PrivateRoutes;