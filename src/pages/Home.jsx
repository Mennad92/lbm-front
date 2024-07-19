import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../assets/images/biscuits.jpg';
import slide2 from '../assets/images/biscuits2.jpg';
import slide3 from '../assets/images/accueil.png';

function Home() {
  return (
    <div>
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
    </div>
  );
}

export default Home;