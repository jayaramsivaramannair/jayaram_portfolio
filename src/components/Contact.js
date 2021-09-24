import React, {useState} from 'react'

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function encode(data) {
    return Object.keys(data)
    .map((key) => {
      return encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
    })
    .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: encode({'form-name': 'contact', name, email, message}),
    })
    .then(() => alert('Message sent!'))
    .catch((error) => alert(error));
  }

  return (
    <section id="contact">
      <div className="contact-form">
          <form netlify name="contact" onSubmit={handleSubmit}>
            <h2>
              Hire Me
            </h2>
            <p></p>
            <div className="contact-form-name">
              <label htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="contact-form-email">
              <label htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="contact-form-message">
              <label htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                onChange={(e) => setMessage(e.target.value)}
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
