import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Offcanvas, ListGroup, Button, ButtonGroup } from 'react-bootstrap';
import { useCart } from '../../contexts/CartContext';

const Cart = ({ show, handleClose }) => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  let navigate = useNavigate();
  const totalAmount = cart.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);

  const handleValidateCart = () => {
    navigate('/order');
  };

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Votre Panier</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cart.length > 0 ? (
          <>
            <ListGroup>
              {cart.map((item) => (
                <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                  <div>
                    <strong>{item.name}</strong><br />
                    <div className="d-flex align-items-center">
                      <ButtonGroup className="d-flex align-items-center">
                        <Button 
                          variant="outline-secondary"
                          onClick={() => updateQuantity(item.id, -1)}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </Button>
                        <Button 
                          variant="outline-dark" 
                          disabled
                          className='border-0'
                        >
                          {item.quantity}
                        </Button>
                        <Button 
                          variant="outline-secondary" 
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          +
                        </Button>
                      </ButtonGroup>
                      <span className="ms-3">Prix: {(item.quantity * item.price).toFixed(2)}€</span>
                    </div>
                  </div>
                  <Button variant="danger" onClick={() => removeFromCart(item.id)}>Supprimer</Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <div className="mt-3">
              <h4>Total: {totalAmount}€</h4>
              <div className="d-flex justify-content-between">
                <Button variant="outline-danger" onClick={clearCart}>Vider le panier</Button>
                <Button variant="outline-success" onClick={handleValidateCart}>Valider le panier</Button>
              </div>
            </div>
          </>
        ) : (
          <p>Votre panier est vide.</p>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
