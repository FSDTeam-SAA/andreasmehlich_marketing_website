import React from 'react'
import BeautySalonsHero from './_components/BeautySalonsHero'
import ButyFullBooked from './_components/ButyFullBooked'
import ButyFeaturesBarber from './_components/ButyFeaturesBarber'
import ButyYourIndustry from './_components/ButyYourIndustry'
import HowItWorks from '../barbershops/_components/HowItWorks'
import HowUserKora from '../barbershops/_components/HowUserKora'
import FAQ from '../_components/FAQ'
import CTA from '../_components/CTA'

function page() {
  return (
    <div>
      <BeautySalonsHero />
      <ButyFullBooked />
      <ButyFeaturesBarber />
      <ButyYourIndustry />
      <HowItWorks />
      <HowUserKora />
      <FAQ />
      <CTA />
    </div>
  )
}

export default page
