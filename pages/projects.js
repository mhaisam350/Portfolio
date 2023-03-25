import { useRef } from 'react';

import Head from 'next/head';

import styles from '@/styles/Projects.module.scss';

import Navigation from '@/components/Navigation';
import ProjectDisplay from '@/components/ProjectDisplay';

import Canvas from '@/components/Canvas';
import Cursor from '@/components/Cursor';

import useMouseEventListener from '@/hooks/useMouseEventListener';
import useMobileNavTransition from '@/hooks/useMobileNavTransition';
import useScrollDisabler from '@/hooks/useScrollDisabler';

import data from '@/data/projects.json';

export default function Projects() {

    const projectsSection = useRef();

    useMouseEventListener(projectsSection);
    useMobileNavTransition(projectsSection);
    // useScrollDisabler(container);

    const { projects } = data;

    return (

        <>
        
            <Head>
                <title>Haisam | Projects</title>
                <meta name="description" content="Front End React Developer" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Navigation />

            <Canvas />

            <Cursor />

            <section ref={projectsSection} className={'flex' + " " + styles['projects']}>

                <div>

                    <h2 className={'section-heading'}>Projects</h2>

                    <div className={'grid' + " " + styles['projects-grid']}>

                        {

                            projects.map((project, index) => (

                                <ProjectDisplay key={index} project={project} />

                            ))

                        }

                    </div>

                </div>

            </section>

        </>

    )

}