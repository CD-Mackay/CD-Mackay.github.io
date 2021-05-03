import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.scss';
import './projects.scss';


export default function ProjectSquare(props) {
  return (
    <div class="project-square">
          <img src={props.image} class="project-image" alt="project-screen" />
          <h3>{props.title}</h3>
          <ul className="project-list">
            <li>{props.description}</li>
            {props.stack}
          </ul>
          <a className="git-link" href="https://github.com/alan-mak/HelpMeHelpYou">
              <FontAwesomeIcon icon={["fab", "github-alt"]} />
              View Project
              </a>
        </div>
  )
}