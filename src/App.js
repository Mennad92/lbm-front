import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './Image/logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import connectIcon from './Image/connex.png';
import cartIcon from './Image/panier.png';

function App() {
  return (
    <div className="App">
      <header className="bg-light App-header">
        <Navbar>
          <Container fluid className="d-flex justify-content-between align-items-center navbar-container">
            <div className="navbar-placeholder"></div>
            <Navbar.Brand href="#home" className='text-center'><img src={logo} alt="Logo" className='logo mx-auto d-block' /></Navbar.Brand>
            <div>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse-container">
                <Nav className="ms-auto d-flex flex-row">
                  <Nav.Link href="#home">
                    <img src={cartIcon} alt="Panier" className='icon' />
                  </Nav.Link>
                  <Nav.Link href="#link">
                    <img src={connectIcon} alt="Connexion" className='icon' />
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>
        {/*dont act like you forgot*/}
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
}

export default App;
