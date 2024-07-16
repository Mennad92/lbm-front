import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './Image/logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import connectIcon from './Image/connex.png';
import panierIcon from './Image/panier.png';
// Importez vos images pour le carousel
import slide1 from './Image/accueil.png';
import slide2 from './Image/biscuits.jpg';
import slide3 from './Image/cuisine.png';
import card1 from './Image/anis.jpg';
import card2 from './Image/baklavas.jpg';
import art1 from './Image/coque.jpg';


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

      {/* Carousel */}
      <Carousel className='pb-5 mb-5 bg-warning'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      {/*Nos produits*/}
      <div className="position-relative bg-warning mt-5" style={{ height: '80vh', width: '99vw' }}>
        <Card className="position-absolute top-5 start-5 m-3" style={{ width: '25rem' }}>
          <Card.Img variant="top" src={card1} />
          <Card.Body className='text-center'>
            <Card.Title>Biscuits</Card.Title>
            <Card.Text>
              Savourez les Biscuits de Maman originaux fabriqués avec des produits 100% bio
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card className="position-absolute bottom-0 end-0 m-3" style={{ width: '25rem' }}>
          <Card.Img variant="top" src={card2} />
          <Card.Body className='text-center'>
            <Card.Title>Pâtisserie</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <Container fluid className="p-5 d-flex align-items-center">
        <img
          className="d-block m-5 rounded-circle" style={{width: "60%"}}
          src={art1}
          alt="Qui sommes nous"
        />
        <div>
          <h4 className='text-center mb-4'>Qui sommes nous ?</h4>
          <p className='text-center mx-auto w-75'>
            Nous sommes une biscuiterie artisanale usant des produits d’agriculture 100 % bio spécialisé dans les biscuits au goûts de fruits sec et fruits à coque (amandes, pistaches, noix, etc...).
          </p>
          <h4 className='text-center mb-4'>Mais pas seulement !</h4>
          <p className='text-center mx-auto w-75'>
            Nous proposons une sélection de pâtisserie orientale à tomber qui ont un goût unique et souvent décrit comme les meilleurs du monde.
          </p>
        </div>
      </Container>

      <div>
        <h3 className='text-center fs-1'>Label de confiance</h3>
        
      </div>
    </div>
  );
}

export default App;
