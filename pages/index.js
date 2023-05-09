import { useRef, useMemo, useEffect, useState } from 'react';

import Head from 'next/head';
import Link from 'next/link';

import styles from '@/styles/Home.module.scss';

import Navigation from '@/components/Navigation';
import Canvas from '@/components/Canvas';
import TechCard from '@/components/techCard';
import ProjectDisplay from '@/components/ProjectDisplay';

import data from '@/data/projects.json';

// import useMouseEventListener from '@/hooks/useMouseEventListener';
import useMobileNavTransition from '@/hooks/useMobileNavTransition';

import { useMouseLeaveContext } from '@/contexts/MouseLeaveContext';
import { useHoverContext } from '@/contexts/HoverContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Home() {

  const { projects } = data;

  const canvas = useMemo( () => <Canvas />, []);
  
  const container = useRef();
  const header = useRef();
  const techHeading = useRef();
  
  // useMouseEventListener(header);
  useMobileNavTransition(container);

  const [zIndex, setZIndex] = useState(9);

  const { setHide } = useMouseLeaveContext();
  const { setHover } = useHoverContext();

  const spinnerTextArray = ['haisam', 'web developer', 'ui designer']

  useEffect(() => {

    const spinnerTextElements = document.querySelectorAll('.spinner-text');

    spinnerTextElements.forEach((element, i) => {

      element.addEventListener('animationiteration', ((e) => {

        e.target.innerText = spinnerTextArray[++i % spinnerTextArray.length];

      }))

    });

  }, [])

  useEffect(() => {

    const scrollListener = (e) => {

      header.current.setAttribute('style',
        `translate: -${scrollY * 0.6}px 0`
      );

      techHeading.current.setAttribute('style',
        `translate: 0 ${(scrollY) * 0.1}px;`
      );

    };

    document.addEventListener('scroll', scrollListener);

        return () => {

            document.removeEventListener('scroll', scrollListener);

        };

    });

  return (

    <div onMouseLeave={() => setHide(true)} onMouseEnter={() => setHide(false)}>

      {/* <div> */}

        <Head>
          <title>Haisam | Front End Developer</title>
          <meta name="description" content="Front End React Developer" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        {/* <Navigation /> */}

        <div ref={container} className={styles.container}>

          <header className={styles['header']} id={'header'}>

            <div ref={header} className={styles['header-ref']}>

              <div className={'flex' + " " + styles['spinner']}>

                <span className={'spinner-text' + " " + styles['spinner-text'] + " " + styles['top']}>haisam</span>
                <span className={'spinner-text' + " " + styles['spinner-text'] + " " + styles['bottom']}>web developer</span>

              </div>

              <div className={styles['header-links-container']}>
                
                <Link onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} href='https://github.com/mhaisam350' target='_blank' className={styles['header-link']}>
                                    
                  <p className={styles['header-link-text']}>Github</p>
        
                </Link>

                <span className={styles.divider}>|</span>
        
                <Link onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} href='https://www.linkedin.com/in/mohammad-haisam/' target='_blank' className={styles['header-link']}>
        
                  <p className={styles['header-link-text']} id={styles['orange-link']}>LinkedIn</p> 
        
                </Link>
                
              </div>

            </div>

          </header>

          <section className={'flex' + " " + styles['about']} id={'about'}>

            {/* <div className={styles.test}> */}

            <div className={styles['about-text']}>

              <h1 className={styles['about-heading']}>I'm Haisam</h1>

              <p className={styles['about-paragraph']}>I'm a front-end developer & UI designer based in Pakistan. My passion for software and the web has given me the opportunity to work with a wide range of companies and brands.</p>

            </div>

            <div className={styles['about-image']}></div>
            
            {/* </div> */}

          </section>

          <section className={styles['technologies']}>

            <h2 ref={techHeading} className={styles['section-heading']}>Technologies</h2>

            <TechCard zIndex={zIndex} setZIndex={setZIndex} tech={'html'} />
            <TechCard zIndex={zIndex} setZIndex={setZIndex} tech={'css'} />
            <TechCard zIndex={zIndex} setZIndex={setZIndex} tech={'javascript'} />
            <TechCard zIndex={zIndex} setZIndex={setZIndex} tech={'react'} />
            <TechCard zIndex={zIndex} setZIndex={setZIndex} tech={'next.js'} />
            <TechCard zIndex={zIndex} setZIndex={setZIndex} tech={'node.js'} />
            <TechCard zIndex={zIndex} setZIndex={setZIndex} tech={'git'} />
            <TechCard zIndex={zIndex} setZIndex={setZIndex} tech={'graphql'} />

          </section>

          <section className={'grid' + " " + styles['projects']} id={'projects'}>

            {/* <h2 className={styles['section-heading']} id={styles['projects-heading']}>Projects</h2> */}

            {

              projects.map((project, index) => (

                  <ProjectDisplay key={index} project={project} />

              ))

            }

          </section>

          <section className={'flex' + " " + styles['contact']} id={'contact'}>

              {canvas}

              <h2 className={styles['contact-title']}>Say hi</h2>
              
              <Link onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} href='mailto:mhaisam350@gmail.com' className={styles.mail}>mhaisam350@gmail.com</Link>

              <div className={styles['contact-links-container']}>

                <Link onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} href='https://github.com/mhaisam350' target='_blank' className={styles['header-link']}>
                                    
                  <p className={styles['header-link-text']}>Github</p>
                          
                </Link>

                <span className={styles.divider}>·</span>
                       
                <Link onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} href='https://www.linkedin.com/in/mohammad-haisam/' target='_blank' className={styles['header-link']}>
                          
                  <p className={styles['header-link-text']} id={styles['orange-link']}>LinkedIn</p> 
                          
                </Link>

              </div>

          </section>
          

        </div>

    </div>

  )

}
