import './AboutMe.css';
import profileImg from '../images/profile.jpg';
import React, {useState, useEffect} from 'react';



const AboutMe = () => {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
    
    setOffsetY(window.pageYOffset);

    }
    
    

  useEffect(() => {
      const effect = () => {
        window.addEventListener("scroll", handleScroll);
  

        return () => window.removeEventListener("scroll", handleScroll);
      }
      effect();
   
  }, []);

    return(
        <div name="about" id="about" className='about row' style={{ transform: `translateY(-${offsetY/8}px)`, transition: "all 2s ease-out" }}>
            <h1>About me</h1>
            
            <div className='presentation col-6'>
                <p className="white-text"> I´m Matías, a Web Developer from Córdoba, Argentina.</p>
                <br />
                <p className="white-text">  I´m available for freelance work </p>   
            </div>
            <div className='img_presentation col-6'>
                <img className='myphoto-image' src={profileImg}></img>
            </div>
        </div>
    );
}

export default AboutMe;