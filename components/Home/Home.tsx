import ResponsiveNavbar from '@/components/Home/Navbar/ResponsiveNavbar'
import Hero from '@/components/Home/Hero/Hero'
import ServiceSection from '@/components/Home/Service/ServiceSection'
import ResumeSection from '@/components/Home/Resume/ResumeSection'
import SkillSection from '@/components/Home/Skills/SkillSection'
import ProjectSection from '@/components/Home/Projects/ProjectSection'


const HomePage = () => {
  return (
    <div className="">
      <ResponsiveNavbar/>
      <Hero/>
      <ServiceSection/>
      <ResumeSection/>
      <SkillSection/>
      <ProjectSection/>
    </div>
  )
}

export default HomePage