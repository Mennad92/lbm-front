import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Pastries from '../pages/Pastries';
import Biscuits from '../pages/Biscuits';
import Login from '../pages/Login';
import Profile from '../pages/Profile'; // Importer le composant Profile
import PrivateRoute from '../components/PrivateRoute';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pastries" element={<Pastries />} />
      <Route path="/biscuits" element={<Biscuits />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profil" element={<PrivateRoute element={<Profile />} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;