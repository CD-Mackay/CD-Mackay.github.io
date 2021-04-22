import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Footer() {
  return (
    <footer>
    <ul className="footer-links">
      <li>
        <a href="https://www.linkedin.com/in/connor-mackay-800992bb/" target="blank">
        <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
        </a>
      </li>
      <li>
        <a href="https://github.com/CD-Mackay">
        <FontAwesomeIcon icon={["fab", "github-alt"]} />
        </a>
      </li>
      <li>
        <a href="mailto: connor.mackay@gmail.com">
        <FontAwesomeIcon icon={["fa", "envelope"]} />
        </a>
      </li>
      <li>
        <a href="tel: 6473934597">
        <FontAwesomeIcon icon={["fa", "phone"]} />
        </a>
      </li>
    </ul>
  </footer>
  )
}