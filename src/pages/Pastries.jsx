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
      productService.getProducts().then((json) => {
        console.log('Produits récupérés:', json);
        const filteredProducts = json.filter(product => product.category === "pastries");
        console.log('Produits filtrés:', filteredProducts);
        setProducts(filteredProducts);
        setIsFetched(true);
      }).catch(error => {
        console.error('Erreur lors de la récupération des produits:', error);
      });
    }
  }, [isFetched]);

  return (
    <div>
      <Container className="my-5 rounded bg-light">
        <h2 className="text-center libre p-5 fs-1">Les Pâtisseries</h2>
        <Ingredient />
        {products.length > 0 ? (
          <ProductList category="pastries" products={products} />
        ) : (
          <p>Aucun produit disponible pour cette catégorie.</p>
        )}
      </Container>
    </div>
  );
};

export default Pastries;
