import React from 'react';
import { useParams } from 'react-router';
import { Db } from '../DataBase/Db';
import { FaGithub } from "react-icons/fa";
import '../Style/ProjectDisplay.css'
const ProjectDisplay = () => {
const {id} =useParams();
const project=Db[id];
  return (
    <>
      <div className="project">
        <h1>{project.name}</h1>
        <img src={project.image} alt="" />
<FaGithub/>
      </div>
    </>
  )
}

export default ProjectDisplay
