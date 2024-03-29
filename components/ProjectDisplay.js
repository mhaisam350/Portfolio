import Link from 'next/link';

import styles from '@/styles/ProjectDisplay.module.scss';

import { useHoverContext } from '@/contexts/HoverContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function ProjectDisplay( { project } ) {

    const { setHover } = useHoverContext();

    return (

        <article className={styles['container']} style={{backgroundImage: `url(${project.image})`}}>
        {/* <article className={styles['container']}> */}
                
            {/* <img src={project.image} className={styles['project-image']} alt='Project screenshot' /> */}
            
            <div className={styles['project-text']}>

                {/* <div className={'flex' + " " + styles['project-flex']}> */}

                    <h3 className={styles['project-heading']}>{project.title}</h3>

                    <p className={styles['project-tech']}><span className={styles.tools}>Tools: </span>{project.tech}</p>

                    <div className={styles['project-links']}>

                        <Link onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} className={styles.link} href={project.live} target='_blank'><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Link>
                            
                        <Link onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} className={styles.link} href={project.github} target='_blank'><FontAwesomeIcon icon={faGithub} /></Link>

                    {/* </div> */}
                
                </div>

                {/* <p className={styles['project-paragraph']}>{project.description}</p> */}

            </div>

        </article>

    )

}