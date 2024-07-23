import React, { useState } from 'react';
import { Card, Row, Col, Button, ButtonGroup } from 'react-bootstrap';

const ProductList = ({ category, products = [] }) => {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (productId, change) => {
    setQuantities(prevQuantities => {
      const currentQuantity = prevQuantities[productId] || 1;
      const newQuantity = currentQuantity + change;
      return {
        ...prevQuantities,
        [productId]: newQuantity > 0 ? newQuantity : 1,
      };
    });
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    console.log('Produit ajouté au panier:', product, 'Quantité:', quantity);
  };

  return (
    <div className='text-center'>
      {products.length > 0 ? (
        <Row className="mt-5">
          {products.map((product) => {
            const price = parseFloat(product.price);
            const formattedPrice = isNaN(price) ? 'N/A' : price.toFixed(2);
            const quantity = quantities[product.id] || 1;
            
            return (
              <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
                <Card className="h-100">
                  {product.illustration && (
                    <Card.Img variant="top" className='product-img' src={product.illustration} alt={product.name} />
                  )}
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                      {product.description}
                    </Card.Text>
                    <Card.Text>
                      <strong>Price:</strong> {formattedPrice}€
                    </Card.Text>
                    <div className="mb-3">
                      <ButtonGroup>
                        <Button variant="secondary" onClick={() => handleQuantityChange(product.id, -1)}>-</Button>
                        <Button variant="light" disabled>{quantity}</Button>
                        <Button variant="secondary" onClick={() => handleQuantityChange(product.id, 1)}>+</Button>
                      </ButtonGroup>
                    </div>
                    <Button variant="secondary" onClick={() => handleAddToCart(product)}>Ajouter au panier</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      ) : (
        <p>Aucun produit disponible pour cette catégorie.</p>
      )}
    </div>
  );
};

export default ProductList;