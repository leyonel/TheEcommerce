import React from 'react'
import Link from 'next/link';
import {urlFor} from '../lib/client';

const HomeBanner = ({ homeBanner}) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'> { homeBanner.smallText}</p>
        <h3> {homeBanner.midText}</h3>
        <h1> {homeBanner.largeText1}</h1>

        <img src= {urlFor(homeBanner.image)} alt="toner" className='hero-banner-image' />

        <div>
           <Link href= {`/product/${homeBanner.product}`}>
              <button type='button'>{ homeBanner.buttonText}</button>
           </Link>

           <div className='desc'>
              <h5>{homeBanner.product}</h5>
              <p>{homeBanner.desc}</p>
              <p>Disponible 1 de {homeBanner.stock}</p>
           </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner