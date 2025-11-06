'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react'

type Props = {
    img: string;
    title: string;
    description: string;
}

const ServiceCard = ({img, title, description}: Props) => {
  return (
    <motion.div 
        initial={{ opacity: 0, x: -100 }} // start hidden and shifted left
        whileInView={{ opacity: 1, x: 0 }} // animate when in view
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }} 
        className='col-span-1 flex flex-col justify-between gap-3 md:gap-6'>
            <div className="relative w-15 h-15">
                <Image src={img} alt={title} fill className='object-cover'/>
            </div>
            <h3 className='text-xl md:text-2xl font-bold text-gray-200'>{title}</h3>
            <p className='text-gray-200'>{description}</p>
    </motion.div>
  )
}

export default ServiceCard