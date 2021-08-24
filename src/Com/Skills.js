import './Skills.css';

const Skills = () => {

    const skillsRate = [
        {name: "HTML", rate: "90%"},
        {name: "Css", rate: "90%"},
        {name: "Bootstrap", rate: "80%"},
        {name: "Javascript", rate: "90%"},
        {name: "React.js", rate: "80%"},
        {name: "SQL", rate: "80%"},
        {name: "MongoDB", rate: "65%"},
        {name: "Node.js", rate: "50%"},
        {name: "Express", rate: "50%"},
        {name: "C#", rate: "60%"},
        {name: "OOP", rate: "60%"},
        {name: "Git", rate: "60%"},
    ];

    return ( 
        <div name="skills" id="skills" className='skills'>
            <h1>Skills</h1>
            <p></p>
            <div className='skills-bar-group'>
            {skillsRate.map(skill => { 
                return (
            <div>
            <p className='skill-label'>{skill.name}</p>
            <div class="progress">
                <div class="progress-bar skill-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{'width': skill.rate}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{skill.rate}</div>
            </div> 
            </div>)})}    
           
      
            </div>
            
        </div>
    );
}

export default Skills;