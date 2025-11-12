'use client'
import React from 'react'
import Navbar from '@/components/Home/Navbar/Navbar';
import MobileNavbar from '@/components/Home/Navbar/MobileNavbar';


const ResponsiveNavbar = () => {
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);

    const handleOpenMenu = () => {
        setShowMobileMenu(prev => !prev);
    }
  return (
    <div className='relative z-5'>
        <Navbar handleShowNavbar={handleOpenMenu}/>
        <MobileNavbar showNav={showMobileMenu} handleShowNavbar={handleOpenMenu}/>
    </div>
  )
}

export default ResponsiveNavbar