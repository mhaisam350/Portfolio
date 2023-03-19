import { useEffect, useRef } from 'react';

import Head from 'next/head';

import styles from '@/styles/Contact.module.scss';

import useEventListener from '@/hooks/useEventListener';

import Canvas from '@/components/Canvas';
import Cursor from '@/components/Cursor';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';
import { faGit, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {

    const contact = useRef();

    const icon = useRef();

    useEventListener(contact);

    // useEffect(() => {

    //     document.addEventListener('click', (e) => {

    //         console.log(e);

    //     });

    // });

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

                    <section className={'flex' + " " + styles['contact-icons']}>

                        {/* <div className={styles['contact-line']}></div> */}

                        <div>

                            <FontAwesomeIcon ref={icon} className={styles['contact-icon']} icon={faEnvelope} />

                            <FontAwesomeIcon className={styles['contact-icon']} icon={faGithub} />

                            <FontAwesomeIcon className={styles['contact-icon']} icon={faLinkedin} />

                        </div>

                        {/* <div className={styles['contact-line']}></div> */}

                    </section>

                </div>

            </section>

        </>

    )

}