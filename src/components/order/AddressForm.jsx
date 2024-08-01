import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function AddressForm({ profileData, handleChange }) {

  return (
    <Grid container spacing={3}>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="first-name" required>
          Prénom
        </FormLabel>
        <OutlinedInput
          id="first-name"
          name="firstName"
          type="name"
          placeholder="Prénom"
          autoComplete="first name"
          onChange={handleChange} value={profileData.firstName}
          required
        />
      </FormGrid>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="last-name" required>
          Nom de Famille
        </FormLabel>
        <OutlinedInput
          id="last-name"
          name="lastName"
          type="last-name"
          placeholder="Nom"
          autoComplete="last name"
          onChange={handleChange} value={profileData.lastName}
          required
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="address1" required>
          Adresse
        </FormLabel>
        <OutlinedInput
          id="address1"
          name="address"
          type="address1"
          placeholder="Numéro et nom de rue"
          autoComplete="shipping address-line1"
          onChange={handleChange} value={profileData.address}
          required
        />
      </FormGrid>
      <FormGrid item xs={6}>
        <FormLabel htmlFor="city" required>
          Ville
        </FormLabel>
        <OutlinedInput
          id="city"
          name="city"
          type="city"
          placeholder="Ville"
          autoComplete="City"
          onChange={handleChange} value={profileData.city}
          required
        />
      </FormGrid>
      <FormGrid item xs={6}>
        <FormLabel htmlFor="zip" required>
          Code postal
        </FormLabel>
        <OutlinedInput
          id="zip"
          name="postal"
          type="zip"
          placeholder="Code postal"
          autoComplete="shipping postal-code"
          onChange={handleChange} value={profileData.postal}
          required
        />
      </FormGrid>
      <FormGrid item xs={6}>
        <FormLabel htmlFor="phone" required>
          Téléphone portable
        </FormLabel>
        <OutlinedInput
          id="phone"
          name="phone"
          type="phone"
          placeholder="Numéro de téléphone portable"
          autoComplete="shipping phone"
          onChange={handleChange} value={profileData.phone}
          required
        />
      </FormGrid>
    </Grid>
  );
}
