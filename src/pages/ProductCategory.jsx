import React, { useState, useEffect } from "react";
import ProductList from '../components/Product/ProductList';
import productService from "../services/productService";
import Container from 'react-bootstrap/Container';
import Ingredient from '../components/common/Ingredient';

const ProductCategory = ({ categoryId, title }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  useEffect(() => {
    setLoading(true);
    productService.getProductsByCategory(categoryId)
      .then((json) => {
        setProducts(json.data);
        setFilteredProducts(json.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Erreur lors de la récupération des produits.');
        setLoading(false);
      });
  }, [categoryId]);

  useEffect(() => {
    if (selectedIngredients.length > 0) {
      const filtered = products.filter(product =>
        selectedIngredients.every(ingredient =>
          product.ingredients.includes(ingredient)
        )
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [selectedIngredients, products]);

  const handleIngredientsChange = (ingredients) => {
    setSelectedIngredients(ingredients);
  };

  return (
    <div>
      <Container className="my-5 rounded border-1 border bg-light">
        <h2 className="text-center libre p-5 fs-1">{title}</h2>
        <Ingredient onIngredientsChange={handleIngredientsChange} />
        {loading && <p className="text-center m-5">Chargement en cours...</p>}
        {error && <p>{error}</p>}
        {filteredProducts.length > 0 ? (
          <ProductList category={categoryId} products={filteredProducts} />
        ) : (
          <p className="text-center m-3">Aucun produit disponible pour cette catégorie.</p>
        )}
      </Container>
    </div>
  );
};

export default ProductCategory;