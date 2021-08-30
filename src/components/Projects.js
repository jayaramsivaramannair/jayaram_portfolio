import React from 'react'
import {projects} from "../data";

function Projects() {
  return (
    <section id="projects">
      <div>
        <div>
          <h1>
            Projects
          </h1>
          <p>
            Technologies which I have used in making of these projects
          </p>
        </div>
        <div>
          {projects.map((project) => {
            return <a href={project.link} key={project.image}>
              <div className="project-gallery">
                <img src={project.image} alt={project.description}/>
                <div>
                  <h2>
                    {project.subtitle}
                  </h2>
                  <h1>
                    {project.title}
                  </h1>
                  <p>{project.description}</p>
                </div>
              </div>
            </a>
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
