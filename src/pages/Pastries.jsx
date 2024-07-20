import React, { useState, useEffect } from 'react';
import ProductList from '../components/Product/ProductList';
import productService from "../services/productService";

const Pastries = () => {
  const [products, setProducts] = useState([]);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    if (!isFetched) {
      productService.getProducts().then((json) => {
        setProducts(json);
        setIsFetched(true);
      });
    }
  }, [isFetched]);

  return (
    <div>
      <h2>Pâtisseries</h2>
      {products.length > 0 ? (
        <ProductList category="pastries" products={products} />
      ) : (
        <p>Aucun produit disponible pour cette catégorie.</p>
      )}
    </div>
  );
};

export default Pastries;
