import { Grid } from '@material-ui/core'
import React from 'react'
import ProjectsData from './ProjectsData'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const projects = ProjectsData.projects;
  return (
    <div>
      <Grid container>
        {
          projects.map(project => (
            <Grid item key={project.id} xs={12} md={6} lg={4}>
              <div style={{marginTop:"7rem",marginBottom:"5rem",display:"flex",justifyContent:"center"}}>
                <ProjectCard project={project}/>
              </div>
            </Grid>
          ))
        }
      </Grid>
    </div>
  )
}

export default Projects