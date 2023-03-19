import { useRef } from 'react';

import Head from 'next/head';
import Link from 'next/link';

import styles from '@/styles/Contact.module.scss';

import useEventListener from '@/hooks/useEventListener';

import Canvas from '@/components/Canvas';
import Cursor from '@/components/Cursor';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {

    const contact = useRef();

    useEventListener(contact);

    return (

        <>
        
            <Head>
                <title>Haisam | Contact</title>
                <meta name="description" content="Front End React Developer" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Canvas />

            <Cursor />

            <section ref={contact} className={'flex' + " " + styles['contact']}>

                <div>

                    <h2 className={'section-heading'}>Contact</h2>

                    <p className={styles['contact-paragraph']}>Whether you have a question, feedback, or want to work together, I'd love to hear from you! </p>

                    <section className={styles['contact-icons']}>

                            <Link href='/' className={styles['contact-link']}>

                                <FontAwesomeIcon className={styles['contact-icon']} icon={faEnvelope} />
                                
                            </Link>

                            <Link href='/' className={styles['contact-link']}>
                                
                                <FontAwesomeIcon className={styles['contact-icon']} icon={faGithub} />

                            </Link>

                            <Link href='/' className={styles['contact-link']}>

                                <FontAwesomeIcon className={styles['contact-icon']} icon={faLinkedin} />

                            </Link>

                    </section>

                </div>

            </section>

        </>

    )

}