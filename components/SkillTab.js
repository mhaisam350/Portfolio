import styles from '@/styles/SkillTab.module.scss';

export default function SkillTab( { text } ) {

    return (

        <li className={styles.tab}>

            <p className={styles.text}>{text}</p>

        </li>

    )

}