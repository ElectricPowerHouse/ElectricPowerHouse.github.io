import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

import './style.scss';



const Footer = () => {

  return (
    <div className= "footer-wrapper">
    <div className = "footer">

      <div > copyright @ 2023 Jack Upton Limited </div>
      <div  className="footer-text"> contact thebigfive@gmail.com </div>
      

    </div>
    </div>
  );
}

export default Footer;
