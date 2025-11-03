import { NavLinks } from '@/constants/constants'
import Link from 'next/link'
import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'

type Props = {
    showNav: boolean;
    handleShowNavbar: () => void;
}


const MobileNavbar = ({ showNav, handleShowNavbar } : Props) => {
    const showNavBar = showNav ? 'translate-x-0' : 'translate-x-[100%]';
  return (
    <div className="relative z-10">
        {/* Overlay */}
        <div className={`fixed inset-0 bg-black opacity-50 ${showNavBar}`}></div>
        <div className={`fixed right-0 top-0 bottom-0 w-3/4 sm:w-3/6 transform bg-[#0d0d1f] transition-all duration-500 flex flex-col px-4 ${showNavBar}`}>
            <button onClick={handleShowNavbar} className='self-end my-10 mr-5 text-black bg-white rounded-lg text-3xl font-bold mb-10'>
                <IoCloseOutline />
            </button>
            {NavLinks.map((item) => {
                return (
                    <Link key={item.id} href={item.url} className='text-gray-300 flex items-center border-collapse px-4 text-xl py-4 border-y-[0.5px] border-gray-700'>
                        <item.icon className='inline-block mr-4 w-5 h-5 align-middle'/>
                        {item.label}
                    </Link>
                )
            })}
        </div>
    </div>
  )
}

export default MobileNavbar