import React from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import About from '../components/About'
import Service from '../components/Service'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Service />
      <Contact />
    </div>
  )
}

export default Home