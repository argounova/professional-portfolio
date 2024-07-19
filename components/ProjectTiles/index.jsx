import { ProjectTilesStyles } from "./style"
import { 
  Card, 
  ImageList, 
  ImageListItem, 
  ImageListItemBar } from "@mui/material"
  import Link from "next/link"


export default function ProjectTiles(projectList) {
  let projects = projectList.projectList
  return (
    <ProjectTilesStyles>
      <ImageList
        gap={50}
        sx={{
          gridTemplateColumns: {
            xs: 'repeat(auto-fill, minmax(300px, 1fr)) !important',
            md: 'repeat(auto-fill, minmax(350px, 1fr)) !important',
          },
          padding: '10px',
          width: {
            xs: '100vw',
            md: '70vw',
          },
          mt: {
            xs: '10vh',
            md: '8vh',
            lg: '5vh',
          }
        }}
      >
      {projects.map((project) => (
        <Link key={project.id} href={`/${project.page}/${project.id}`}>
          <Card className='hover-outline'>
            <ImageListItem sx={{ height: '100% !important' }} >
              <ImageListItemBar
                sx={{
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%), rgba(0,0,0,0.3) 100%',
                }}
                title={project.title}
              />
              <img
                src={project.img}
                alt={project.title}
                loading="lazy"
              />
            </ImageListItem>
          </Card>
        </Link>
      ))}
      </ImageList>
    </ProjectTilesStyles>
  )
}