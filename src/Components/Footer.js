import React from 'react';
import { FaInstagram,FaWhatsapp,FaGithub,FaLinkedin } from "react-icons/fa";


const Footer = () => {

  return (
    <>
    <div className="footer">

        <div className='socialMedia'>
            <FaLinkedin onClick={()=>window.open("https://www.linkedin.com/in/rajakumar9330/")}/>
            <FaGithub/>
            <FaInstagram/>
            <FaWhatsapp/>
        </div>
        <p>Copyright &copy; {new Date().getFullYear()} |All rights reserved | Raja Kumar </p>
    </div>
    </>
  )
}

export default Footer;
