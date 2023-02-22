import React from 'react'
import ProjectItem from '../Components/ProjectItem';
import '../Style/Project.css';
import { Db } from '../DataBase/Db';
import {UrlTitle} from '../Service/UrlTitle'
const Project = () => {
  UrlTitle(`Project | portfolio`)
  return (
    <>
      <div className="projects">
        <h1>My Personal Project</h1>
        <div className="projectList">
        {Db.map((item,id)=>{
            return(
                <ProjectItem name={item.name} image={item.image} id={id}/>
            )
        })}
          
        </div>
      </div>
    </>
  )
}

export default Project;
