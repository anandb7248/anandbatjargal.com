import React from 'react'
import Link from 'gatsby-link'
import github from '../images/GitHub.png'
import email from '../images/Mail.png'
import linkedin from '../images/LinkedIn.png'
import down from "../images/downbtn.png"

const IndexPage = () => (
  <div className="Hero">
    <div className="HeroGroup">
      <div className="top">
        <h3>Hi, my name is</h3>
        <h1>Anand Batjargal</h1>
      </div>
      <div className="bottom">
        <h3>I am a software engineer based in San Francisco Bay Area.</h3>
        <h4>I enjoy building iOS and Full-Stack Web applications with an emphasis on great design.</h4>
      </div>
      <div className="logos">
        <a href="https://github.com/anandb7248"><img src={github} height="50px"/></a>
        <a href = "mailto:anandb7248@gmail.com"><img src={email} height="50px"/></a>
        <a href="https://www.linkedin.com/in/anandbatjargal/"><img src={linkedin} height="50px"/></a>
      </div>
      <div className="down">
      <a href=""><img src={down} height="45px"/></a>
      </div>
    </div>
  </div>
)

export default IndexPage
