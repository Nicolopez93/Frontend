import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import imgLogo from '../../../assets/logotransp.png';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      <img src={imgLogo} alt='logo' className="footer-logo"/>
      <p className='footer-p'>© 2024 Car4All - Rentamos autos. Todos los derechos reservados.</p>
      <Link to="/SobreNosotros"><p className='footer-p'>Sobre Nosotros</p></Link>
      <div className="social-icons">
        <a href="https://twitter.com/tucuenta" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com/tucuenta/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com/tucuenta/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
      
    </div>
  );
}

export default Footer;
