'use client'
import React from 'react'
import Navbar from './Navbar';
import MobileNavbar from './MobileNavbar';


const ResponsiveNavbar = () => {
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);

    const handleOpenMenu = () => {
        setShowMobileMenu(prev => !prev);
    }
  return (
    <div>
        <Navbar handleShowNavbar={handleOpenMenu}/>
        <MobileNavbar showNav={showMobileMenu} handleShowNavbar={handleOpenMenu}/>
    </div>
  )
}

export default ResponsiveNavbar