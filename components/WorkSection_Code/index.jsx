import WorkItem from '../ContentCard'
import styles from '@/styles/Home.module.css'
import code_projects from './projects'

export default function WorkSection_Code() {
    return (
        <>
            <div className={styles.gridflex}>
                {code_projects.map(project => (
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