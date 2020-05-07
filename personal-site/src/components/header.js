import React from 'react'
import Link from 'gatsby-link'
import icon from '../images/Icon.png'
import './header.css'

const Header = () => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={icon} height="65x"/></Link>
      <Link to="/about">About</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/resume"><button>Resume</button></Link>
    </div>
  </div>
)

export default Header