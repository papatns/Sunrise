import Image from 'next/image'
import React from 'react'
import BImage1 from "../../../public/BImage1.webp"
import BImage2 from "../../../public/BImage2.webp"
import BImage3 from "../../../public/BImage3.webp"

const Bestsellers = () => {
  return (
    <div className='best-wrapper'>
        <div className='best-container'>
            <h3 className='gift-label'>Our bestsellers</h3>
            <div className='best-card'>
                <span>Galaxy Buds3 Pro on us</span>
                <Image src={BImage1} height={100} width={100} alt=''/>
                <h3 class="product-title">Samsung Galaxy S25 Edge</h3>
                <p class="product-subtitle">With every Galaxy S25 Edge and Flex Upgrade</p>
                <button class="order-btn">Order now</button>
            </div>
        </div>
    </div>
  )
}

export default Bestsellers