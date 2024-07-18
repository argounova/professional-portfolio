import Link from "next/link";
import { ProjectTilesStyles } from "./style"
import { ImageList, ImageListItem } from "@mui/material"


export default function ProjectTiles(projectList) {
  let projects = projectList.projectList
  return (
    <ProjectTilesStyles>
      <ImageList
      sx={{ width: 1600, height: 600 }}
      cols={3}
      rowHeight={400}
      >
      {projects.map((project) => (
        <Link key={project.id} href={`/${project.page}/${project.id}`}>
          <ImageListItem>
            <img
              srcSet={`${project.img}?fit=crop&auto=format&dpr=2 2x`}
              src={`${project.img}?fit=crop&auto=format`}
              alt={project.title}
              loading="lazy"
            />
          </ImageListItem>
        </Link>
      ))}
      </ImageList>
    </ProjectTilesStyles>
  )
}