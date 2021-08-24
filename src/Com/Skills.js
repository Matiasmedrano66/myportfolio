import './Skills.css';

const Skills = () => {

    const skillsRate = [
        {name: "HTML", rate: "80%"},
        {name: "Css", rate: "80%"},
        {name: "Bootstrap", rate: "75%"},
        {name: "Javascript", rate: "90%"},
        {name: "React.js", rate: "70%"},
        {name: "SQL", rate: "70%"},
        {name: "MongoDB", rate: "65%"},
        {name: "Node.js", rate: "40%"},
        {name: "Express", rate: "40%"},
        {name: "C#", rate: "40%"},
        {name: "OOP", rate: "60%"},
        {name: "Git", rate: "50%"},
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