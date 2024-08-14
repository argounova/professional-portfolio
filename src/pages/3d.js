import Head from 'next/head'
import Background_Work from '../../components/Background_Work'
import SimpleNavigation from '../../components/SimpleNavigation'
import ProjectTiles from '../../components/ProjectTiles'
import { threeDPageTitle, threeDPageProjects } from '../../constants/pageProjects'

export default function ThreeD_Home() {
  return (
    <>
      <Head>
        <title>Craig Putzstuck | 3D Projects</title>
        <meta name="description" content="craig putzstuck 2024 professional portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/portfolio-icon.png" />
      </Head>
      <Background_Work />
      <SimpleNavigation />
      <ProjectTiles 
        projectList={threeDPageProjects} 
        titles={threeDPageTitle}
      />
    </>
  )
}