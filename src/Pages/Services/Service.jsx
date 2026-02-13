import React from 'react'
import ServicesSection from './ServicesSection'
import TestimonialsSection from '../../components/TestimonialsSection'
import ReadySection from '../About/ReadySection'
import PageHeader from '../../components/HeaderBg'
import service from '../../assets/service4.png'
import OurApproachSection from './OurApproachSection'
import EligibilitySection from './EligibilitySection'
const Service = () => {
  return (
    <>
        <PageHeader label='our services' title="Residential & Support Services" backgroundImage={service} description='Services are delivered according to each individual’s assessed needs and documented person-centered plan.'  />
        
      <ServicesSection />
      <OurApproachSection />
      <EligibilitySection />
         <ReadySection />
        <TestimonialsSection />
     
    </>
  )
}

export default Service
