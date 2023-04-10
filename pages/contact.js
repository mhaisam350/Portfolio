import { useRef, useMemo } from 'react';

import Head from 'next/head';
import Link from 'next/link';

import styles from '@/styles/Contact.module.scss';

import useMouseEventListener from '@/hooks/useMouseEventListener';
import useMobileNavTransition from '@/hooks/useMobileNavTransition';
import useScrollDisabler from '@/hooks/useScrollDisabler';

import { useHoverContext } from '@/contexts/HoverContext';

import Navigation from '@/components/Navigation';
import Canvas from '@/components/Canvas';
import Cursor from '@/components/Cursor';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {

    const { setHover } = useHoverContext();

    const canvas = useMemo( () => <Canvas />, []);

    const contact = useRef();

    useMouseEventListener(contact);
    useMobileNavTransition(contact);
    // useScrollDisabler(container);

    return (

        <>
        
            <Head>
                <title>Contact | Haisam</title>
                <meta name="description" content="Front End React Developer" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Navigation />

            {/* <Canvas /> */}

            {/* <Cursor /> */}

            {/* {canvas} */}

            <section ref={contact} className={'flex' + " " + styles['contact']}>

                <div>

                    <h2 className={'section-heading'}>Contact</h2>

                    <p className={styles['contact-paragraph']}>Whether you have a question, feedback, or want to work together, I'd love to hear from you! </p>

                    <section className={styles['contact-icons']}>

                        <Link onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} href='mailto:mhaisam350@gmail.com' className={styles['contact-link']}>

                            <FontAwesomeIcon className={styles['contact-icon']} icon={faEnvelope} />
                                    
                        </Link>

                         <Link onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} href='https://github.com/mhaisam350' target='_blank' className={styles['contact-link']}>
                                    
                            <FontAwesomeIcon className={styles['contact-icon']} icon={faGithub} />

                        </Link>

                        <Link onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} href='https://www.linkedin.com/in/mohammad-haisam/' target='_blank' className={styles['contact-link']}>

                            <FontAwesomeIcon className={styles['contact-icon']} icon={faLinkedin} />

                        </Link>

                    </section>

                </div>

            </section>

        </>

    )

}