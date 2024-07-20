import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const token = localStorage.getItem('accessToken');
  const location = useLocation();

  return token ? (
    Component
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default PrivateRoute;