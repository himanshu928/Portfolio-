import React from 'react'
import "../Styles/Contact.css";
import linkedin from "../assets/images.png"

function Contact() {
  return (
    <section className="contact" id="contact">
        <div className="Heading-container">
    <h2>Contact Me</h2>
        </div>
  <div className="contact-wrapper">

    <div className="contact-left">
      <h2>Get In Touch</h2>
      <p>
        Have a project in mind or want to work together?
        Feel free to contact me.
      </p>

      <div className="contact-details">
        <div className="detail">
          <span>📍</span>
          <p>Haripur Mirdaha Khiron Reabareli (U,P) India</p>
        </div>

        <div className="detail">
          <span>✉️</span>
          <p>sahuhimanshu95656@gmail.com</p>
        </div>

         <div className="detail linkedin">
          <span><img src={linkedin} alt="" /></span>
          <p>https://www.linkedin.com/in/himanshu-sahu-237b20390/</p>
        </div>

        <div className="detail">
          <span>📞</span>
          <p>+91 8090966485</p>
        </div>
      </div>
    </div>

    <div className="contact-right">
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>

  </div>
</section>

  )
}

export default Contact
