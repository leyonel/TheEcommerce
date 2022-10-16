import React from 'react'

const Home = () => {
  return (
    <>
        HeroBanner

        <div>
            <h2>Venta de Productos</h2>
            <p>Toners en variedad</p>
        </div>

        <div>
            {['Product 1', 'Product 2'].map((product) => product)}
        </div>

        Footer
    </>
  )
}

export default Home