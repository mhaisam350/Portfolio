import { useRef, useMemo, useEffect, useState } from 'react';

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

  const [bool, setBool] = useState(false);

  const spinnerSide1 = bool ? styles['spinner-up'] : styles['spinner-neutral'];
  const spinnerSide2 = !bool ? styles['spinner-down'] : styles['spinner-neutral'];

  useEffect(() => {

      const interval1 = setInterval(() => {

        setBool(!bool);

      }, 2500);
  
      return () => {

        clearInterval(interval1);

      };

  });

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

              <h2 className={styles['header-subheading']}>

                <span className={styles['spinner'] + " " + spinnerSide1}>Front-end Developer</span>
                <span className={styles['spinner'] + " " + spinnerSide2}>UI Designer</span>

              </h2>
              
              {/* <div className={'flex' + " " + styles['subheading-container']}>

                <div className={styles['header-divider']}></div>

                <h2 className={styles['header-subheading']}>Front End <br /> ReactJS <br /> Developer </h2>

              </div> */}

            </div>

          </header>

    </>

  )

}
