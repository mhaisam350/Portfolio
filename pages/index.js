import Head from 'next/head';

import { useThemeContext } from '../contexts/ThemeContext';

import ThemeSwitch from '@/components/ThemeSwitch';

import styles from '@/styles/Home.module.scss';

export default function Home() {

  const { theme } = useThemeContext();

  return (

    <div className={styles[`theme-${theme}`]}>

      <div className={styles.container}>

        <Head>
          <title>Haisam | Front End Developer</title>
          <meta name="description" content="Front End React Developer" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <header className={styles['header']}>

          <div>

            <h1 className={styles['header-heading']}>
              Hello, <br /> I'm <span className={styles['accent-text']}>Haisam</span>.
            </h1>

            <button className={styles['accent-background']}>About me</button>
            
          </div>

          <div className={styles['header-divider']}></div>

          <h2 className={styles['header-subheading']}>Front End <br /> ReactJS <br /> Developer </h2>

        </header>

        <section className={styles.about}>

          

        </section>

      </div>

    </div>

  )

}
