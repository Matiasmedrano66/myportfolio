import './Portfolio.css';
import Malma from '../images/malma.jpg';
import Timer from '../images/timer.jpg';
import Expenses from '../images/expenses.jpg';
import React, {useState, useEffect} from 'react';



const Portfolio = () => {

    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
    
    setOffsetY(window.pageYOffset);

    }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



    const projects = [
        {name: "MALMA Designs", description: "Simple page aplication of a Clothes store", image: Malma, link: "https://matiasmedrano66.github.io/spaclothesmag/"},
        {name: "Break Timer", description: "With this Break Timer you can keep track of all your training rutines", image: Timer, link:"https://matiasmedrano66.github.io/trainingtimemachine/"},
        {name: "Expenses Tracker", description: "Keep track of your money expenses with this great app", image: Expenses, link: "https://matiasmedrano66.github.io/expensestracker/"}
    ]

    return (
        <div name="portfolio" id="portfolio" className='portfolio' style={{ transform: `translateY(-${offsetY/8}px)`, transition: "all 2s ease-out" }}>
            <h1>Portfolio</h1>
            <p className="white-text">A small gallery of some of my projects. Take a look!</p>

            <div class="row project-group">
            { projects.map(project => {
                return (
                <div class="col-sm-12 col-lg-6 col-xl-4 card-cont" >
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