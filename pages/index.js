import { useRef, useMemo } from 'react';

import Head from 'next/head';

import styles from '@/styles/Home.module.scss';

import Navigation from '@/components/Navigation';

import Canvas from '@/components/Canvas';
import Cursor from '@/components/Cursor';

import useMouseEventListener from '@/hooks/useMouseEventListener';
import useMobileNavTransition from '@/hooks/useMobileNavTransition';

export default function Home() {

  const canvas = useMemo( () => <Canvas />, []);

  const header = useRef();
  
  useMouseEventListener(header);

  useMobileNavTransition(header);

  // useEffect(() => {

  //   innerWidth >= 1024 ? container.current.style.overflow = 'hidden' : container.current.style.overflowY = 'auto';

  // });

  return (

    <>

        <Head>
          <title>Haisam | Front End Developer</title>
          <meta name="description" content="Front End React Developer" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <Navigation />

        {/* <Canvas /> */}

        {/* {canvas} */}

        <Cursor />

          <header ref={header} className={'flex' + " " + styles['header']}>

            <div className={'flex' + " " + styles['header-flex-container']}>

              <h1 className={styles['header-heading']}>
                Hello! <br /> I'm <span className={styles['accent-text']}>Haisam</span>.
              </h1>
              
              <div className={'flex' + " " + styles['subheading-container']}>

                <div className={styles['header-divider']}></div>

                <h2 className={styles['header-subheading']}>Front End <br /> ReactJS <br /> Developer </h2>

              </div>

            </div>

          </header>

        {/* Footer section */}
        {/* <footer className={styles.footer + " " + 'flex'}>
                              
          <FontAwesomeIcon className={styles['footer-icon']} icon={faGithub} />

          <FontAwesomeIcon className={styles['footer-icon']} icon={faLinkedin} />

          <div className={styles['footer-line']}></div>

        </footer> */}

    </>

  )

}
