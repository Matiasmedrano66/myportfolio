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
        <div name="about" id="about" className='about row' style={{ transform: `translateY(-${offsetY/25}px)`, transition: "all 2s ease-out" }}>
            <h1>About me</h1>
            
            <div className='presentation col-6'>
                <p className="white-text"> Hello! My name is Matías, I´m from Córdoba, Argentina.</p>
                <p className="white-text">I make Websites. I´m also studying software development, </p>
                <p className="white-text">and I´m currently doing an associate degree in programming at UTN Argentina.</p>
                <br />
                <p className="white-text">I´m avaible for freelance work!</p>   
            </div>
            <div className='img_presentation col-6'>
                <img className='myphoto-image' src={profileImg}></img>
            </div>
        </div>
    );
}

export default AboutMe;