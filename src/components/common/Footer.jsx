import React from 'react';
import '../../assets/styles/main.css';
import { Container, } from 'react-bootstrap';
import logo2 from '../../assets/images/logo (2).png';
import locIcon from '../../assets/images/location (2).png';
import phonIcon from '../../assets/images/phone2.png';
import mailIcon from '../../assets/images/mail.png';
import instaIcon from '../../assets/images/insta.png';
import faceIcon from '../../assets/images/face.png';

const Footer = () => {
  return (
    <footer className='bg-black text-white mt-5'>
      <div className='m-0 d-flex'><Container className='w-50'>
        <img
          className="pt-5" style={{ width: '100%' }}
          src={logo2}
          alt="logo-dark"
        />
        <img
          className="d-block mx-auto" style={{ width: '6%' }}
          src={locIcon}
          alt="logo-dark"
        />
        <p className='d-block fs-4 m-0 text-center'>51 Boulevard Exelmans</p>
        <p className='d-block fs-4 m-0 text-center'>75016 Paris</p>
        <p className='d-block fs-4 m-0 mb-5 text-center'>FRANCE</p>
      </Container>
        <Container className='w-50 mx-auto'>
          <div className="d-flex align-items-center justify-content-center mt-5">
            <img className="me-3" style={{ width: '6%' }} src={phonIcon} alt="logo-dark" />
            <p className="mb-0">06 10 80 53 21</p>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-5">
            <img className="me-3" style={{ width: '6%' }} src={mailIcon} alt="logo-dark" />
            <p className="mb-0">Lbm@gmail.com</p>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-5">
            <img className="me-3" style={{ width: '6%' }} src={instaIcon} alt="logo-dark" />
            <p className="mb-0">Les biscuits de maman</p>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-5 mb-3">
            <img className="me-3" style={{ width: '6%' }} src={faceIcon} alt="logo-dark" />
            <p className="mb-0">Les biscuits de maman</p>
          </div>
        </Container></div>

      {/* Copyright */}

      <div className='text-center border-top border-white py-3'>
        © 2024 - Les Biscuits de Maman - <u>TOUS DROITS RÉSERVÉS</u>
      </div>
    </footer>

  );
};

export { Footer };