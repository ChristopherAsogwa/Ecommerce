import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

import { Cart } from './';
import { useStateContext } from '../context/StateContext';
import images from '../assets';
// import { getImageSize } from 'next/dist/server/image-optimizer';

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <nav className="flexBetween w-full fixed z-10 p-4 flex-row border-b dark:bg-ecommerce-dark bg-white dark:border-ecommerce-black-1 border-ecommerce-gray-1">
      <div className="flex flex-1 flex-row justify-start">
        <Link href="/">
          <div className="flexCenter md:hidden cursor-pointer" onClick={() => {}}>
            <Image 
              src={images.logo}
              objectFit="contain"
              width={32}
              height={32}
              alt="logo"
            />
            <p className="dark:text-white text-ecommerce-black-1 font-semibold text-lg ml-1">CJDStore</p>
          </div>
        </Link>
        <Link href="/">
          <div className="hidden md:flex" onClick={() => {}}>
            <Image 
              src={images.logo}
              objectFit="contain"
              width={32}
              height={32}
              alt="logo"
            />
          </div>
        </Link>
      </div>
      <div className="flex flex-initial flex-row justify-end">
        <div className="flex items-center mr-2">
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          />
          <label 
            htmlFor="checkbox"
            className="flexBetween w-8 h-4 bg-black rounded-2xl p-1 relative label"
          >
            <i className="fas fa-sun" />
            <i className="fas fa-moon" />
            <div className="w-3 h-3 absolute bg-white rounded-full ball" />
          </label>  
        </div>
        <div className="flex items-center mr-2 ml-2">
          <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
            <AiOutlineShopping />
            <span className="cart-item-qty">{totalQuantities}</span>
          </button>
        </div>
      </div>
      {showCart && <Cart /> }
    </nav>
    // <nav className="flex-between w-full fixed z-10 p-4 flex-row border-b dark:bg-ecommerce-dark bg-white dark:border-ecommerce-black-1 border-ecommerce-gray-1">
    //   <div className="flex flex-1 flex-row justify-start">
    //     <Link href="/">
    //       <div className="flexCenter md:hidden cursor-pointer" onClick={() => {}}>
    //         <Image 
    //           src={image.logo} 
    //           objectFit="contain"
    //           width={32}
    //           height={32}
    //           alt="logo"
    //         />
    //         {/* <p className="dark:text-white text-ecommerce-black-1 font-semibold text-lg ml-1">ChrisJsDev Store</p> */}
    //       </div>
    //     </Link>
    //     <Link href="/">
    //       <div className="flexCenter hidden md:flex" onClick={() => {}}>
    //         <Image 
    //           src={image.logo} 
    //           objectFit="contain"
    //           width={32}
    //           height={32}
    //           alt="logo"
    //         />
    //       </div>
    //     </Link>
    //   </div> 
    //   <div className="flex flex-1 flex-row justify-end">
    //     <div className="flexCenter   mr-2 justify-content">
    //       <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
    //         <AiOutlineShopping />
    //         <span className="cart-item-qty">{totalQuantities}</span>
    //       </button>
    //     </div>
    //   </div>
    //   {showCart && <Cart /> }
    // </nav>
  )
}

export default Navbar
