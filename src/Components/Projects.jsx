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
        <ProjectSquare image={helpmehelpyou} />
        <ProjectSquare image={litevote} />
        <ProjectSquare image={rails} />
        <ProjectSquare image={scheduler} />
      </div>
      </section>
  )
}