import React from 'react';
import useAuthContext from '../hooks/useAuthContext';
import { Navigate } from 'react-router';
import Loading from './Loading';

const PrivateRoute = ({children}) => {
    const {user} = useAuthContext()
    // its occured a new erros is navigate is not working for non-autrized user
    if (user === null) return <Loading/>;
    return user ? children : <Navigate to='/login'></Navigate>;
};

export default PrivateRoute;