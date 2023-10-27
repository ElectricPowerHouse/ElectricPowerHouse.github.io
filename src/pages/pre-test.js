import React from 'react';

import Logo from './../images/logo.png';

import { Link, useNavigate } from 'react-router-dom';

const PreTest = () => {

  return (
    <div className="time-select">

      <div className="time-select-heading-section">
        <div className="flex-divider">
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <div>
            <div className="time-text">
              <div className="time-title"> Medium length test</div>
              <div className="time-subtitle"></div>
            </div>
          </div>

        </div>


      </div>

      <div className="text-box">
        <div>

        Make sure you are in a quiet space where you know you will not be interrupted for the duration of the test. Try to answer each question honestly:  Aim to not be overly flattering to yourself, nor overly self-critical. Do not take the test if you are overly tired or in an extreme emotional state. If you get stuck on a question, go with your instinct. 


        </div>
        <div className="button-container">
        <Link to="/test"> <button className="button secondary"> Begin test</button> </Link>
        </div>

      </div>







    </div>
  );
}

export default PreTest;
