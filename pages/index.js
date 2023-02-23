import Head from 'next/head';

import { useThemeContext } from '../contexts/ThemeContext';

import ThemeSwitch from '@/components/ThemeSwitch';

import styles from '@/styles/Home.module.scss';

export default function Home() {

  const { theme } = useThemeContext();

  const themeClass = theme === 'dark' ? styles['theme-dark'] : styles['theme-light'];

  return (

    <div className={themeClass}>

      <div className={styles.container}>

        <Head>
          <title>Haisam | Front End Developer</title>
          <meta name="description" content="Front End React Developer" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <header className={'flex' + " " + styles['header']}>

          <div>

            <h1 className={styles['header-heading']}>
              Hello, <br /> I'm <span className={styles['accent-text']}>Haisam</span>.
            </h1>

            <button className={styles['button']}>About me</button>
            
          </div>

          <div className={'flex' + " " + styles['subheading-container']}>

            <div className={styles['header-divider']}></div>

            <h2 className={styles['header-subheading']}>Front End <br /> ReactJS <br /> Developer </h2>

          </div>

        </header>

        <section className={styles.about}>

          

        </section>

      </div>

    </div>

  )

}
