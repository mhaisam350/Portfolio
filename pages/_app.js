import { ThemeContextProvider } from '../contexts/ThemeContext';

import '@/styles/globals.scss';

export default function App({ Component, pageProps }) {

  return (

   <ThemeContextProvider>

    <Component {...pageProps} />

   </ThemeContextProvider>

  )

}
