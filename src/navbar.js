import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

import './navbar.scss';
import Icon from './images/small-icon.png';


const NavBar = () => {

  return (<nav>
    <div className = "nav">

      <div className = "nav-left"> <Link to = "/">
        <div className = "flex-divider">
        <div className = "nav-icon">
        <img src={Icon} alt="small-icon" />
        </div>
        <div className = "nav-text">
        The Big Five
          </div>

          </div>
      
        </Link>
      </div>
      
     

    
    <div className="nav-right">
      
    </div>

    </div>
  </nav>);
}

export default NavBar;
