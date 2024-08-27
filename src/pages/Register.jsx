import React, { useEffect, useState } from 'react';
import profileService from '../services/profileService';
import { Form } from 'react-router-dom';
import { useActionData, useNavigate }  from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { styled } from '@mui/system';
import { Grid, FormLabel, OutlinedInput, Button, InputAdornment, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export async function action({ request }) {
  try {
    let formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    await profileService.register({
      email,
      password,
    });
    return { isRegistered: true, error: null };
  } catch (error) {
    return {
      error: error.response.data.message || error.message,
    };
  }
}

export function Register() {
  const navigate = useNavigate();
  const actionData = useActionData();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn());
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  })
  const [showPassword, setShowPassword] = useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  };

  useEffect(() => {
    if (actionData?.isRegistered) {
      navigate("/login?just_registered=true");
    }
  }, [actionData]);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/profile");
    }
  }, [isLoggedIn]);

  const validatePassword = (password) => {
    const minLength = 8;
    const hasNumber = /\d/;
    const hasSpecialChar = /[-!@#$%^&*(),.?":{}|<>]/;
    
    return password.length >= minLength && 
           hasNumber.test(password) && 
           hasSpecialChar.test(password);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    if(validatePassword(formData.password) && validateEmail(formData.email) && formData.password == formData.passwordConfirm)
      return false;
    return true;
  }

  return (
    <div>
      <Form method="post">
        <h1>Inscription</h1>
        {actionData?.error && <div className="alert">{actionData?.error}</div>}
        <Grid container spacing={3}>
          <FormGrid item xs={12} md={8}>
            <FormLabel htmlFor="mail" required>
              Email
            </FormLabel>
            <OutlinedInput
              name="email"
              type="text"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              aria-label="Email"
              required
            />
          </FormGrid>
          <FormGrid item xs={12} md={8}>
            <FormLabel htmlFor="pass" required>
              Mot de passe
            </FormLabel>
            <OutlinedInput
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Mot de passe"
              aria-label="Mot de passe"
              value={formData.password}
              onChange={handleChange}
              required
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                    style={{ padding: '0', background: 'none', margin: '10px', }}
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormGrid>
          <FormGrid item xs={12} md={8}>
            <FormLabel htmlFor="passconfirm" required>
              Confirmer le mot de passe
            </FormLabel>
            <OutlinedInput
              name="passwordConfirm"
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirmation du mot de passe"
              aria-label="Confirmation du mot de passe"
              value={formData.passwordConfirm}
              onChange={handleChange}
              required
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    edge="end"
                    style={{ padding: '0', background: 'none', margin: '10px', }}
                  >
                    <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormGrid>
          <FormGrid item xs={12} md={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={validateForm()}
            >
              S'inscrire
            </Button>
          </FormGrid>
        </Grid>
      </Form>
    </div>
  );
};
