import React from 'react'
import {skills} from "../data"

function Skills() {
  return (
    <section id="skills">
      <div>
        <div>
          <h1>Skills & Technologies</h1>
          <p></p>
        </div>
        <div>
          {skills.map((skill) => {
            return <div>
                    <span>{skill}</span>
                   </div>
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
