import Head from 'next/head'
import Background_Work from '../../../components/Background_Work'
import NavigationPrimary from '../../../components/NavigationPrimary'
import CodeProjects from '../../../components/CodeProjects'


export default function Code_Home() {


  return (
    <>
      <Head>
        <title>Craig Putzstuck | Code Projects</title>
        <meta name="description" content="craig k&ouml;nigwinter 2024 professional portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/portfolio-icon.png" />
      </Head>
      <Background_Work />
      <NavigationPrimary linkTo="/design"/>
      <h1>Code Projects</h1>
    </>
  )
}