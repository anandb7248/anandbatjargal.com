import React, {useState} from 'react'
import Link from 'gatsby-link'
import icon from '../images/Icon.png'
import './header.css'
import { renderStatic } from 'react-helmet'
import resumeFile from '../resume/Anand_Batjargal_Resume.pdf'

class Header extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 50){
      this.setState({
        hasScrolled: true
      })
    }else{
      this.setState({
        hasScrolled: false
      })
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
          <div className='HeaderGroup'>
            <Link to="/"><img src={icon} height="65x"/></Link>
            <Link className="text" to="#about">About</Link>
            <Link className="text" to="/">Skills</Link>
            <Link className="text" to="/">Experience</Link>
            {/* <Link className="text" to="/">Projects</Link> */}
            <Link className="text" to="/">Contact</Link>
            <a href={resumeFile} target="_blank" rel="noopener noreferrer"><button>Resume</button></a>
          </div>
        </div>
    );
  } 
    
}

export default Header