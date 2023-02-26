import Head from 'next/head';

import { useThemeContext } from '../contexts/ThemeContext';

import ThemeSwitch from '@/components/ThemeSwitch';

import styles from '@/styles/Home.module.scss';

import SkillTab from '@/components/SkillTab';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';
import { faGit, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Home() {

  const { theme } = useThemeContext();

  const themeClass = theme === 'dark' ? styles['theme-dark'] : styles['theme-light'];

  return (

    <div className={themeClass + " " + 'relative'}>

      <div className={styles.container}>

        <Head>
          <title>Haisam | Front End Developer</title>
          <meta name="description" content="Front End React Developer" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <header className={'flex' + " " + styles['header']}>

          <div className={'flex' + " " + styles['header-flex-container']}>

            <h1 className={styles['header-heading']}>
              Hello! <br /> I'm <span className={styles['accent-text']}>Haisam</span>.
            </h1>
            
            <div className={'flex' + " " + styles['subheading-container']}>

              <div className={styles['header-divider']}></div>

              <h2 className={styles['header-subheading']}>Front End <br /> ReactJS <br /> Developer </h2>

            </div>

          </div>

          <button className={styles['button']}>About me</button>

        </header>

        <section className={styles['about']}>

          {/* <div> */}

            <h2 className={styles['section-heading']}>About Me</h2>

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

                  <SkillTab text={'Typescript'} />

                </ul>

                <ul className={'flex' + " " + styles['skills-list']}>
                
                  <SkillTab text={'ReactJS'} />

                  <SkillTab text={'NextJS'} />

                  <SkillTab text={'NodeJS'} />

                  <SkillTab text={'Git'} />

                </ul>

              </section>

            </div>
          
          {/* </div> */}

        </section>

        <section className={styles['featured-projects']}>

          <h2 className={'center' + " " + styles['section-heading']}>Featured Projects</h2>

        </section>

        <section className={'flex' + " " + styles['contact']}>

          <h2 className={styles['section-heading']}>Contact</h2>

          <p className={styles['contact-paragraph']}>Whether you have a question, feedback, or want to work together, I'd love to hear from you! </p>

          <section className={'flex' + " " + styles['contact-icons']}>

            <div className={styles['contact-line']}></div>

            <div>

              <FontAwesomeIcon className={styles['contact-icon']} icon={faEnvelope} />

              <FontAwesomeIcon className={styles['contact-icon']} icon={faGithub} />

              <FontAwesomeIcon className={styles['contact-icon']} icon={faLinkedin} />

            </div>

            <div className={styles['contact-line']}></div>

          </section>

        </section>

      </div>

      <footer className={styles.footer + " " + 'flex'}>
                            
        <FontAwesomeIcon className={styles['footer-icon']} icon={faGithub} />

        <FontAwesomeIcon className={styles['footer-icon']} icon={faLinkedin} />

        <div className={styles['footer-line']}></div>

      </footer>

    </div>

  )

}
