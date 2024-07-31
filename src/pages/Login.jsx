import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Alert, Row, Col } from 'react-bootstrap';
import { useActionData, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export async function action({ request }) {
  try {
    let formData = await request.formData();
    const type = formData.get("type");
    const email = formData.get("email");
    const password = formData.get("password");
    const url =
      type === "register"
        ? "http/localhost:8000/api/register"
        : "http/localhost:8000/api/login";
    const { data } = await axios.post(url, {
      email,
      password,
    });
    const { accessToken, refreshToken } = data;
    return { tokens: { accessToken, refreshToken }, error: null };
  } catch (error) {
    return {
      error: error.response.data.message || error.message,
      tokens: null,
    };
  }
}

const Login = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuth();
  const actionData = useActionData();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  if (isAuthenticated) {
    navigate('/profile');
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Tous les champs sont obligatoires');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/login/', { email, password });
      localStorage.setItem('accessToken', response.data.access);
      localStorage.setItem('refreshToken', response.data.refresh);
      setError('');
      navigate('/');
    } catch (err) {
      console.error(err);
      if (err.response && err.response.status === 401) {
        setError('email ou mot de passe incorrect');
      } else {
        setError('Une erreur est survenue. Veuillez réessayer plus tard.');
      }
    }
  };

  return (
    <Container>
      <Row className="m-5 bg-light rounded border border-1 justify-content-md-center">
        <Col md={6} lg={4} className="mx-auto">
          <h2 className="text-center m-5">Connexion</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>email</Form.Label>
              <Form.Control
                type="mail"
                placeholder="Entrez votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mot de passe</Form.Label>
              <div className="d-flex align-items-center">
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Entrez votre mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  variant="link"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ marginLeft: '10px', padding: '0', background: 'none', border: 'none' }}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </Button>
              </div>
            </Form.Group>

            <div className='d-flex justify-content-center'>
              <Button variant="outline-success" type="submit" className="px-5 my-3">
                Connexion
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
