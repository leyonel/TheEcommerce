import React from 'react'
import { client } from '../lib/client';
import { Product, FooterBanner, HomeBanner } from '../components'

const Home = () => (
    <div>
       <HomeBanner />

        <div className='products-heading'>
            <h2>Venta de Productos</h2>
            <p>Toners en variedad</p>
        </div>

        <div className='products-container'>
            {['Product 1', 'Product 2'].map((product) => product)}
        </div>

       <FooterBanner />
    </div>
  );

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {products, bannerData}
  }
}
export default Home