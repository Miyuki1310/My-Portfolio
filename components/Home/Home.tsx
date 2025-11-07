import React from 'react'
import ResponsiveNavbar from '@/components/Home/Navbar/ResponsiveNavbar'
import Hero from '@/components/Home/Hero/Hero'
import ServiceSection from '@/components/Home/Service/ServiceSection'
import ResumeSection from '@/components/Home/Resume/ResumeSection'


const HomePage = () => {
  return (
    <div className="">
      <ResponsiveNavbar/>
      <Hero/>
      <ServiceSection/>
      <ResumeSection/>
    </div>
  )
}

export default HomePage