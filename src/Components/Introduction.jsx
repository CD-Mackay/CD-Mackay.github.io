import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Introduction() {
  return (
    <div id="info-wrapper">
    <div id="about-info">
        <h2>Connor Mackay</h2>
        <h4>Toronto Web Developer</h4> 
        <ul class="contact-info">
          <li>
            <a href="https://www.linkedin.com/in/connor-mackay-800992bb/" target="blank">
              <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
            </a>
          </li>
          <li>
            <a href="https://github.com/CD-Mackay" target="blank">
              <FontAwesomeIcon icon={["fab", "github-alt"]} />
            </a>
          </li>

          <li>
            <a href="mailto: connor.mackay@gmail.com">
              <FontAwesomeIcon icon={["fa", "envelope"]} />
            </a>
          </li>
          <li>
            <a href="tel: 647-393-4507">
              <i class="fas fa-phone"></i>
            </a>
          </li>
        </ul> 
      </div>
      </div>
  )
}