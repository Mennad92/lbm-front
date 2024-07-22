import React from 'react';
import { Offcanvas} from 'react-bootstrap';

const Cart = ({ show, handleClose }) => {
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Votre Panier</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <p>Votre panier est vide.</p>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;