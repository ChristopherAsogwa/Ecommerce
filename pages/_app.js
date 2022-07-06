import Script from 'next/script';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'next-themes';

import { Layout } from '../components';
import '../styles/globals.css'
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <ThemeProvider attribute="class">
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
        <Script src="https://kit.fontawesome.com/9fbaed25b9.js" crossorigin="anonymous" />
      </ThemeProvider>
    </StateContext>
  )
}

export default MyApp
