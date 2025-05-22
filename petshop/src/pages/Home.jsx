import React from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import About from '../components/About'
import Service from '../components/Service'
import Contact from '../components/Contact'
import Testimonies from '../components/Testimonies'

const Home = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <Service />
      <Testimonies />
      <Contact />
    </div>
  )
}

export default Home