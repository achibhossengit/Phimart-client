import React from 'react';
import useAuthContext from '../hooks/useAuthContext';
import { Navigate } from 'react-router';
import Loading from './Loading';

const PrivateRoute = ({children}) => {
    const {authTokens, user} = useAuthContext()
    if(!authTokens) {
        return <Navigate to='/login'></Navigate>;
    }
    console.log(!authTokens);
    if (user === null) return <Loading/>;
    return user ? children : <Navigate to='/login'></Navigate>;
};

export default PrivateRoute;