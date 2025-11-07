'use client'
import { Skills } from '@/constants/constants'
import SkillCard from '@/components/Home/Skills/SkillCard'


const SkillSection = () => {
  return (
    <div className='container py-16'>
        <h2 className='text-3xl sm:text-4xl font-bold text-center'>My <span className='text-cyan-200'>Skills</span></h2>
        <div className="flex flex-wrap justify-center gap-6 mt-16">
            {Skills.map((skill) => {
                return (
                    <SkillCard key={skill.id} {...skill} />
                )
            })}
        </div>
    </div>
  )
}

export default SkillSection