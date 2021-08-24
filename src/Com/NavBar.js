import './NavBar.css';
import {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, HashRouter
} from 'react-router-dom';


const NavBar = (props) => {
 
    const [hideBar, setHideBar] = useState({});
    const [showBar, setShowBar] = useState(true);
 

   window.onresize = () => {
    if(window.screen.width > 960){
      if(!showBar){
      setHideBar({left: 0});
      setShowBar(true);
      } 
    console.log("llama")
    } else {
      setHideBar({left: -300});
      setShowBar(false);
    }
   }


    const show = () => {
        
      setHideBar({left: 0});
      setShowBar(true);

  }

  const hide = () => {
  
      if(window.screen.width < 960){
          if(showBar){
          setHideBar({left: -300});
          setShowBar(false);
        } 
      }
    }
 
    return(
      <div>
      <i onClick={!showBar ? show : hide} className="bi bi-list mobile-nav-toggle d-lg-none"></i>
      <header  id="header" style={hideBar} className="h d-flex flex-column justify-content-center">

    <nav id="navbar" className="navbar nav-menu">
      <ul>
        <a onClick={hide} href='#home' className="nav-link scrollto link-bar"><li><a ><i className="bx bx-home"></i><span>Home</span></a></li></a>
        <a onClick={hide} href='#about' className="nav-link scrollto"><li ><a><i className="bx bx-user"></i><span>About</span></a></li></a>
        <a onClick={hide} href='#skills' className="nav-link scrollto"><li><a><i className="bx bx-file-blank"></i> <span>Skills</span></a></li></a>
        <a onClick={hide} href='#portfolio' className="nav-link scrollto"><li><a><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li></a>
        <a onClick={hide} href='#contact' className="nav-link scrollto"><li><a><i className="bx bx-envelope"></i> <span>Contact</span></a></li></a>
      </ul>
    </nav>
  </header>
      </div>

    );
}

export default NavBar;