import React from 'react';
import { FaInstagram,FaWhatsapp,FaGithub,FaLinkedin } from "react-icons/fa";


const Footer = () => {

  return (
    <>
    <div className="footer">

        <div className='socialMedia'>
            <FaLinkedin onClick={()=>window.open("https://www.linkedin.com/in/rajakumar9330/")}/>
            <FaGithub onClick={()=>window.open('https://github.com/rajak9930')}/>
            <FaInstagram onClick={()=>window.open('https://www.instagram.com/r.a.j.a_yyyy/')}/>
            <FaWhatsapp onClick={()=>window.open('https://wamsg.me/db98')}/>
        </div>
        <p>Copyright &copy; {new Date().getFullYear()} |All rights reserved | Raja Kumar </p>
    </div>
    </>
  )
}

export default Footer;
