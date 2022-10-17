import React from 'react'
import Link from 'next/link';
const HomeBanner = () => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'> SMALL TEXT</p>
        <h3> MID TEXT</h3>

        <img src="" alt="toner" className='hero-banner-image' />

        <div>
           <Link href= "/prodcut/ID">
              <button type='button'>BUTTON TEXT</button>
           </Link>

           <div className='desc'>
              <h5>titulo</h5>
              <p>Descripcion</p>
           </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner