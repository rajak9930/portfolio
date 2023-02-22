import React from 'react';
import { useParams } from 'react-router';
import { Db } from '../DataBase/Db';
import { FaLink } from "react-icons/fa";
import '../Style/ProjectDisplay.css'
const ProjectDisplay = () => {
const {id} =useParams();
const project=Db[id];
const link=project.url

  return (
    <>
      <div className="project">
        <h1>{project.name}</h1>
        <img src={project.image} alt="" />
        <FaLink className='linkIcon'onClick={()=>window.open(link)}/>
         <p><b>Skills:-</b>  {project.skills}</p>
         <h3>{project.title}</h3>

      </div>
    </>
  )
}

export default ProjectDisplay
