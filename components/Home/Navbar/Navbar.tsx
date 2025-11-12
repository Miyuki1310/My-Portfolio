'use client'
import { NavLinks } from '@/constants/constants'
import { handleDownloadCV } from '@/Helper/downloadCV'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { FaCode } from 'react-icons/fa'
import { FiDownload } from 'react-icons/fi'
import { HiBars3BottomRight } from 'react-icons/hi2'


interface NavbarProps {
    handleShowNavbar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ handleShowNavbar }) => {
    const [navBg, setNavBg] = React.useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 90) {
                setNavBg(true);
            } else {
                setNavBg(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
  return (
    <div className={`fixed w-full ${navBg ? 'bg-[#0f142ed9] shadow-md' : 'bg-transparent'} transition-all duration-300}`}>
        <div className="w-[90%] mx-auto flex items-center justify-between py-5">
            <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <FaCode className="w-5 h-5 text-black"></FaCode>
                </div>
                <h1 className="text-xl md:text-2xl hidden sm:block font-bold">NKH</h1>
            </div>
            <div>
                <ul className='hidden lg:flex items-center justify-between gap-4'>
                    {NavLinks.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link href={item.url} className='p-4 text-lg font-medium hover:text-cyan-300 transition-all duration-300'>{item.label}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className='flex items-center gap-2 sm:gap-4'>
                <button onClick={() => handleDownloadCV("/CV/NguyenKhanhHuan_Fullstack-Developer_CV.pdf")} className='px-3 py-4 bg-blue-800 rounded-lg flex items-center gap-1 hover:bg-blue-900 cursor-pointer transition-all duration-300 text-sm sm:text-base sm:px-8 sm:gap-3'>
                    <FiDownload className='w-5 h-5 text-white'/>
                    Download CV
                </button>
                <button className='p-3 cursor-pointer block lg:hidden' onClick={handleShowNavbar}>
                    <HiBars3BottomRight className='w-8 h-8 text-white'/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar