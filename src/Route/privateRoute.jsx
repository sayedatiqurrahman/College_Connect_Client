import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)


    if (loading) {
        return <p>Loading...</p>
    }

    if (user) {
        return (
            <div>
                {children}
            </div>
        );
    } else {
        return <Navigate to={'/login'} />
    }




};

export default PrivateRoute;