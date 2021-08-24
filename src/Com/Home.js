import {useState} from 'react';
import './Home.css';



const Home = () => {

    
let screenHeight = window.innerHeight;

window.onresize = () => {
    screenHeight = window.innerHeight;
    console.log("about")
}



const divHeight = {height: screenHeight * 0.9};

return(
    <div style={divHeight} name="home" id="home" className="home" >
 
      
        <h1>Matias Medrano</h1>
        <h6 className='home-subtitle'>I´m a Web Developer</h6>
        <br />
        <a href="https://www.linkedin.com/in/mattmedra/" class="icon-socialmedia"><i class="bx bxl-linkedin"></i></a>    
        <a href="https://github.com/Matiasmedrano66" class="icon-socialmedia"><i class="bx bxl-github"></i></a>
          
   
    </div>
);
}

export default Home;
