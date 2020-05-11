import React from 'react'
import Hero from '../components/hero'
import About from '../components/about'
import Skills from '../components/skills'
import Experience from '../components/experience'
import Contact from '../components/contact'
import Header from '../components/header'

const IndexPage = () => (
  <div id="top">
    <Header />
    <Hero />
    <About/>
    <Skills/>
    <Experience/>
    <Contact/>
  </div>
)

export default IndexPage
