'use client'
import ExperienceSection from '@/components/Home/Resume/Experience/ExperienceSection'
import EducationSection from '@/components/Home/Resume/Education/EducationSection'

const ResumeSection = () => {
  return (
    <div id='experience' className='container py-25 grid grid-cols-1 gap-10 xl:grid-cols-2'>
        <ExperienceSection/>
        <EducationSection/>
    </div>
  )
}

export default ResumeSection