'use client'
import { SkillType } from '@/types/Type'
import Tilt from 'react-parallax-tilt';


const SkillCard = ({ name, level, Icon }: SkillType) => {
  return (
      <Tilt scale={1.5} transitionSpeed={400}>
        <div className='bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center gap-3'>
            {Icon ? <Icon className='text-5xl mb-2' /> : null}
            <h3 className='text-xl font-semibold'>{name}</h3>
            <p className='text- text-gray-400 font-bold'>{level}</p>
        </div>
      </Tilt>
  )
}

export default SkillCard