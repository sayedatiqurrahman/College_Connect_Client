import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import Loading from '../components/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)


    if (loading) {
        return <Loading/>
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