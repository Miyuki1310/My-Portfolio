'use client'
import ExperienceSection from '@/components/Home/Resume/Experience/ExperienceSection'
import EducationSection from '@/components/Home/Resume/Education/EducationSection'

const ResumeSection = () => {
  return (
    <div className='container pt-20 pb-16 grid grid-cols-1 gap-10 xl:grid-cols-2'>
        <ExperienceSection/>
        <EducationSection/>
    </div>
  )
}

export default ResumeSection