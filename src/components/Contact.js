import React from 'react'

function Contact() {
  return (
    <section id="contact">
      <div>
          <form netlify name="contact">
            <h2>
              Hire Me
            </h2>
            <p></p>
            <div>
              <label htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div>
              <label htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
              />
            </div>
            <button
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
    </section>
  )
}

export default Contact
