import React from 'react'
import Hero from './Hero'
import SafetyRightsSection from './SafetyRightsSection'
import AboutMissionSection from './AboutMissionSection'
import ResidentialServicesSection from './ResidentialServicesSection'
import GlimpseSection from './GlimpseSection'
import HowItWorksSection from './HowItWorksSection'
import OurTeam from '../../components/OurTeam'
import TestimonialsSection from '../../components/TestimonialsSection'
import QualitySection from './QualitySection'
import HomeBlogSection from './HomeBlogSection'


export const Home = () => {
  return (
   <>
   <Hero /> 
    <SafetyRightsSection /> 
    <AboutMissionSection />
    <ResidentialServicesSection />
    <GlimpseSection />
     <QualitySection />
    <HowItWorksSection />
    <OurTeam />
    <TestimonialsSection />
    <HomeBlogSection/>
   
   
   </>
  )
}

