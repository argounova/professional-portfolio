import Link from "next/link"
import { ProjectTilesStyles } from "./style"
import { 
  Card, 
  ImageList, 
  ImageListItem, 
  ImageListItemBar } from "@mui/material"


export default function ProjectTiles(projectList) {
  let projects = projectList.projectList
  return (
    <ProjectTilesStyles>
      <ImageList
        gap={12}
        sx={{
          gridTemplateColumns: {
            xs: 'repeat(auto-fill, minmax(300px, 1fr)) !important',
            md: 'repeat(auto-fill, minmax(400px, 1fr)) !important',
            lg: 'repeat(auto-fill, minmax(500px, 1fr)) !important',
            xl: 'repeat(auto-fill, minmax(600px, 1fr)) !important',
          },
          padding: '10px'
        }}
      >
      {projects.map((project) => (
        <Link key={project.id} href={`/${project.page}/${project.id}`}>
          <Card className='hover-shadow'>
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