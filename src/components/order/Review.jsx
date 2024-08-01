import * as React from 'react';

import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useCart } from '../../contexts/CartContext';

export default function Review({ profileData, orderId }) {
  const { cart } = useCart();
  const totalAmount = cart.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
  return (
    <Stack spacing={2}>
    <div>
      <Typography variant="subtitle2" gutterBottom>
        Numéro de commande
      </Typography>
      <Typography gutterBottom>{orderId}</Typography>
    </div>
      <List disablePadding>
        {cart.map((item) => (
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText primary={item.name} secondary={'Quantité : x' + item.quantity} />
            <Typography variant="body2">{item.price * item.quantity} €</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {totalAmount}€
          </Typography>
        </ListItem>
      </List>
      <Divider />
      <Stack
        direction="column"
        divider={<Divider flexItem />}
        spacing={2}
        sx={{ my: 2 }}
      >
        <div>
          <Typography variant="subtitle2" gutterBottom>
            Détails de la livraison
          </Typography>
          <Typography gutterBottom>{profileData.firstName} {profileData.lastName}</Typography>
          <Typography color="text.secondary" gutterBottom>
            {profileData.address}, {profileData.postal}, {profileData.city}
          </Typography>
        </div>
        <div>
          <Typography variant="subtitle2" gutterBottom>
            Contact
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            {profileData.phone}
          </Typography>
        </div>
        <div>
          <Typography variant="subtitle2" gutterBottom>
            Détails du paiement
          </Typography>
          <Grid container>
                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  sx={{ width: '100%', mb: 1 }}
                >
                  <Typography color="text.secondary" gutterBottom>
                    Virement Paypal à lesbiscuitsdemaman@gmail.com .
                  </Typography>
                </Stack>
          </Grid>
        </div>
      </Stack>
    </Stack>
  );
}
