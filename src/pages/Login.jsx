import React, { useEffect } from 'react';
import profileService from '../services/profileService';
import { Form } from 'react-router-dom';
import { useActionData, useNavigate, useLocation  } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { styled } from '@mui/system';
import { Snackbar, Grid, FormLabel, OutlinedInput, Button, IconButton  } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export async function action({ request }) {
  try {
    let formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    const { data } = await profileService.login({
      email,
      password,
    });
    const accessToken = data.access;
    const refreshToken = data.refresh;
    return { tokens: { accessToken, refreshToken }, error: null };
  } catch (error) {
    console.log(error);
    return {
      error: 'Email ou mot de passe incorrect',
      tokens: null,
    };
  }
}

export function Login() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const justRegistered = queryParams.get('just_registered');
  const [open, setOpen] = React.useState(justRegistered);
  const actionData = useActionData();
  const navigate = useNavigate();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn());
  const login = useAuthStore((state) => state.login);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    if (actionData?.tokens) {
      login(actionData.tokens);
      navigate("/");
    }
  }, [actionData]);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/profile");
    }
  }, [isLoggedIn]);

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Form method="post">
        <h1 className='text-center m-5 text-creme'>Connexion</h1>
        {actionData?.error && <div className="alert">{actionData?.error}</div>}
        <Grid container spacing={3} justifyContent={"center"}>
          <FormGrid item xs={12} md={8}>
            <FormLabel htmlFor="mail" required>
              Email
            </FormLabel>
            <OutlinedInput
              name="email"
              type="text"
              placeholder="Email"
              aria-label="Email"
              required
            />
          </FormGrid>
          <FormGrid item xs={12} md={8}>
            <FormLabel htmlFor="password" required>
              Mot de passe
            </FormLabel>
            <OutlinedInput
              name="password"
              type="password"
              placeholder="Mot de passe"
              aria-label="Mot de passe"
              required
            />
          </FormGrid>
          <FormGrid item xs={12} md={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Se connecter
            </Button>
          </FormGrid>
        </Grid>
      </Form>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{horizontal:'center', vertical:'bottom'}}
        message="Bienvenue ! Votre inscription a été réussie. Vous pouvez maintenant vous connecter."
        action={action}
      />
    </div>
  );
}
