import Head from 'next/head';

import '@/styles/globals.scss';

import Cursor from '@/components/Cursor';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import { NavContextProvider } from '@/contexts/NavContext';
import { HoverContextProvider } from '@/contexts/HoverContext';
import { MouseLeaveContextProvider } from '@/contexts/MouseLeaveContext';

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

        <meta name="theme-color" content="#111" ></meta>

        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

      </Head>


      <NavContextProvider>

        <HoverContextProvider>

          <MouseLeaveContextProvider>

            <Cursor></Cursor> 
            
            <Component {...pageProps} />

          </MouseLeaveContextProvider>

        </HoverContextProvider>

      </NavContextProvider>

    </>

  )

}
