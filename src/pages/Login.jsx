import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';  

const Login = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  
  if (isAuthenticated) {
    navigate('/logout');
    return null;  
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Tous les champs sont obligatoires');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/dj/login/', {
        username,
        password,
      });
      localStorage.setItem('accessToken', response.data.access);
      setError('');
      navigate('/');  
    } catch (err) {
      console.error(err);
      if (err.response && err.response.status === 401) {
        setError('Nom d’utilisateur ou mot de passe incorrect');
      } else {
        setError('Une erreur est survenue. Veuillez réessayer plus tard.');
      }
    }
  };

  return (
    <Container>
      <Row className="m-5 bg-light rounded border border-1 justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center m-5">Connexion</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className='my-3 ms-1'>Mail :</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Entrer votre mail"
                aria-label="Email"
                aria-required="true"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className='my-3 m-1'>Mot de passe:</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mot de passe"
                aria-label="Mot de passe"
                aria-required="true"
              />
            </Form.Group>

            <div className='d-flex justify-content-center'>
              <Button variant="outline-success" type="submit" className="px-5 my-3">
                Login
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
