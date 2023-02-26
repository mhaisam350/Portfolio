import Link from 'next/link';

import styles from '@/styles/ProjectDisplay.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function ProjectDisplay( { index, project } ) {

    console.log(project);

    return (

        index % 2 === 0 ? 

            <article className={'flex' + " " + styles['container']}>
            
                <div className={styles['project-text']}>

                    <h3 className={styles['project-heading']}>{project.title}</h3>

                    <p className={styles['project-paragraph']}>{project.description}</p>

                    <div className={styles['project-links']}>

                        <Link className={styles.link} href={project.live} target='_blank'><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Link>
                        
                        <Link className={styles.link} href={project.github} target='_blank'><FontAwesomeIcon icon={faGithub} /></Link>

                    </div>

                </div>

                <img src={project.image} className={styles['project-image']} alt='Project screenshots' />

            </article>

        : 

            <article className={'flex' + " " + styles['container']}>

                <img src={project.image} className={styles['project-image']} alt='Project screenshots' />
            
                <div className={styles['project-text']}>

                    <h3 className={styles['project-heading']}>{project.title}</h3>

                    <p className={styles['project-paragraph']}>{project.description}</p>

                    <div className={styles['project-links']}>

                        <Link className={styles.link} href={project.live} target='_blank'><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Link>
                        
                        <Link className={styles.link} href={project.github} target='_blank'><FontAwesomeIcon icon={faGithub} /></Link>

                    </div>

                </div>


            </article>

    );

}