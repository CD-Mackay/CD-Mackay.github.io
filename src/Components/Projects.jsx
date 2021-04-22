import React from 'react';
import ProjectSquare from './ProjectSquare';
import caesar from '../Images/caesar.png';
import fibonacci from '../Images/fibonacci.png';
import helpmehelpyou from '../Images/helpmehelpyou.png';
import litevote from '../Images/litevote.png';
import rails from '../Images/rails.png';
import recipe from '../Images/recipe.png';
import scheduler from '../Images/scheduler.png';

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div id="projects-grid">
        <ProjectSquare image={caesar} />
        <ProjectSquare image={fibonacci} />
        <ProjectSquare image={helpmehelpyou} 
                       description={"Full-Stack Application which connects users for mutual aid based on location."}
                       stack={<li>Built Collaboratively with 
                                <a href="https://github.com/justinkwanchan" target="blank">Justin Chan
                                </a> and 
                                <a href="https://github.com/alan-mak" target="blank">Alan Mak
                                </a>
                              </li>}/>
        <ProjectSquare image={litevote} 
                       description={"Jquery/Express application which helps users make group decisions."}
                       stack={<li>Built collaboratively with 
                                <a href="https://github.com/alan-mak" target="blank">Alan Mak
                                </a>
                              </li>}/>
        <ProjectSquare image={rails} />
        <ProjectSquare image={scheduler} />
      </div>
      </section>
  )
}