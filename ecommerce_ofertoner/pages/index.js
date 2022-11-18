import React from 'react'
import { client } from '../lib/client'
import { Product, FooterBanner, HomeBanner } from '../components'

const Home = ({products, bannerData}) => (
    <div>
       <HomeBanner homeBanner = {bannerData.length && bannerData[0]}/>

        <div className='products-heading'>
            <h2>Venta de Productos</h2>
            <p>Toners en variedad</p>
        </div>

        <div className='products-container'>
            {products?.map((product) => <Product key = {product._id} product = {product}/>)}
        </div>

       <FooterBanner footerBanner={bannerData && bannerData[1]}/>
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