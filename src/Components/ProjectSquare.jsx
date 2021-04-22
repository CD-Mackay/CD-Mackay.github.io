import React from 'react';

export default function ProjectSquare(props) {
  return (
    <div class="project-square">
          <img src={props.image} class="project-image" alt="project-screen" />
          <h3>props.title</h3>
          <ul>
            <li>Full-Stack Application which connects users for mutual aid based on location.</li>
            <li>Built Collaboratively with <a href="https://github.com/justinkwanchan" target="blank">Justin Chan</a> and <a href="https://github.com/alan-mak" target="blank">Alan Mak</a></li>
            <li><a href="https://github.com/alan-mak/HelpMeHelpYou"><i class="dark-icon fab fa-github"></i></a></li>
          </ul>
        </div>
  )
}