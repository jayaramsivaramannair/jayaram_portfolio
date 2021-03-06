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
            return (
            <div className="project-gallery" key={project.image}>
                <h2>
                  {project.title}
                </h2>
                <h3>
                  {project.subtitle}
                </h3>
                <a href={project.link} >
                 {/*<div className="image-container"><img src={project.image} alt={project.description}/></div>*/}
                 <span className="project-link"><h3>{`<Code />`}</h3></span>
                </a>
                <div>
                  <p>{project.description}</p>
                </div>
            </div>
            )
          })}
        </div>
    </section>
  )
}

export default Projects
