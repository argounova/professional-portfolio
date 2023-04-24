import WorkItem from '../WorkItem'
import styles from '@/styles/Home.module.css'
import projects from './projects'

export default function WorkSection() {
    return (
        <>
            <div className={styles.grid}>
                {projects.map(project => (
                    <WorkItem
                        key={ project.id }
                        title={ project.title }
                        subheader={ project.subheader }
                        image={ project.image }
                        description={ project.description }
                        subDescription={ project.subDescription }
                        siteLink={ project.siteLink }
                        codeLink={ project.codeLink }
                    />
                ))}
            </div>
        </>
    )
}