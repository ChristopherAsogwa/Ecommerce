import React from 'react'

import { client } from '../../lib/client';
import { Product, FooterBanner, HeroBanner } from '../../components';

const Category = ({ products }) => {
  return (
    <>
      <div className="products-heading mt-10 dark:text-white text-ecommerce-dark">
        <div className="h-4 m-2"/>
      </div>
      <div className="products-container">
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>
    </>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"]{
    name 
  }`;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      name: product.name
    }
  }));

  return {
    paths, 
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { name }}) => {
  const query = `*[_type == "product" && name == '${name}']`;

  const products = await client.fetch(query);

  return {
    props: { products }
  }
}

export default Category
