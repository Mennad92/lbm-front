import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import slide1 from '../assets/images/biscuits.jpg';
import slide2 from '../assets/images/biscuits2.jpg';
import slide3 from '../assets/images/accueil.png';
import card1 from '../assets/images/anis.jpg';
import card2 from '../assets/images/baklavas.jpg';
import art1 from '../assets/images/coque.jpg';

function Home() {
  return (
    <div>

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

      <div className="product bg-creme mt-5">

        <CardGroup><div className="card2">
          <Card className='m-5' style={{ width: "28rem" }}>
            <Card.Img variant="top" src={card1} alt="Biscuits" />
            <Card.Body>
              <Card.Title className='text-creme text-center fs-2'>Biscuits</Card.Title>
              <Card.Text className='fs-4 w-75 text-center mx-auto mb-5'>
                Savourez les Biscuits de Maman originaux fabriqués avec des produits 100% bio
              </Card.Text>
              <Button className='mx-auto' variant="primary">VISITER BISCUITERIE</Button>
            </Card.Body>
          </Card>
        </div>

          <div className="text-center megrim m-5" style={{fontSize: '64px'}}>
            NOS <br></br>PRODUITS
          </div>

          <div className="card2">
            <Card className='m-5' style={{ width: "28rem" }}>
              <Card.Img variant="top" src={card2} alt="Baklava" />
              <Card.Body>
                <Card.Title className='text-creme text-center fs-2'>Pâtisserie</Card.Title>
                <Card.Text className='fs-4 w-75 mx-auto text-center mb-5'>
                  Les pâtisseries Orientale de Sam Hattal sont les meilleures du monde.
                </Card.Text>
                <Button variant="primary">VISITER PÂTISSERIE</Button>
              </Card.Body>
            </Card>
          </div>
        </CardGroup>
      </div>

      {/*Art 1 */}

      <Container fluid className="p-5 fs-4 align-items-center">
        <img
          className="d-block m-5 rounded-circle" style={{ width: "60%" }}
          src={art1}
          alt="Qui sommes nous"
        />
        <div>
          <h4 className='text-center text-creme mb-4'>Qui sommes nous ?</h4>
          <p className='text-center mx-auto w-75'>
            Nous sommes une biscuiterie artisanale usant des produits d’agriculture 100 % bio spécialisé dans les biscuits au goûts de fruits sec et fruits à coque (amandes, pistaches, noix, etc...).
          </p>
          <h4 className='text-center text-creme mb-4'>Mais pas seulement !</h4>
          <p className='text-center mx-auto w-75'>
            Nous proposons une sélection de pâtisserie orientale à tomber qui ont un goût unique et souvent décrit comme les meilleurs du monde.
          </p>
        </div>
      </Container>
    </div>

  );
}

export default Home;