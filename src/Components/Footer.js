import React from 'react';
import { FaInstagram,FaWhatsapp,FaGithub,FaLinkedin } from "react-icons/fa";


const Footer = () => {
  const handleLinkedin=()=>{
    window.open("https://www.linkedin.com/in/rajakumar9330/")
  }
  return (
    <>
    <div className="footer">

        <div className='socialMedia'>
            <FaLinkedin onClick={handleLinkedin}/>
            <FaGithub/>
            <FaInstagram/>
            <FaWhatsapp/>
        </div>
        <p>©️copy: 2023 Raja</p>
    </div>
    </>
  )
}

export default Footer;