import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import NotFound from '../pages/NotFound';
import Pastries from '../pages/Pastries';
import Biscuits from '../pages/Biscuits';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/pastries" element={<Pastries />} />
      <Route path="/biscuits" element={<Biscuits />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;