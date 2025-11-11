'use client'
import Image from 'next/image'
import Link from 'next/link';
import { MdArrowRightAlt } from 'react-icons/md';
import Typewriter from "typewriter-effect";
import ParticleBackground from '@/components/Home/Hero/ParticleBackground';
import { motion } from 'framer-motion';


const Hero = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
        <ParticleBackground/>
        <div className="flex flex-col gap-6 text-center items-center">
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0}}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }} 
                className="relative w-30 h-30  md:w-40 md:h-40 rounded-full">
                <Image src="/avatar.png" alt="Profile Picture" fill className='rounded-full object-cover'/>
            </motion.div>
            <motion.h1
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0}}
                transition={{ duration: 1.3, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}  
                className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>Creating web products,
                <br></br>
                brands, <span className='text-cyan-200'>and experiences. </span>
            </motion.h1>
            <motion.h2 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0}}
                transition={{ duration: 1.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }} 
                className='text-sm md:text-2xl font-medium lg:flex '>
                Hi! I&apos;m Nguyen Khanh Huan - A Passionate <span className='text-cyan-200 ml-2'>
                    <Typewriter 
                        options={{
                            strings: [
                                "Frontend Developer.",
                                "Backend Developer.",
                                "Fullstack Developer.",
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 75, // typing speed
                            deleteSpeed: 50,
                            }} 
                    />
                </span>
            </motion.h2>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0}}
                transition={{ duration: 1.9, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }} 
                className="mt-6"
            >
                <Link href="#projects" className='inline-flex items-center gap-2 px-6 py-3 bg-cyan-200 text-blue-950 font-semibold rounded-full hover:bg-cyan-300 transition duration-300'>
                    View My Work <MdArrowRightAlt className='w-5 h-5'/>
                </Link>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero