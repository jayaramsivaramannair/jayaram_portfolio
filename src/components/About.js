import React from 'react'

function About() {
  return (
    <section id="about">
        <div>
          <h1>
            Hi, I'm Jayaram
            <br/>
          </h1>
          <p>
            I am a full-stack software engineer with a keen interest in Bitcoin, Blockchain and backend development
          </p>
          <div>
            <a href="#contact">Work With Me</a>
            <a href="#projects">My Projects</a>
          </div>
        </div>
        <div className="hero-image">
          <img alt="hero" src="./coding.svg"/>
        </div>
    </section>
  )
}

export default About
