import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const ProductCategory = ({ category: {image, name}}) => {
  return (
    <div>
      <Link href={`/category/${name}`}>
        <div className="product-card">
          <img 
            src={urlFor(image[0])}
            width={250}
            height={250}
            className="product-image product-detail-image"
          />
          <p className="product-name dark:text-white text-ecommerce-dark">{name}</p>
        </div>
      </Link>
    </div>
  )
}

export default ProductCategory
