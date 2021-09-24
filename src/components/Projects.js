import React from 'react'
import {projects} from "../data";

function Projects() {
  return (
    <section id="projects">
        <div>
          <h1>
            Projects
          </h1>
        </div>
        <div className="project-list">
          {projects.map((project) => {
            return <div className="project-gallery">
                <a href={project.link} key={project.image}>
                <img src={project.image} alt={project.description}/>
                <div>
                  <h3>
                    {project.subtitle}
                  </h3>
                  <h2>
                    {project.title}
                  </h2>
                  <p>{project.description}</p>
                </div>
                </a>
            </div>
          })}
        </div>
    </section>
  )
}

export default Projects
