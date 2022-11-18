import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner: {
  image
}}) => {
  return (
    <div className="footer-banner-container">
        <div className="banner-desc">
          <div className="left">
              <h3>Nuestros envios son al dia siguiente via estafeta!</h3>
              
          </div>
          <div className="right">
              <img src={urlFor(image)} className="footer-banner-image"/>
              
          </div>
          
          {/* <div className="right">
          <p>{smallText}</p>
          <h3>Los toner</h3>
          <p>{desc}</p>

          {/* <Link href={`/product/${product}`}>
              <button type='button'>{buttonText}</button>
          </Link> }
          </div> */}
          {/* <img src={urlFor(image)} className="footer-banner-image"/> */}
        </div>
        
        
    </div>
  )
}

export default FooterBanner