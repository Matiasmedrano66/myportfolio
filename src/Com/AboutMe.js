import './AboutMe.css';
import profileImg from '../images/profile.jpg';

const AboutMe = () => {
    return(
        <div name="about" id="about" className='about row'>
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