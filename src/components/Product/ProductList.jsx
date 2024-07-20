import React, { useState } from 'react';

const ProductList = ({ category, products = [] }) => {
const [productList] = useState (products.products);
  return (
    <div>
      <h2>Produits pour {category}</h2>
      {productList.length > 0 ? (
        <ul>
          {productList.map((product) => (
            <li key={product.id}>
              {product.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun produit disponible pour cette catégorie.</p>
      )}
    </div>
  );
};

export default ProductList;