import React from 'react'
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';


const Layout = ({ children }) => {
  return (
    <div className="layout dark:bg-ecommerce-dark bg-white min-h-screen">
      <Head>
        <title>Chris JS Dev Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
