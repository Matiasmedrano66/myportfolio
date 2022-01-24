import './Skills.css';
import React, {useState, useEffect} from 'react';

const Skills = () => {

    const [animationBar, setAnimationBar] = useState('');
    const [offsetY, setOffsetY] = useState(0);
  


    const handleScroll = () => {
    
      setOffsetY(window.pageYOffset);
  
      }
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    useEffect(() =>
        window.addEventListener("scroll", ()=> {
            let element = document.getElementById('skills');
            
         
    
            if(element.getBoundingClientRect().top < window.innerHeight){
                setAnimationBar('load-bar');
            } else {
                setAnimationBar('');
            }
    
        })
        
    , []);



    const skillsRate = [
        {name: "HTML", rate: "90%"},
        {name: "Css", rate: "90%"},
        {name: "Javascript", rate: "80%"},
        {name: "React.js", rate: "80%"},
        {name: "SQL", rate: "90%"},
        {name: "MongoDB", rate: "50%"},
        {name: "Node.js", rate: "50%"},
        {name: "C#", rate: "80%"},
        {name: "OOP", rate: "80%"},
    ];

    return ( 
        <div name="skills" id="skills" className='skills' style={{ transform: `translateY(-${offsetY/25}px)`, transition: "all 2s ease-out" }}>
            <h1>Skills</h1>
            <p className="black-text">A list of some tools which I have been recently using to work with.</p>
            <div className='skills-bar-group'>
            {skillsRate.map(skill => { 
                return (
            <div>
            <p className='skill-label'>{skill.name}</p>
            <div class={`progress ${animationBar}`}>
                <div class="progress-bar skill-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{'width': skill.rate}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{skill.rate}</div>
            </div> 
            </div>)})}    
           
      
            </div>
            
        </div>
    );
}

export default Skills;