'use client'
import { formatDateToMonthYear } from '@/Helper/formatDate'
import { EducationsType } from '@/types/Type'
import { motion } from 'framer-motion';


const EducationCard = ({startDate, endDate, degree, institution, description, Icon}: EducationsType) => {
  return (
    <div>
        <motion.div initial={{ opacity: 0, x: -100 }} // start hidden and shifted left
                    whileInView={{ opacity: 1, x: 0 }} // animate when in view
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }} 
                    className='p-4 sm:p-8 flex gap-6 bg-blue-950/20'>
                <div>
                    <div className="w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center text-4xl rounded-full bg-blue-950">
                        {Icon ? <Icon /> : null}
                    </div>
                </div>
                <div className="flex-1">
                    <div className="px-6 py-1 rounded-full bg-gray-200 w-fit">
                        <p className='text-gray-600 text-sm sm:text-lg'>
                            {`${formatDateToMonthYear(startDate)} – ${formatDateToMonthYear(endDate)}`}
                        </p>
                    </div>
                    <h3 className='text-xl sm:text-2xl text-gray-200 font-semibold mt-6'>{degree}</h3>
                    <p className='text-gray-400 text-sm sm:text-xl mt-3'>
                        {institution}
                    </p>
                    <p className='text-gray-300 mt-3 text-sm sm:text-xl'>
                        {description}
                    </p>
                </div>
            </motion.div>
    </div>
  )
}

export default EducationCard