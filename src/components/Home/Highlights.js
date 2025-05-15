import Image from 'next/image'
import React from 'react'
import Image1 from "../../../public/Image1.webp"
import Image2 from "../../../public/Image2.webp"
import Image3 from "../../../public/Image3.webp"
import Image4 from "../../../public/Image4.webp"

const Highlights = () => {
  return (
    <>
        <div className='high-wrapper'>
            <div className='high-container'>
                <div className='high-header'>
                    <h1>Highlights and benefits for Sunrise customers</h1>
                </div>
                <div className='high-card-container'>
                    <div className='high-card'>
                        <Image src={Image1} width={314} height={120} alt='abc' className='image-style'/>
                        <div className='card-content'>
                            <h3>Switching to Sunrise is twice as rewarding</h3>
                            <p>Secure your festival ticket with up to 25% discount with Sunrise Moments.</p>
                        </div>
                        {/* <button><p>Find out more</p><Image src="https://a.storyblok.com/f/113473/x/2315408962/arrow-right.svg" width={24} height={24} alt='abc'/></button> */}
                    </div>
                    <div className='high-card'>
                        <Image src={Image2} width={314} height={120} alt='abc' className='image-style'/>
                        <div className='card-content'>
                            <h3>Enjoy Sky Show Premium with no limits</h3>
                            <p>In the mood for unlimited entertainment? Treat yourself to 12 months of bingeworthy series and the latest films at a special price – cancel any time, stream endlessly.</p>
                        </div>
                        {/* <button><p>Find out more</p><Image src="https://a.storyblok.com/f/113473/x/2315408962/arrow-right.svg" width={24} height={24} alt='abc'/></button> */}
                    </div>
                    <div className='high-card'>
                        <Image src={Image3} width={314} height={120} alt='abc' className='image-style'/>
                        <div className='card-content'>
                            <h3>Save when you take out multiple mobile subscriptions!</h3>
                            <p>Get 50% off the subscription price – forever! If you take out extra mobile subscriptions for family and friends, we’ll give you 50% off. The subscriptions can be canceled at any time.</p>
                        </div>
                        {/* <button><p>Find out more</p><Image src="https://a.storyblok.com/f/113473/x/2315408962/arrow-right.svg" width={24} height={24} alt='abc'/></button> */}
                    </div>
                    <div className='high-card'>
                        <Image src={Image4} width={314} height={120} alt='abc' className='image-style'/>
                        <div className='card-content'>
                            <h3>Feel secure on the Internet? </h3>
                            <p>Try Sunrise Protect for 3 months free of charge. Stay protected in the digital world with Sunrise.</p>
                        </div>
                        {/* <span>Find out more<span><Image src="https://a.storyblok.com/f/113473/x/2315408962/arrow-right.svg" width={24} height={24} alt='abc'/></span></span> */}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Highlights