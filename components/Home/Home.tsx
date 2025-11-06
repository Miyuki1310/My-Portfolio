import React from 'react'
import ResponsiveNavbar from '@/components/Home/Navbar/ResponsiveNavbar'
import Hero from '@/components/Home/Hero/Hero'
import ServiceSection from '@/components/Home/Service/ServiceSection'


const HomePage = () => {
  return (
    <div className="">
      <ResponsiveNavbar/>
      <Hero/>
      <ServiceSection/>
    </div>
  )
}

export default HomePage