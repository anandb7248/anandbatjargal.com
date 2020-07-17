import React from 'react'
import Hero from '../components/hero'
import About from '../components/about'
import Skills from '../components/skills'
import Experience from '../components/experience'
import Contact from '../components/contact'
import Header from '../components/header'
import Footer from '../components/footer'

const IndexPage = () => (
  <div id="top">
    <Header />
    <Hero />
    <Experience />
    <Skills />
    <About />
    <Contact />
    <Footer />
  </div>
)

export default IndexPage
