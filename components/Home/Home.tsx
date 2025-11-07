import ResponsiveNavbar from '@/components/Home/Navbar/ResponsiveNavbar'
import Hero from '@/components/Home/Hero/Hero'
import ServiceSection from '@/components/Home/Service/ServiceSection'
import ResumeSection from '@/components/Home/Resume/ResumeSection'
import SkillSection from '@/components/Home/Skills/SkillSection'


const HomePage = () => {
  return (
    <div className="">
      <ResponsiveNavbar/>
      <Hero/>
      <ServiceSection/>
      <ResumeSection/>
      <SkillSection/>
    </div>
  )
}

export default HomePage