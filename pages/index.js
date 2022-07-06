import React from 'react'

import { client } from '../lib/client';
import { ProductCategory, FooterBanner, HeroBanner } from '../components';

const Home = ({ productCategory, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>

      <div className="products-heading dark:text-white text-ecommerce-dark">
        <h2>Explore our Items Categories</h2>
        <p>Luxurious Shoes, T-shirts, Trousers, Snickers, Shorts for Men</p>
      </div>

      <div className="products-container">
        {productCategory?.map((category) => <ProductCategory key={category._id} category={category} />)}
      </div>

      <FooterBanner footerBanner={ bannerData && bannerData[0] } />
    </>
  )
}

export const getServerSideProps = async () => {
  // const query = '*[_type == "product"]';
  // const products = await client.fetch(query);

  const categoryQuery = '*[_type == "productCategory"]';
  const productCategory = await client.fetch(categoryQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { productCategory, bannerData }
  }
}

export default Home
