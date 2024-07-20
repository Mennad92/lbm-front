import React, { useState, useEffect } from "react";
import ProductList from '../components/Product/ProductList';
import productService from "../services/productService";

const Biscuits = () => {
  const [products, setProducts] = useState([]);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    !isFetched &&
      productService.getProducts().then((json) => {
        setProducts(json);
        setIsFetched(true);
      });
  }, [isFetched]);
  return (
    <div>
      <h2>Biscuits</h2>
      {products.length > 0 ? (
        <ProductList category="biscuits" products={{ products }} />
      ) : (
        <p>Aucun produit disponible pour cette catégorie.</p>
      )}
    </div>
  );
};

export default Biscuits;
