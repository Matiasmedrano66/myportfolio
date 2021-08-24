import NavBar from './Com/NavBar';
import './App.css';
import Home from './Com/Home';
import AboutMe from './Com/AboutMe';
import Skills from './Com/Skills';
import Portfolio from './Com/Portfolio';
import Contact from './Com/Contact';
import Footer from './Com/Footer'; 
import {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <AboutMe  name="about"/>
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
