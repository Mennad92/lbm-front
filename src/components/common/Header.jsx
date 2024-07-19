import React from 'react';
import '../../assets/styles/main.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';
import panierIcon from '../../assets/images/panier.png';
import connectIcon from '../../assets/images/connex.png';

const Header = () => {
  return (
    <div className="App">
      <header className="bg-light App-header">
        <Navbar expand="lg">
          <Container fluid className="d-flex justify-content-between align-items-center navbar-container">
            <div className="navbar-placeholder"></div>
            <Navbar.Brand href="#home" className='text-center'>
              <img src={logo} alt="Logo" className='logo my-4 mx-auto d-block' />
            </Navbar.Brand>
            <div>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse-container">
                <Nav className="ms-auto d-flex flex-row">
                  <Nav.Link href="#home">
                    <img src={panierIcon} alt="Panier" className='icon' />
                  </Nav.Link>
                  <Nav.Link href="#link">
                    <img src={connectIcon} alt="Connexion" className='icon' />
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>

        {/* 2e navbar */}
        <Navbar className='megrim m-0 border-top'>
          <Container fluid className="p-0">
            <Nav className="w-100 d-flex">
              <Nav.Link href="#biscuiterie" className='fs-1 flex-fill text-center position-relative'>
                Biscuiterie
                <div className="position-absolute top-0 end-0 h-100 border-end"></div>
              </Nav.Link>
              <Nav.Link href="#patisserie" className='fs-1 flex-fill text-center'>
                Pâtisserie
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </div>
  );
};

export default Header;
