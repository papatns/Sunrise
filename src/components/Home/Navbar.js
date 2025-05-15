import React from 'react'
import Image from 'next/image'
import styles from "@/app/styles/Navbar.module.css"
import NavbarTop from './NavbarTop'
import NavbarBottom from './NavbarBottom'

const Navbar = () => {
  return (
    <>
      <div className='nt-container'>
        <Image src="https://www.sunrise.ch/eshop/HeaderIcons/sunrise_new_logo.svg" alt='Logo' width={110} height={100} className='logo'/>
        <NavbarTop/>
        
    </div>
    <NavbarBottom/>
    </>
    
  )
}

export default Navbar