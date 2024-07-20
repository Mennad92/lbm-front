import React, { useState, useEffect } from "react";
import ProductList from '../components/Product/ProductList';
import productService from "../services/productService";
import Container from 'react-bootstrap/Container';

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
      <Container className="my-5 rounded bg-light">
      <h2 className="text-center libre p-5 fs-1">Les Biscuits</h2>


      
      {products.length > 0 ? (
        <ProductList category="biscuits" products={{ products }} />
      ) : (
        <p>Aucun produit disponible pour cette catégorie.</p>
      )}
      </Container>
    </div>
  );
};

export default Biscuits;
