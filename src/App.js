import NavBar from './Com/NavBar';
import './App.css';
import Home from './Com/Home';
import AboutMe from './Com/AboutMe';
import Skills from './Com/Skills';
import Portfolio from './Com/Portfolio';
import Contact from './Com/Contact';
import Footer from './Com/Footer'; 
import Luna from './images/luna.png';
import Ovni from './images/ovni.png';

import React, {useState, useEffect} from 'react';



   

function App() {

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

  return (
    
    
    <div className="App" >
    
      <NavBar />
      <Home />
      <img src={Luna} className="luna"  style={{ transform: `translateY(${offsetY/6}px)`, transition: "all 2s ease-out" }}/>
      <AboutMe  name="about"/>
      <Skills />
      <img src={Ovni} className="ovni"  style={{ transform: `translateX(${offsetY/8}px)`,  transition: "all 1s ease-out" }}/>
      <Portfolio />
      <img src={Ovni} className="ovni"  style={{ transform: `translateX(${-offsetY/18}px)`, transition: "all 1s ease-out" }}/>
      <Contact />
      <Footer />
    </div>
  
  );
}

export default App;
