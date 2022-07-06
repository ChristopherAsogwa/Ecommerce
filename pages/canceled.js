import React, { useEffect } from 'react';
import Link from 'next/link';
import { BsFillXOctagonFill } from 'react-icons/bs';

import { runSnow } from '../lib/utils';

const Canceled = () => {

  useEffect(() => {
    runSnow();
  })
  
  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsFillXOctagonFill />
        </p>
        <h2>Order Canceled!</h2>
        <Link href="/">
          <button 
            className="btn"
            width="300px"
            type="button"
          >
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Canceled
