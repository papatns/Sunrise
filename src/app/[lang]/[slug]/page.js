import Navbar from '@/components/Home/Navbar'
import HeroSection from '@/components/Home/HeroSection'
import React from 'react'
import MenuBar from '@/components/Home/MenuBar'
import Highlights from '@/components/Home/Highlights'
import Bestsellers from '@/components/Home/Bestsellers'


const Home = () => {
  return (
    <div className='h-wrapper'>
        <div className='h-container'>
            <div>
                <Navbar/>
                
            </div>    
        </div> 
        <HeroSection/> 
        <MenuBar/> 
        <Highlights/> 
        <Bestsellers/>
    </div>
  )
}

export default Home