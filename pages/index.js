import Head from 'next/head';

import { useThemeContext } from './contexts/ThemeContext';

import styles from '@/styles/Home.module.scss';

export default function Home() {

  const { theme } = useThemeContext();

  return (

    <div className={styles[`theme-${theme}`]}>

      <Head>
        <title>Haisam | Front End Developer</title>
        <meta name="description" content="Front End React Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className={styles['header']}>
        
    

      </header>

    </div>

  )

}
