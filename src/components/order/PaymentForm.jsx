import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import paypal from '../../assets/images/paypal.png';


export default function PaymentForm({orderId}) {

  return (
    <Stack spacing={{ xs: 3, sm: 6 }} useFlexGap>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
        <img
          className="m-5 mx-auto" style={{ width: '20%' }}
          src={paypal}
          alt="logo-dark"
        />
          Pour procéder au paiement de la commande, veuillez envoyer le montant de la commande par virement Paypal à lesbiscuitsdemaman@gmail.com .
          <br />
          En précisant le numéro de commande : { orderId }.
        </Box>
    </Stack>
  );
}
