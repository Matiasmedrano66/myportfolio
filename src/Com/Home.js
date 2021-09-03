import {useState, useEffect} from 'react';
import './Home.css';



const Home = () => {

    const [offsetY, setOffsetY] = useState(0);
  


    const handleScroll = () => {
    
      setOffsetY(window.pageYOffset);
  
      }
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);




    
let screenHeight = window.innerHeight;

window.onresize = () => {
    screenHeight = window.innerHeight;
   
}



const divHeight = {height: screenHeight * 0.5};

return(
    <div style={divHeight} name="home" id="home" className="home" style={{ transform: `translateY(${-offsetY/25}px)`, transition: "all 2s ease-out" }}>
 
      
        <h1 className="main-title">Matias Medrano</h1>
        <h6 className='home-subtitle'>I´m a Web Developer</h6>
        <br />
        <a href="https://www.linkedin.com/in/mattmedra/" class="icon-socialmedia"><i class="bx bxl-linkedin"></i></a>    
        <a href="https://github.com/Matiasmedrano66" class="icon-socialmedia"><i class="bx bxl-github"></i></a>
          
   
    </div>
);
}

export default Home;
