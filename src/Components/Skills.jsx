import React from 'react';

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div class="container">
        <ul class="wrapper">
          <li>
            <h3>Languages</h3>
            <ul class="skills-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Ruby</li>
            </ul>
          </li>
          <li>
            <h3>Libraries & Frameworks</h3>
            <ul class="skills-list">
              <li>Jquery</li>
              <li>Bootstrap 4</li>
              <li>Ajax</li>
              <li>Express.js</li>
              <li>React</li>
              <li>Ruby on Rails</li>
            </ul>
          </li>
          <li>
            <h3>Databases and CMS</h3>
            <ul class="skills-list">
              <li>PostgreSQL</li>
              <li>ActiveRecord</li>

            </ul>
          </li>
          <li>
            <h3>Testing</h3>
            <ul class="skills-list">
              <li>Mocha/Chai</li>
              <li>Jest</li>
              <li>Cypress</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  )
}