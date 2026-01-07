import React from 'react'
import logoImage from '../assets/logo.png'
import './Navbar.css'

function Navbar() {
  return (
    <>
      <nav>
        <a href=""><img src={logoImage} alt="Logo" /></a>
        <span>Himanshu Sahu</span>
        <ul>
          <a href="AboutMe.jsx"><li>Home</li></a>
          <a href="AboutMe.jsx"><li>About</li></a>
          <a href="Skills.jsx"><li>Skills</li></a>
          <a href="Portfolio.jsx"><li>Portfolio</li></a>
          <a href="Contact.jsx"><li>Contact</li></a>
        </ul>
      </nav>
    </>
  )
}

export default Navbar

