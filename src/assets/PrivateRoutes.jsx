import React, { useContext } from 'react';
import { authProvider } from './Provider/Provider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
  const { user, loading, setLoading } = useContext(authProvider)
  if (loading) {
    // Return the spinner while loading
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  if (!user) {
    return <Navigate to='/login'></Navigate>
  }
  return children
};

export default PrivateRoutes;

