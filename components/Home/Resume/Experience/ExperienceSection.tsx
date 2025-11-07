import { Experiences } from '@/constants/constants'
import React from 'react'
import ExperienceCard from './ExperienceCard'


const ExperienceSection = () => {
  return (
    <div>
        <h2 className='text-3xl sm:text-4xl font-bold'>My Work <span className='text-cyan-200'>Experiences</span></h2>
        <div className="flex flex-col gap-6 mt-6">
            {Experiences.map((exp, index) => {
                return (
                    <ExperienceCard key={index} {...exp} />
                )
            })}
        </div>
    </div>
  )
}

export default ExperienceSection