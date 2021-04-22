import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function ProjectSquare(props) {
  return (
    <div class="project-square">
          <img src={props.image} class="project-image" alt="project-screen" />
          <h3>{props.title}</h3>
          <ul>
            <li>{props.description}</li>
            {props.stack}
            <li>
              <a href="https://github.com/alan-mak/HelpMeHelpYou">
              <FontAwesomeIcon icon={["fab", "github-alt"]} />
              View Project
              </a>
            </li>
          </ul>
        </div>
  )
}