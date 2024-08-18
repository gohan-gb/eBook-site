import React from 'react'
import HeroSection from './Components/HeroSection'
import Section from './Components/Section'
import Navbar from '../../Common/Navbar'
import Footer from '../../Common/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection />
        <Section />
        <Section />
        <Footer/>
    </div>
  )
}

export default Home