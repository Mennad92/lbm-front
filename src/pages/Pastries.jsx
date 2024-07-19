import React from 'react';
import ProductList from '../components/Product/ProductList';

const Pastries = () => {
  return (
    <div>
      <h2>Pâtisseries</h2>
      <ProductList category="pastries" />
    </div>
  );
};

export default Pastries;