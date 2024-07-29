// Pastries.js
import React, { useState, useEffect } from "react";
import ProductList from '../components/Product/ProductList';
import productService from "../services/productService";
import Container from 'react-bootstrap/Container';
import Ingredient from '../components/common/Ingredient';

const Pastries = () => {
  const [products, setProducts] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isFetched) {
      productService.getProductsByCategory(2)
        .then((json) => {
          setProducts(json);
          setIsFetched(true);
          setLoading(false);
        })
        .catch((err) => {
          setError('Erreur lors de la récupération des produits.');
          setLoading(false);
        });
    }
  }, [isFetched]);

  return (
    <div>
      <Container className="my-5 rounded bg-light border-1 border ">
        <h2 className="text-center libre p-5 fs-1">Les Pâtisseries Orientales</h2>
        <Ingredient />
        {loading && <p className="text-center m-5">Chargement en cours...</p>}
        {error && <p>{error}</p>}
        {products.length > 0 ? (
          <ProductList category={2} products={products} />
        ) : (
          <p className="text-center m-3">Aucun produit disponible pour cette catégorie.</p>
        )}
      </Container>
    </div>
  );
};

export default Pastries;
