import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import '@fontsource-variable/montserrat'
import LandingCategoriesAnim from '../../components/LandingCategoriesAnim'

export default function Home() {
  return (
    <>
      <Head>
        <title>Craig K&ouml;nigwinter | Portfolio</title>
        <meta name="description" content="craig k&ouml;nigwinter 2024 professional portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/portfolio-icon.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.radial_gradient}></div>
        <LandingCategoriesAnim />
        <div className={styles.landingPage__footer}></div>
        <div className={styles.landingPage__footer_borderTop}></div>
      </main>
    </>
  )
}
