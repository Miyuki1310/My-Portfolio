import { Educations } from '@/constants/constants'
import React from 'react'
import EducationCard from './EducationCard'


const EducationSection = () => {
  return (
    <div>
        <h2 className='text-3xl sm:text-4xl font-bold'>My <span className='text-cyan-200'>Education</span></h2>
        <div className="flex flex-col gap-6 mt-6">
            {Educations.map((edu, index) => {
                return (
                    <EducationCard key={index} {...edu} />
                )
            })}
        </div>
    </div>
  )
}

export default EducationSection