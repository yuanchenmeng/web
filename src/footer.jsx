import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer() {

  const iconStyle = {
    fontSize: '20px',
    margin: '10px',
  };

  return (
    <div className="w-full bg-black text-center text-white flex justify-center items-center flex-col" style={{height: '80px',}}>

      <div className="main-width mx-auto">

        <div className="flex items-center justify-between">

          <div className="flex items-center">
            <div className="text-xl"> Contact: </div>
            <a href="https://www.linkedin.com/in/yuanchen-meng/" target="" rel="">
              <FaLinkedin style={iconStyle}/>
            </a>
            <a href="https://github.com/yuanchenmeng" target="" rel="">
              <FaGithub style={iconStyle}/>
            </a>
            <a href="mailto:yuanchen_meng@ucsb.edu">
              <FaEnvelope style={iconStyle}/>
            </a>
            <a href="tel:+8056373971">
              <FaPhone style={iconStyle}/>
            </a>
          </div>

          <div className="text-l"> Last updated: 01/2024</div>
        </div>

      </div>

    </div>
  );
}

export default Footer;