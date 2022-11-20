import React from 'react';
import './footer.css';
import {FaWhatsappSquare,FaInstagramSquare} from 'react-icons/fa';
import {AiFillFacebook} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>AYOUB</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"><AiFillFacebook /></a>
        <a href="https://instagram.com"><FaInstagramSquare /></a>
        <a href="https://whatsapp.com"><FaWhatsappSquare /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; AYOUB is dev.all rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer