'use client'
import Image from 'next/image'
import Link from 'next/link';
import { MdArrowRightAlt } from 'react-icons/md';
import Typewriter from "typewriter-effect";
import ParticleBackground from '@/components/Home/Hero/ParticleBackground';


const Hero = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
        <ParticleBackground/>
        <div className="flex flex-col gap-6 text-center items-center">
            <div className="relative w-30 h-30  md:w-40 md:h-40 rounded-full">
                <Image src="/avatar.png" alt="Profile Picture" fill className='rounded-full object-cover'/>
            </div>
            <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>Creating web products,
                <br></br>
                brands, <span className='text-cyan-200'>and experiences. </span>
            </h1>
            <h2 className='text-sm md:text-2xl font-medium lg:flex '>
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
            </h2>
            <Link href={"https://github.com/Miyuki1310"} className='flex items-center gap-2 text-md md:text-lg py-3 px-5 md:py-4 md:px-10 rounded-full font-bold bg-blue-800 hover:bg-blue-900 transition-all duration-300'>
                See my Github <MdArrowRightAlt className='text-white text-xl md:text-3xl ' />
            </Link>
        </div>
    </div>
  )
}

export default Hero