import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSquareXmark } from '@fortawesome/free-solid-svg-icons';

import styles from '@/styles/Navigation.module.scss';

import { useNavContext } from '@/contexts/NavContext';

export default function Navigation() {

    const { navToggle, setNavToggle } = useNavContext();

    const navToggleClass = navToggle ? styles['nav-show'] : styles['nav-hide'];

    return (

        <nav className={styles['nav']}>

            <div className={'flex' + " " + styles['nav-subcontainer']}>

                <span >
                    <Link onClick={() => setNavToggle(false)} href='/'><img className={styles.logo} src={'/static/images/EMotors.png'} alt='Logo' /> </Link>
                </span>

                <menu className={'flex' + " " + styles['nav-menu'] + " " + navToggleClass}>

                    <li onClick={() => setNavToggle(false)} className={styles['menu-item']}>
                        <Link href='/about' className={styles['menu-link']}>About</Link>
                    </li>

                    <li onClick={() => setNavToggle(false)} className={styles['menu-item']}>
                        <Link href='/projects' className={styles['menu-link']}>Projects</Link>
                    </li>

                    <li onClick={() => setNavToggle(false)} className={styles['menu-item']}>
                        <Link href='/contact' className={styles['menu-link']}>Contact</Link>
                    </li>

                </menu>
                    
                <button onClick={() => setNavToggle(!navToggle)} className={styles['mobile-toggle']}>III</button>

            </div>

        </nav>

    )
  
}
