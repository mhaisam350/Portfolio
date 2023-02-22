import Head from 'next/head'
import styles from '@/styles/Home.module.scss'

export default function Home() {

  return (

    <div className={styles['theme-dark']}>

      <Head>
        <title>Haisam | Front End Developer</title>
        <meta name="description" content="Front End React Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header>
        
        {/* <div className={styles['test']}>

          sada

        </div> */}

      </header>

    </div>

  )

}
