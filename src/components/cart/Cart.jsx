import React from 'react';
import { Offcanvas, ListGroup, Button } from 'react-bootstrap';
import { useCart } from '../../contexts/CartContext';

const Cart = ({ show, handleClose }) => {
  const { cart, removeFromCart } = useCart();

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Votre Panier</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cart.length > 0 ? (
          <ListGroup>
            {cart.map((item) => (
              <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                <div>
                  <strong>{item.name}</strong><br />
                  Quantité: {item.quantity} <br />
                  Prix unitaire: {item.price}€
                </div>
                <Button variant="danger" onClick={() => removeFromCart(item.id)}>Supprimer</Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : (
          <p>Votre panier est vide.</p>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
