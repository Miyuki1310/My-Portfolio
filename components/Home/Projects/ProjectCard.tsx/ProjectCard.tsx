'use client'
import { formatDateToMonthYear } from '@/Helper/formatDate'
import { ProjectType } from '@/types/Type'
import Image from 'next/image'
import TechnologyTags from './TechnologyTags'
import Link from 'next/link'
import { motion } from 'framer-motion'

const ProjectCard = ({startDate, endDate, name, description, img, technologies, link}: ProjectType) => {
  return (
    <motion.div 
        initial={{ opacity: 0, x: -100 }} // start hidden and shifted left
        whileInView={{ opacity: 1, x: 0 }} // animate when in viewx
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }} 
        className='flex flex-col gap-4'>
        <div className="relative h-[231px] sm:h-[300px] md:h-[400px] lg:h-[300px] xl:h-[231px] w-full">
            <Image
                src={img}
                alt={"Project Image"}
                layout="fill"
                objectFit="cover"
            />
        </div>
        <div>
            <div className="px-6 py-1 rounded-full bg-linear-to-r from-cyan-700/40 to-indigo-700/40 text-cyan-200 w-fit">
                <p className='text-sm sm:text-lg'>
                    {`${formatDateToMonthYear(startDate)} – ${formatDateToMonthYear(endDate)}`}
                </p>
            </div>
        </div>
        <div>
            <h3 className='text-lg sm:text-2xl font-bold flex items-center justify-between'>
                {name}
                {link ? (
                    <Link href={link} target='_blank' className='px-4 py-1 bg-transparent border border-cyan-200 text-sm font-bold rounded-full hover:bg-cyan-200 hover:text-blue-950 transition duration-300'>
                        View
                    </Link>) : (<div className="px-4 py-1 bg-transparent border border-cyan-200 text-sm font-bold rounded-full hover:bg-cyan-200 hover:text-blue-950 transition duration-300">
                    Private
                </div>)}
            </h3>
            <p className='mt-3 line-clamp-3 font-semibold text-sm sm:text-base text-gray-300'>{description}</p>
        </div>
        <div className="mt-auto flex gap-2 flex-wrap">
            {technologies.map((tech) => {
                return (
                    <TechnologyTags key={tech} name={tech} />
                )
            })}
        </div>
    </motion.div>
  )
}

export default ProjectCard