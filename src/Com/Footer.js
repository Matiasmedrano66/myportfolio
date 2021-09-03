import React, { useState, useEffect} from 'react';
import './Footer.css';




const Footer = () => {

  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
  
  setOffsetY(window.pageYOffset);

  }
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const year = new Date().getFullYear();
    return (
      <footer className='Footer' id='footer' style={{ transform: `translateY(-${offsetY/25}px)`, transition: "all 2s ease-out" }}>
        <p >Designed and developed by <b>Matias Medrano</b> </p>
        <p>Copyright © {year}</p>
      </footer>
    );
  }

export default Footer;
