import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import NotFound from '../pages/NotFound';
import Pastries from '../pages/Pastries';
import Biscuits from '../pages/Biscuits';
import Login from '../pages/Login';
import PrivateRoute from '../components/PrivateRoute';
import ProtectedComponent from '../components/ProtectedComponent';
import Logout from '../pages/Logout';  // Ajoutez la route de déconnexion si nécessaire

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/pastries" element={<Pastries />} />
      <Route path="/biscuits" element={<Biscuits />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      
      <Route path="/protected" element={<PrivateRoute element={<ProtectedComponent />} />} />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
