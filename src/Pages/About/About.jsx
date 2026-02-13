import React from 'react'
import SupportingLivesSection from './SupportingLivesSection'
import FeedBackSection from './FeedBackSection'
import CommitmentSection from '../../components/CommitmentSection'
import OurTeam from '../../components/OurTeam'
import TestimonialsSection from '../../components/TestimonialsSection'
import ReadySection from './ReadySection'
import PageHeader from '../../components/HeaderBg'
import about from '../../assets/aboutHeaderImg.png'
const About = () => {
  return (
    <>
      <PageHeader label='About Us' title="The Heart of KDC Serenity Home" backgroundImage={about} description='KDC Serenity Home LLC provides residential and support services rooted in dignity, safety, and person-centered care.'  />
      <SupportingLivesSection />
      <FeedBackSection />
      <CommitmentSection />
      <OurTeam />
      <ReadySection />
      <TestimonialsSection />
      
    </>
  )
}

export default About
