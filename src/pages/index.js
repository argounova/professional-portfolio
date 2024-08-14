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
        <title>Craig Putzstuck | Portfolio</title>
        <meta name="description" content="craig k&ouml;nigwinter 2024 professional portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/portfolio-icon.png" />
      </Head>
        {/* <button 
          onClick={() => setWorkPlay(!workPlay)} 
          style={{ background: 'transparent', border: 'none', position: 'absolute', top: '5%', right: '5%' }}
        >
          <WorkPlayToggle />
        </button>
        {workPlay? 
          (
            <LandingCategories />
          ) : (
            <LandingCategoriesPlay />
          )}
        {workPlay? 
          (
            <div className={styles.radial_gradient_work}></div>
          ) : (
            <div className={styles.radial_gradient_play}></div>
          )} */}
        <LandingCategories />
    </>
  )
}
