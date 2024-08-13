import { ProjectTilesStyles } from "./style"
import { 
  Box,
  Card, 
  ImageList, 
  ImageListItem, 
  ImageListItemBar,
  Typography } from "@mui/material"
  import Link from "next/link"
  import '@fontsource-variable/montserrat'


export default function ProjectTiles(projectList) {
  let projects = projectList.projectList
  return (
    <ProjectTilesStyles>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
          gap: '20px',
        }}
      >
        <Typography
          sx={{ fontFamily: 'Montserrat Variable', fontSize: '3rem', letterSpacing: '10px', color: 'var(--white)' }}
          textAlign={'center'}
        >CODE</Typography>
        <Typography 
          sx={{ fontFamily: 'Montserrat Variable', fontSize: '3rem', letterSpacing: '10px', color: 'var(--neon_green)' }}
          textAlign={'center'}
        >|</Typography>
        <Typography
          sx={{ fontFamily: 'Montserrat Variable', fontSize: '3rem', letterSpacing: '10px', color: 'var(--dark_charcoal)' }}
          textAlign={'center'}
        >PROJECTS</Typography>
      </Box>
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
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%), rgba(0,0,0,0.3) 100%', textAlign: 'center'
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