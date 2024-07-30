import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Alert, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); 

  const validatePassword = (password) => {
    const minLength = 8;
    const hasNumber = /\d/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
    
    return password.length >= minLength && 
           hasNumber.test(password) && 
           hasSpecialChar.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError('Tous les champs sont obligatoires');
      return;
    }

    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }

    if (!validatePassword(password)) {
      setError('Le mot de passe doit contenir au moins 8 caractères, un chiffre et un caractère spécial.');
      return;
    }

    try {
      await axios.post('http://localhost:8000/api/register/', { email, password });
      setSuccess('Inscription réussie. Vous pouvez maintenant vous connecter.');
      setError('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError('Cette adresse mail est déjà utilisé');
      setSuccess('');
    }
  };

  return (
    <Container>
      <Row className="m-5 bg-light rounded border border-1 justify-content-md-center">
        <Col md={6} lg={4} className="mx-auto">
          <h2 className="text-center m-5">S'inscrire</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}
          <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
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
                  placeholder="*******"
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
              {/* Display password requirements */}
              <Form.Text className="text-muted">
                Doit contenir au moins 8 caractères, un chiffre et un caractère spécial.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Label>Confirmer le mot de passe</Form.Label>
              <div className="d-flex align-items-center">
                <Form.Control
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="*******"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Button
                  variant="link"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={{ marginLeft: '10px', padding: '0', background: 'none', border: 'none' }}
                >
                  <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                </Button>
              </div>
            </Form.Group>

            <div className='d-flex justify-content-center'>
              <Button variant="outline-success" type="submit" className="px-5 my-3">
                S'inscrire
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
