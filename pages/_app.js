import '@/styles/globals.scss';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import { NavContextProvider } from '@/contexts/NavContext';

export default function App({ Component, pageProps }) {

  return (

    <NavContextProvider>

      <Component {...pageProps} />

    </NavContextProvider>

  )

}
