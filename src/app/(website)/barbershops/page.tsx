import React from 'react'
import BarbershopsHero from './_components/BarbershopsHero'
import FullyBooked from './_components/FullyBooked'
import FeaturesBarber from './_components/FeaturesBarber'
import YourIndustry from './_components/YourIndustry'
import HowItWorks from './_components/HowItWorks'
import HowUserKora from './_components/HowUserKora'
import FAQ from '../_components/FAQ'
import CTA from '../_components/CTA'

function page() {
  return (
    <div>
      <BarbershopsHero />
      <FullyBooked />
      <FeaturesBarber />
      <YourIndustry />
      <HowItWorks />
      <HowUserKora />
      <FAQ />
      <CTA />
    </div>
  )
}

export default page
