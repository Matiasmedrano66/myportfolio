import './Portfolio.css';
import Calc from '../images/calc.jpg';
import Timer from '../images/timer.jpg';
import Expenses from '../images/expenses.jpg';


const Portfolio = () => {
    const projects = [
        {name: "React Calculator", description: "This is a simple calculator made it with React.js", image: Calc, link: "https://matiasmedrano66.github.io/jscalculator/"},
        {name: "Break Timer", description: "With this Break Timer you can keep track of all your training rutines", image: Timer, link:"https://matiasmedrano66.github.io/trainingtimemachine/"},
        {name: "Expenses Tracker", description: "Keep track of your money expenses with this great app", image: Expenses, link: "https://matiasmedrano66.github.io/expensestracker/"}
    ]

    return (
        <div name="portfolio" id="portfolio" className='portfolio'>
            <h1>Portfolio</h1>
            <p className="white-text">Take a look at some of my projects!</p>

            <div class="row project-group">
            { projects.map(project => {
                return (
                <div class="col-sm-12 col-lg-6 col-xl-4 card-cont">
                    <div class="card project-card" >
                        <img src={project.image} class="card-img-top" alt="..." ></img>
                        <div class="card-body">
                            <h5 class="card-title">{project.name}</h5>
                            <p class="card-text">{project.description}</p>
                            <a href={project.link} target="_blank" class="btn btn-secondary">Open</a>
                        </div>
                    </div>
                </div>
                )
                })
            }
            </div>
        </div>
    );
}

export default Portfolio;