import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Nav, } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import slide1 from '../assets/images/biscuits.jpg';
import slide2 from '../assets/images/biscuits2.jpg';
import slide3 from '../assets/images/accueil.png';
import card1 from '../assets/images/anis.jpg';
import card2 from '../assets/images/baklavas.jpg';
import art1 from '../assets/images/coque.jpg';
import art2 from '../assets/images/rouleau.jpg';
//label
import lab1 from '../assets/images/charte.png';
import lab2 from '../assets/images/Ecocert.png';
import lab3 from '../assets/images/Logos-Bio.png';
import lab4 from '../assets/images/europeco.jpg';
import lab5 from '../assets/images/logo2024.png';

function Home() {
  return (
    <div className='bg-light'>

      {/*carousel*/}

      <Carousel className='pb-5 mb-5 bg-creme'>
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
      <div style={{ height: '20vh' }}></div>

      {/* Nos produits */}

      <div className="libre bg-creme">

        <CardGroup>
            <Card className='mx-auto my-0' style={{ width: "60%" }}>
              <Card.Img variant="top" src={card1} alt="Biscuits" />
              <Card.Body>
                <Card.Title className='text-center fs-2'> <span className='text-creme'>Biscuits</span></Card.Title>
                <Card.Text className='fs-4 w-75 text-center mx-auto mb-5'>
                  Savourez les Biscuits de Maman originaux fabriqués avec des produits 100% bio
                </Card.Text>
                <div className="d-flex justify-content-center">
                <Nav.Link as={Link} to="/biscuits"><Button variant="outline-primary">VISITER BISCUITERIE</Button></Nav.Link>
                </div>
              </Card.Body>
            </Card>

          <Card className="text-center border-0 megrim my-auto" style={{ fontSize: '64px' }}>
            <Card.Body className='bg-creme'> NOS <br></br>PRODUITS</Card.Body>
          </Card>

            <Card className='mx-auto my-0' style={{ width: "60%" }}>
              <Card.Img variant="top" src={card2} alt="Baklava" />
              <Card.Body>
                <Card.Title className='text-creme text-center fs-2'><span className='text-creme'>Pâtisseries</span></Card.Title>
                <Card.Text className='fs-4 w-75 mx-auto text-center mb-5'>
                  Les pâtisseries Orientale de Sam Hattal sont les meilleures du monde.
                </Card.Text>
                <div className="d-flex justify-content-center">
                <Nav.Link as={Link} to="/pastries"><Button variant="outline-primary">VISITER PÂTISSERIE</Button></Nav.Link>
                </div>
              </Card.Body>
            </Card>
        </CardGroup>

      </div>

      {/*Art 1 */}

      <Container fluid className="p-5 fs-4 align-items-center">
        <img
          className="d-block mx-auto rounded-circle" style={{ width: "60%" }}
          src={art1}
          alt="Qui sommes nous"
        />
        <div>
          <h4 className='text-center text-creme my-4'>Qui sommes nous ?</h4>
          <p className='text-center mx-auto w-75'>
            Nous sommes une biscuiterie artisanale usant des produits d’agriculture 100 % bio spécialisé dans les biscuits au goûts de fruits sec et fruits à coque (amandes, pistaches, noix, etc...).
          </p>
          <h4 className='text-center text-creme mb-4'>Mais pas seulement !</h4>
          <p className='text-center mx-auto w-75'>
            Nous proposons une sélection de pâtisserie orientale à tomber qui ont un goût unique et souvent décrit comme les meilleurs du monde.
          </p>
        </div>
      </Container>

      {/* label */}

      <div className='bg-creme libre text-black'><h3 className='text-center fs-1'>Label de confiance</h3>
        <div className='d-flex align-items-center'>
          <img
            className="d-bloc mx-auto" style={{ width: "12%" }}
            src={lab1}
            alt="Qui sommes nous"
          />
          <img
            className="d-block mx-auto" style={{ width: "12%" }}
            src={lab2}
            alt="Qui sommes nous"
          />
          <img
            className="d-block mx-auto" style={{ width: "12%" }}
            src={lab3}
            alt="Qui sommes nous"
          />
          <img
            className="d-block mx-auto" style={{ width: "12%" }}
            src={lab4}
            alt="Qui sommes nous"
          />
          <img
            className="d-block mx-auto" style={{ width: "12%" }}
            src={lab5}
            alt="Qui sommes nous"
          />
        </div>
      </div>

      {/* art2 */}

      <Container fluid className="fs-4 align-items-center">
        <img
          className="d-block mx-auto p-3 my-5 rounded-circle" style={{ width: "60%" }}
          src={art2}
          alt="Qui sommes nous"
        />
        <div>
          <h4 className='text-center text-creme mb-4'>Comment nous fonctionnons ?</h4>
          <p className='text-center mx-auto w-75 mb-5'>
            Nous travaillons dans notre laboratoire à Paris, nous avons notre boutique en ligne et nous livrons dans toute l’île de France.
          </p>
        </div>
      </Container>


    </div>

  );
}

export default Home;