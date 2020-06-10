import React, { useState } from 'react'
import Link from 'gatsby-link'
import icon from '../images/Icon.png'
import './header.css'
import { renderStatic } from 'react-helmet'
import resumeFile from '../resume/Anand_Batjargal_Resume.pdf'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({
        hasScrolled: true,
      })
    } else {
      this.setState({
        hasScrolled: false,
      })
    }
  }

  render() {
    return (
      <div
        className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}
      >
        <div className="HeaderGroup">
          <a href="/#top">
            <img src={icon} height="55x" />
          </a>
          <a href="/#about">About</a>
          <a href="/#skills">Skills</a>
          <a href="/#experience">Experience</a>
          {/* <Link className="text" to="/">Projects</Link> */}
          <a href="/#contact">Contact</a>
          <a href={resumeFile} target="_blank" rel="noopener noreferrer">
            <button>Resume</button>
          </a>
        </div>
      </div>
    )
  }
}

export default Header
