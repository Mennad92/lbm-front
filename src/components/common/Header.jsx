import React, { useState, useEffect } from 'react';
import '../../assets/styles/main.css';
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import panierIcon from '../../assets/images/panier.png';
import connectIcon from '../../assets/images/connex.png';
import Cart from '../cart/Cart';

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setIsAuthenticated(!!token);
  }, []);

  const handleOpenCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <header className="bg-light">
      <Navbar expand="lg" className="border-bottom">
        <Container fluid className="d-flex justify-content-between align-items-center navbar-container">
          <Navbar.Brand as={Link} to="/" className="text-center">
            <img src={logo} alt="Logo" className="logo my-4 mx-auto d-block" />
          </Navbar.Brand>
          <Nav className="ms-auto d-flex flex-row">
            <Nav.Link onClick={handleOpenCart} >
              <img src={panierIcon} alt="Panier" className="icon" />
            </Nav.Link>
            <Dropdown align="end">
              <Dropdown.Toggle as="a" className="nav-link">
                <img src={connectIcon} alt="Connexion" className="icon" />
              </Dropdown.Toggle>

              <Dropdown.Menu align="end">
                {isAuthenticated ? (
                  <>
                    <Dropdown.Item as={Link} to="/profile">Profil</Dropdown.Item>
                    <Dropdown.Item onClick={handleLogout}>Déconnexion</Dropdown.Item>
                  </>
                ) : (
                  <>
                    <Dropdown.Item as={Link} to="/login">Connexion</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/register">Inscription</Dropdown.Item>
                  </>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>

      {/* 2e navbar */}
      <Navbar className="megrim m-0 border-top border-bottom">
        <Container fluid className="p-0">
          <Nav className="w-100 d-flex">
            <Nav.Link as={Link} to="/biscuits" className="fs-1 flex-fill text-center position-relative">
              Biscuiterie
              <div className="position-absolute top-0 end-0 h-100 border-end"></div>
            </Nav.Link>
            <Nav.Link as={Link} to="/pastries" className="fs-1 flex-fill text-center">
              Pâtisserie
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Intégration du composant Cart */}
      <Cart show={showCart} handleClose={handleCloseCart} />
    </header>
  );
};

export default Header;
