import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const projectsDirectory = path.join(process.cwd(), 'projects')

export function getProjectsData() {
  const fileNames = fs.readdirSync(projectsDirectory)
  const allProjectsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')

    const fullPath = path.join(projectsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data
    }
  })

  return allProjectsData
}

export function getAllProjectIds() {
  const fileNames = fs.readdirSync(projectsDirectory)

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export function getProjectData(id) {
  const fullPath = path.join(projectsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  return {
    id,
    ...matterResult.data
  }
}