import Head from 'next/head'
import Background_Work from '../../components/Background_Work'
import SimpleNavigation from '../../components/SimpleNavigation'
import ProjectTiles from '../../components/ProjectTiles'
import { codePageTitle, codePageProjects } from '../../constants/pageProjects'

export default function Code_Home() {
  return (
    <>
      <Head>
        <title>Craig Putzstuck | Code Projects</title>
        <meta name="description" content="craig putzstuck 2024 professional portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/portfolio-icon.png" />
      </Head>
      <Background_Work />
      <SimpleNavigation />
      <ProjectTiles 
        projectList={codePageProjects} 
        titles={codePageTitle}  
      />
    </>
  )
}