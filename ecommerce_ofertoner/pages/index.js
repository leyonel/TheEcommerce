import React from 'react'

import { Product, FooterBanner, HomeBanner } from '../components'

const Home = () => {
  return (
    <>
       <HomeBanner />

        <div className='products-heading'>
            <h2>Venta de Productos</h2>
            <p>Toners en variedad</p>
        </div>

        <div className='products-container'>
            {['Product 1', 'Product 2'].map((product) => product)}
        </div>

       <FooterBanner />
    </>
  )
}

export default Home