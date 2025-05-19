import React from 'react';
import useAuthContext from '../hooks/useAuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user} = useAuthContext()
    // its occured a new erros is navigate is not working for non-autrized user
    if (user === null) return <p className="loading loading-dots loading-xl flex justify-center items-center min-h-screen"></p>;
    return user ? children : <Navigate to='/login'></Navigate>;
};

export default PrivateRoute;