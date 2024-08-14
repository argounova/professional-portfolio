import { CodeProjectsStyles } from './style'
import { code_projects } from '../../constants/projects'
import { Card, Typography } from '@mui/material'
import Link from 'next/link';


export default function CodeProjects() {

  return (
    <CodeProjectsStyles>
      {code_projects.map((project) => (
        <Link
          key={project.id}
          href={`/code/${project.id}`} 
        >
          <Card sx={{ 
            width: '390px', 
            height: '390px', 
            backgroundColor: `${project.color}`, 
            borderRadius: '50px', 
          }}>
            <Typography
              sx={{
                fontSize: '3.5rem',
                fontFamily: 'Montserrat Variable',
                textTransform: 'uppercase'
              }}
              align='center'
            >
              {project.title}
            </Typography>        
          </Card>
        </Link>
      ))}
    </CodeProjectsStyles>
  )
}