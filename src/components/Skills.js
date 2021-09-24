import React from 'react'
import {skills} from "../data"

function Skills() {
  const checkmark = '\u2714';
  return (
    <section id="skills">
      <div>
        <div>
          <h1>Skills & Technologies</h1>
          <p></p>
        </div>
        <div className="skills-container">
          {skills.map((skill, index) => {
            return <div className="skill-container" key={index}>
                    <span>{`${checkmark}  ${skill}`}</span>
                   </div>
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
