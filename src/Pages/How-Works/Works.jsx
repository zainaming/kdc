import React from 'react'
import StepsSection from './StepsSection '
import CommitmentSection from '../../components/CommitmentSection'
import TestimonialsSection from '../../components/TestimonialsSection'
import ReadySection from '../About/ReadySection'
import PageHeader from '../../components/HeaderBg'
import works from '../../assets/howitworkHeaderImg.png'

const Works = () => {
  return (
  <>
      <PageHeader label='How It Works' title="How We Support You" backgroundImage={works} description='Our process is designed to be clear, supportive, and respectful—guiding you from first contact to ongoing care.'  />
    
    <StepsSection />
    <CommitmentSection />
    <TestimonialsSection />
    <ReadySection />
  </>
  )
}

export default Works