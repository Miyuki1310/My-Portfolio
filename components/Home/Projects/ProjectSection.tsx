import { Projects } from '@/constants/constants'
import React from 'react'
import ProjectCard from './ProjectCard.tsx/ProjectCard'


const ProjectSection = () => {
  return (
    <section id='projects' className='py-25 container'>
        <h2 className='text-3xl sm:text-4xl font-bold text-center'>My latest <span className='text-cyan-200'>Projects</span></h2>
        <div className="mt-10 grid justify-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-7 gap-y-15">
            {Projects.map((project) => {
                return (
                    <ProjectCard key={project.img} {...project} />
                )
            })}
        </div>
    </section>
  )
}

export default ProjectSection