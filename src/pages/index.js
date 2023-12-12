import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import '@fontsource/prosto-one'
import ContactDialog from '../../components/ContactDialog'
import WorkSection from '../../components/WorkSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Craig Putzstuck | Developer Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/portfolio-icon.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <h1>CRAIG PUTZSTUCK</h1>
          <p>front end design & full stack development</p>
          <ContactDialog />
        </div>
        <WorkSection />
      </main>
    </>
  )
}
