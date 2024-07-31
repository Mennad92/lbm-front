import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Pastries from '../pages/Pastries';
import Biscuits from '../pages/Biscuits';
import { action as loginAction, Login } from '../pages/Login';
import Order from '../pages/Order';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import PrivateRoute from '../components/PrivateRoute';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pastries" element={<Pastries />} />
      <Route path="/biscuits" element={<Biscuits />} />
      <Route path="/login" element={<Login />} action={loginAction}/>
      <Route path="/register" element={<Register />} /> 
      <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
      <Route path="/order" element={<Order />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;