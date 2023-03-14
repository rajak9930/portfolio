import React from 'react'
import { FaGithub,FaLinkedin, } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import '../Style/Home.css';
//import profile from '../assets/profile_pic.jpeg'
import {UrlTitle} from '../Service/UrlTitle';
const Home = () => {
    UrlTitle(`Home | portfolio`)
  return (
    <>
     <div className="home">
    
        <div className="about">
        <div className='pic'>
        
     </div>
        <h2 className='animate-charcter'>Hi, My Name is Raja Kumar</h2>
        <div className="prompt">
            <p>A software  developer  with  a passion  for learning and creating</p>
            <div className='link'>
            <FaLinkedin onClick={()=>window.open('https://www.linkedin.com/in/rajakumar9330/')}/>
<MdEmail onClick={()=>window.open('')}/>
<FaGithub onClick={()=>window.open('https://github.com/rajak9930')}/>
            </div>

        </div>
        </div>
        <div className="skills">
            <h1>Skills</h1>
            <ol>
                <li className='item'>
                    <h2>Front-End</h2>
                    <span>ReactJS, Redux, HTML, CSS,Tailwind CSS, BootStrap</span>
                </li>

                <li className='item'>
                    <h2>Languages</h2>
                    <span>JavaScript ,Php</span>
                </li>
            </ol>
        </div>
     </div>
    </>
  )
}

export default Home;
