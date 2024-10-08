import Head from 'next/head'
import { getAllProjectIds, getProjectData } from '../../../lib/projects'
import Background_Work from '../../../components/Background_Work'
import SimpleNavigation from '../../../components/SimpleNavigation'
import ContentCardComponent from '../../../components/ContentCard'


export default function Design_Project({ projectData }) {
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
      <ContentCardComponent
        title={projectData.title}
        subtitle={projectData.subtitle}
        tech1={projectData.tech1}
        tech2={projectData.tech2}
        tech3={projectData.tech3}
        image={projectData.image}
        description={projectData.description}
        siteLink={projectData.siteLink}
        codeLink={projectData.codeLink}
        buttonsRender={false}
      />
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