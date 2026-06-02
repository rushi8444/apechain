import React from 'react'
import Navbar from '../components/common/Navbar'
import HeroSection from '../components/HomePage/HeroSection'
import IntroSection from '../components/HomePage/IntroSection'
import AppsSection from '../components/HomePage/AppSection'
import Marquee from '../components/HomePage/Marquee'

const Home = () => {
  return (
    
    <div>
      <Navbar />
      <HeroSection/>
      <IntroSection />
      <AppsSection />
      <Marquee/>
    </div>
  )
}

export default Home