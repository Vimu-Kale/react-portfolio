import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@material-ui/core';



function ProjectCard({ project }) {
  return (
    <div>
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    src={require(`${project.img}`)}
                    alt="Project Image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {project.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small"><a href={project.code} target="_blank" rel="noreferrer">Source Code</a></Button>
                <Button size="small"><a href={project.live} target="_blank" rel="noreferrer">Live</a></Button>
            </CardActions>

        </Card>
    </div>
  )
}

export default ProjectCard