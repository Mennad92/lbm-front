import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';

const ProductList = ({ category, products = [] }) => {
  const productList = products; 

  const handleAddToCart = (product) => {
    console.log('Produit ajouté au panier:', product);
  };

  return (
    <div className='text-center'>
      {productList.length > 0 ? (
        <Row className="mt-5">
          {productList.map((product) => {
            const price = parseFloat(product.price);
            const formattedPrice = isNaN(price) ? 'N/A' : price.toFixed(2);
            
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
