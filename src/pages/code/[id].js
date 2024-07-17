import Head from 'next/head'
import Background_Work from '../../../components/Background_Work'
import NavigationPrimary from '../../../components/NavigationPrimary'
import CodeProjects from '../../../components/CodeProjects'
import { getAllProjectIds, getProjectData } from '../../../lib/projects'


export default function Code_Project({ projectData }) {
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
      <h1>{projectData.title}</h1>
      <h1>{projectData.id}</h1>
      <h1>{projectData.subtitle}</h1>
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllProjectIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const projectData = getProjectData(params.id)
  return {
    props: {
      projectData
    }
  }
}