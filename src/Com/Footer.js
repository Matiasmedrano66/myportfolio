import React, {Component} from 'react';
import './Footer.css';




const Footer = () => {
  const year = new Date().getFullYear();
    return (
      <footer className='Footer'>
        <p >Designed and developed by <b>Matias Medrano</b> </p>
        <p>Copyright © {year}</p>
      </footer>
    );
  }

export default Footer;
