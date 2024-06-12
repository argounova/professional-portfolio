import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import '@fontsource-variable/montserrat'
import LandingCategories from '../../components/LandingCategories'
import LandingCategoriesPlay from '../../components/LandingCategoriesPlay'
import WorkPlayToggle from '../../components/WorkPlayToggle'
import { useState } from 'react'

export default function Home() {
  const [workPlay, setWorkPlay] = useState(true)
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
        
        
          <button onClick={() => setWorkPlay(!workPlay)} style={{ background: 'transparent', border: 'none', position: 'absolute', top: '5%', right: '5%' }}>
          <WorkPlayToggle />
          </button>
        {workPlay? (<LandingCategories />) : (<LandingCategoriesPlay />)}
        <div className={styles.landingPage__footer}></div>
        <div className={styles.landingPage__footer_borderTop}></div>
      </main>
    </>
  )
}
