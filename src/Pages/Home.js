import React from 'react'
import { FaGithub,FaLinkedin, } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import '../Style/Home.css';
//import profile from '../assets/profile_pic.jpeg'
const Home = () => {
  return (
    <>
     <div className="home">
    
        <div className="about">
        <div className='pic'>
        
     </div>
        <h2 className='animate-charcter'>Hi, My Name is Raja Kumar</h2>
        <div className="prompt">
            <p>A software  developer  with  a passion  for learning and creating</p>
<FaLinkedin/>
<MdEmail/>
<FaGithub/>
        </div>
        </div>
        <div className="skills">
            <h1>Skills</h1>
            <ol>
                <li className='item'>
                    <h2>Front-End</h2>
                    <span>ReactJS, Redux, HTML, CSS, BootStrap</span>
                </li>

                <li className='item'>
                    <h2>Languages</h2>
                    <span>JavaScript</span>
                </li>
            </ol>
        </div>
     </div>
    </>
  )
}

export default Home;
