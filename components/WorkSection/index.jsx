import WorkItem from '../ContentCard'
import styles from '@/styles/Home.module.css'
import projects from './projects'

export default function WorkSection() {
    return (
        <>
            <div style={{
                width: '100vw',
                height: '100vh',
                maxHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {projects.map(project => (
                    <WorkItem
                        key={ project.id }
                        title={ project.title }
                        subheader={ project.subheader }
                        image={ project.image }
                        description={ project.description }
                        subDescription={ project.subDescription }
                        tech1={ project.tech1 }
                        tech2={ project.tech2 }
                        tech3={ project.tech3 }
                        siteLink={ project.siteLink }
                        codeLink={ project.codeLink }
                    />
                ))}
            </div>
        </>
    )
}