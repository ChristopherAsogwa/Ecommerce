import React from 'react'
import Link from 'next/link';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container ecommerce-gradient">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button className="bg-white" type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc text-white">
            <h3>Description</h3>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
