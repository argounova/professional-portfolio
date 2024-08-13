import Head from 'next/head'
import Background_Work from '../../components/Background_Work'
import SimpleNavigation from '../../components/SimpleNavigation'
import ProjectTiles from '../../components/ProjectTiles'
import { designPageTitle, designPageProjects } from '../../constants/pageProjects'

export default function Design_Home() {
  return (
    <>
      <Head>
        <title>Craig Putzstuck | Design Projects</title>
        <meta name="description" content="craig putzstuck 2024 professional portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/portfolio-icon.png" />
      </Head>
      <Background_Work />
      <SimpleNavigation />
      <ProjectTiles 
        projectList={designPageProjects} 
        titles={designPageTitle}
      />
    </>
  )
}