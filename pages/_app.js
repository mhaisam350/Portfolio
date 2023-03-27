import '@/styles/globals.scss';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import { NavContextProvider } from '@/contexts/NavContext';
import { HoverContextProvider } from '@/contexts/HoverContext';

export default function App({ Component, pageProps }) {

  return (

    <NavContextProvider>

      <HoverContextProvider>

        <Component {...pageProps} />

      </HoverContextProvider>

    </NavContextProvider>

  )

}
