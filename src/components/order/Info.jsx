import * as React from 'react';
import PropTypes from 'prop-types';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useCart } from '../../contexts/CartContext';


function Info() {
  
  
  const { cart } = useCart();
  const totalAmount = cart.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);

  return (
    <React.Fragment>
      <Typography variant="subtitle2" color="text.secondary">
        Total
      </Typography>
      <Typography variant="h4" gutterBottom>
        {totalAmount} €
      </Typography>
      <List disablePadding>
        {cart.map((item) => (
          <ListItem key={item.id} sx={{ py: 1, px: 0 }}>
            <ListItemText
              sx={{ mr: 2 }}
              primary={item.name}
              secondary={'Quantité : x' + item.quantity}
            />
            <Typography variant="body1" fontWeight="medium">
              {item.price * item.quantity} €
            </Typography>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}

Info.propTypes = {
  totalPrice: PropTypes.string.isRequired,
};

export default Info;
