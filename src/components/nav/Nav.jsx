import React, { useState } from 'react';
import {AiFillHome,AiFillMessage} from 'react-icons/ai';
import {FaUserAlt} from 'react-icons/fa';
import {BiBookAlt} from 'react-icons/bi';
import {RiServiceFill} from 'react-icons/ri';



import './nav.css';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home')
  return (
    <nav>
      <a href="#home" className={activeNav === '#home' ? 'active' : ''}><AiFillHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserAlt /></a>
      <a href="#experience"  onClick={() => setActiveNav('#experience')}  className={activeNav === '#experience' ? 'active' : ''}><BiBookAlt /></a>
      <a href="#services"  onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceFill /></a>
      <a href="#contact"  onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillMessage /></a>
    </nav> 
  )
}

export default Nav