import React from 'react';
import ProjectSquare from './ProjectSquare';
import caesar from '../Images/caesar.png';
import fibonacci from '../Images/fibonacci.png';
import helpmehelpyou from '../Images/helpmehelpyou.png';
import litevote from '../Images/litevote.png';
import rails from '../Images/rails.png';
import recipe from '../Images/recipe.png';
import scheduler from '../Images/scheduler.png';
import './projects.scss';

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div id="projects-grid">
        <ProjectSquare image={caesar} 
                       title={"Caesar Cipher"}
                       description={"Allows for encryption/decryption of short messages using a caesar cipher."}
                       stack={<li>Users can set encryption and decrpytion key to ensure confidentiality.</li>}
                       url={"https://github.com/CD-Mackay/caesar-messaging"}/>
        <ProjectSquare image={fibonacci} 
                       title={"Fibonacci Generator"}
                        description={"Practice project to implement data visualization"}
                        stack={<li>React front end, Express API accesses Postgresql database.</li>}
                        url={"https://github.com/CD-Mackay/fibonacci-generator"} />
        <ProjectSquare image={helpmehelpyou} 
                       title={"HelpmeHelpYou"}
                       description={"Full-Stack Application which connects users for mutual aid based on location."}
                       stack={<li>Built Collaboratively with 
                                <a href="https://github.com/justinkwanchan" target="blank"> Justin Chan
                                </a> and 
                                <a href="https://github.com/alan-mak" target="blank"> Alan Mak
                                </a>
                              </li>}
                       url={"https://github.com/alan-mak/HelpMeHelpYou"}/>
        <ProjectSquare image={litevote} 
                       title={"Litevote"}
                       description={"Jquery/Express application which helps users make group decisions."}
                       stack={<li>Built collaboratively with 
                                <a href="https://github.com/alan-mak" target="blank"> Alan Mak
                                </a>
                              </li>}
                       url={"https://github.com/alan-mak/LiteVote"}/>
        <ProjectSquare image={recipe} 
                       title={"Alternative Recipe Format"}
                       description={"Made prior to attending Lighthouse Labs. Alternative format for recipe blogs to make cooking more accessible."}
                       stack={<li>Simple HTML, CSS with basic Javascript</li>}
                       url={"https://github.com/CD-Mackay/Alternative-Recipe-Format"}/>
        <ProjectSquare image={scheduler} 
                       title={"Scheduler"}
                       description={"single page application built for Lighthouse Labs Bootcamp"} 
                       stack={<li>Built with React, tested through Jest and Storybook</li>}
                       url={"https://github.com/CD-Mackay/scheduler"}/>
                       
      </div>
      </section>
  )
}