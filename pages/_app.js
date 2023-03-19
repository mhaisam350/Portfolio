import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false

import '@/styles/globals.scss';

export default function App({ Component, pageProps }) {

  return (

    <Component {...pageProps} />

  )

}
