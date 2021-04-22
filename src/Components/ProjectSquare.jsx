import React from 'react';

export default function ProjectSquare(props) {
  return (
    <div class="project-square">
          <img src={props.image} class="project-image" alt="project-screen" />
          <h3>{props.title}</h3>
          <ul>
            <li>{props.description}</li>
            {props.stack}
            <li><a href="https://github.com/alan-mak/HelpMeHelpYou"><i class="dark-icon fab fa-github"></i></a></li>
          </ul>
        </div>
  )
}