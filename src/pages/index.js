import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import '@fontsource-variable/montserrat'
import ContactDialog from '../../components/ContactDialog'
import WorkSection from '../../components/WorkSection'
import LandingCategories from '../../components/LandingCategories'

export default function Home() {
  return (
    <>
      <Head>
        <title>Craig Putzstuck | Portfolio</title>
        <meta name="description" content="craig putzstuck 2024 professional portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/portfolio-icon.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.radial_gradient}></div>
        <div className={styles.landingPage__heading}>
          <h1>CRAIG PUTZSTUCK</h1>
          <h1 style={{ color: 'var(--neon_green)' }}>|</h1>
          <h1 style={{ color: 'var(--blue1)' }}>PORTFOLIO</h1>
          <ContactDialog />
        </div>
        {/* <WorkSection /> */}
        <LandingCategories />
        <div className={styles.landingPage__footer}></div>
        <div className={styles.landingPage__footer_borderTop}></div>
      </main>
    </>
  )
}
