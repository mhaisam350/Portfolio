import { useRef, useMemo } from 'react';

import Head from 'next/head';

import styles from '@/styles/About.module.scss';

import Navigation from '@/components/Navigation';
import SkillTab from '@/components/SkillTab';

import Canvas from '@/components/Canvas';
import Cursor from '@/components/Cursor';

import useMouseEventListener from '@/hooks/useMouseEventListener';
import useMobileNavTransition from '@/hooks/useMobileNavTransition';
import useScrollDisabler from '@/hooks/useScrollDisabler';

export default function About() {

    const canvas = useMemo( () => <Canvas />, []);

    const about = useRef();

    useMouseEventListener(about);
    useMobileNavTransition(about);
    // useScrollDisabler(about);

    return (

        <>

            <Head>
                <title>About | Haisam</title>
                <meta name="description" content="Front End React Developer" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Navigation />
        
            {/* <Canvas /> */}

            {/* {canvas} */}
                
            {/* <Cursor /> */}

            <section ref={about} className={'flex' + " " + styles['about']}>

                  <div>

                    <h2 className='section-heading'>About Me</h2>

                    <div className={'flex' + " " + styles['about-flex-container']}>

                        <section className={styles['about-text']}>

                            <p className={styles['about-paragraph']}>
                                I'm a front-end web developer based in Pakistan with one year of freelance experience building web pages and applications.
                            </p>

                            <p className={styles['about-paragraph']}>
                                While my primary strength and focus is web development, my programming journey began as a self-learner dabbling in C# while working 
                                on a prototype for a video game on Unity Engine. This eventually led me to pick up Javascript and Python, 
                                and shifted my attention to web development. 
                                The never-ending excitement of continually improving and expanding my skill 
                                set is what has driven my passion for software development.
                            </p>

                            <p className={styles['about-paragraph']}>
                                These days I primarily work with React, and I'm always looking for oppurtunities to further develop my career.
                            </p>

                        </section>

                        <section className={styles['about-skills']}>

                            <h3 className={styles['skills-heading']}>My Skills:</h3>

                            <ul className={'flex' + " " + styles['skills-list']}>
                                
                            <SkillTab text={'HTML'} />

                                <SkillTab text={'CSS/SCSS'} />

                                <SkillTab text={'Javascript'} />

                                <SkillTab text={'GraphQL'} />

                            </ul>

                            <ul className={'flex' + " " + styles['skills-list']}>
                                
                                <SkillTab text={'ReactJS'} />

                                <SkillTab text={'NextJS'} />

                                <SkillTab text={'NodeJS'} />

                                <SkillTab text={'Git'} />

                            </ul>

                        </section>

                    </div>

                </div>

            </section>

        </>

    )

}