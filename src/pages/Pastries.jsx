import React, { useState, useEffect } from "react";
import ProductList from '../components/Product/ProductList';
import productService from "../services/productService";
import Container from 'react-bootstrap/Container';
import Ingredient from '../components/common/Ingredient';

const Pastries = () => {
  const [products, setProducts] = useState([]);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    if (!isFetched) {
      productService.getProductsByCategory(2).then((json) => {
        setProducts(json);
        setIsFetched(true);
      });
    }
  }, [isFetched]);

  return (
    <div>
      <Container className="my-5 rounded bg-light border-1 border ">
        <h2 className="text-center libre p-5 fs-1">Les Pâtisseries Orientales</h2>
        <Ingredient />
        {products.length > 0 ? (
          <ProductList products={products} />
        ) : (
          <p>Aucun produit disponible pour cette catégorie.</p>
        )}
      </Container>
    </div>
  );
};

export default Pastries;