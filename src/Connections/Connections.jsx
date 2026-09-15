import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import Experience from '../Experience/Experience'
// import NewsInsights from '../NewsInsights/NewsInsights'
// import CultureSection from '../CultureSection/CultureSection'
// import CreativeJourney from '../CreativeJourney/CreativeJourney'
import Education from '../Education/Education'
import Projects from "../Projects/Projects"
import Capabilities from '../Capabilities/Capabilities'
import About from '../About/About'
import Contact from '../Contact/Contact'

function Connections() {
  return (
    <div>
      <HeroSection/>
      <Education/>
      <Projects/>
      <Capabilities/>
      <Experience/>
      <About/>
      <Contact/>
      {/* <NewsInsights/> */}
      {/* <CultureSection/> */}
      {/* <CreativeJourney/> */}
    </div>
  )
}

export default Connections
