import Head from 'next/head';

import '@/styles/globals.scss';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import { NavContextProvider } from '@/contexts/NavContext';
import { HoverContextProvider } from '@/contexts/HoverContext';

export default function App({ Component, pageProps }) {

  return (

    <>
    
      <Head>
        
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

      </Head>


      <NavContextProvider>

        <HoverContextProvider>

          <Component {...pageProps} />

        </HoverContextProvider>

      </NavContextProvider>
      
    </>

  )

}
