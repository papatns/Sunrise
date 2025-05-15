import Image from 'next/image'
import React from 'react'

const MenuBar = () => {
  return (
    <><div className='menu-wrapper'>
        <div className='menu-container'>
            <div className='menu-card'><Image src="https://a.storyblok.com/f/113473/x/19d5f4d7c8/user-falcon.svg" height={32} width={32} alt='abc'/></div>
            <div className='menu-card'><Image src="https://a.storyblok.com/f/113473/x/f1faccfd89/device-mobile-falcon.svg" height={32} width={32} alt='abc'/></div>
            <div className='menu-card'><Image src="https://a.storyblok.com/f/113473/x/a9dd0a292d/sunrise-internet-icon.svg" height={32} width={32} alt='abc'/></div>
            <div className='menu-card'><Image src="https://a.storyblok.com/f/113473/x/690aed98c9/tv-falcon.svg" height={32} width={32} alt='abc'/></div>
            <div className='menu-card'><Image src="https://a.storyblok.com/f/113473/x/8df133cddb/discount-falcon.svg" height={32} width={32} alt='abc'/></div>
        </div>
    </div>
        
    </>
  )
}

export default MenuBar