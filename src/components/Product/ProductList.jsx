import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Button, ButtonGroup, Toast, ToastContainer, Modal } from 'react-bootstrap';
import { useCart } from '../../contexts/CartContext';

const ProductList = ({ category, products = [] }) => {
  const [quantities, setQuantities] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [ingredientsList, setIngredientsList] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/ingredients/');
        const data = await response.json();
        setIngredientsList(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des ingrédients :', error);
      }
    };

    fetchIngredients();
  }, []);

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
    addToCart(product, quantity);
    setToastMessage(`Produit ${product.name} ajouté au panier`);
    setShowToast(true);
  };

  const handleShowModal = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className='text-center'>
      {products.length > 0 ? (
        <>
          <Row className="mt-5">
            {products.map((product) => {
              const price = parseFloat(product.price);
              const formattedPrice = isNaN(price) ? 'N/A' : price.toFixed(2);
              const quantity = quantities[product.id] || 1;

              return (
                <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
                  <Card className="h-100">
                    {product.illustration && (
                      <Card.Img
                        variant="top"
                        className='product-img'
                        src={product.illustration}
                        alt={product.name}
                        onClick={() => handleShowModal(product)}
                        style={{ cursor: 'pointer' }}
                      />
                    )}
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>
                        {product.description}
                      </Card.Text>
                      <Card.Text>
                        <strong>Prix:</strong> {formattedPrice}€
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
          <ToastContainer className="position-fixed top-50 start-50 translate-middle p-3">
            <Toast
              show={showToast}
              onClose={() => setShowToast(false)}
              delay={3000}
              autohide
            >
              <Toast.Body>{toastMessage}</Toast.Body>
            </Toast>
          </ToastContainer>

          <Modal show={!!selectedProduct} onHide={handleCloseModal} centered>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProduct?.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body className='text-center'>
              {selectedProduct && (
                <>
                  {selectedProduct.illustration && (
                    <img
                      src={selectedProduct.illustration}
                      alt={selectedProduct.name}
                      className="img-fluid mb-3"
                      style={{ width: '150px', height: '100px', objectFit: 'cover' }}
                    />
                  )}
                  <p>{selectedProduct.description}</p>
                  <p><strong>Prix:</strong> {parseFloat(selectedProduct.price).toFixed(2)}€</p>
                  <div>
                    <h5>Ingrédients :</h5>
                    <ul>
                      {selectedProduct.ingredients && selectedProduct.ingredients.map((ingredientId) => {
                        const ingredient = ingredientsList.find(ing => ing.id === ingredientId);
                        return (
                          <li className='text-start' key={ingredientId}> {ingredient ? ingredient.name : 'Inconnu'}</li>
                        );
                      })}
                    </ul>
                  </div>
                </>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>Fermer</Button>
              <Button variant="primary" onClick={() => handleAddToCart(selectedProduct)}>Ajouter au panier</Button>
            </Modal.Footer>
          </Modal>
        </>
      ) : (
        <p>Aucun produit disponible pour cette catégorie.</p>
      )}
    </div>
  );
};

export default ProductList;
