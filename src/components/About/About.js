import React from 'react'
import { Avatar, Typography } from '@material-ui/core';
import av from './av.jpg';
import "./About.css";

function About() {
  return (
    <div style={{marginTop:"9rem",display:"flex",flexDirection:"column",alignItems:"center"}}>
       <div>
       <Avatar
            alt="Remy Sharp"
            src={av}
            style={{height:"10rem",width:"10rem"}}
        />
        </div> 
        <div>
            <Typography variant='h3' style={{marginTop:"4rem",marginLeft:"auto",marginRight:"auto",marginBottom:"2rem",paddingLeft:"5rem",paddingRight:"5rem",color:"white",textAlign:"center"}} className="desc" >
            Hi, I'm Vimu Kale I'm a Full Stack Web Developer. Creating Beautiful things with quality and elegance. I give life to designs and build cool websites. My favourite technology is ReactJS.
Do check out my recent works below on Project Section.
            </Typography>
        </div>
        
    </div>
  )
}

export default About