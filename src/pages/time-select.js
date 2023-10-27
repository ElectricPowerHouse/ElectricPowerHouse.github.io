import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

import './pre-test.scss';
import './../style.scss';
import Logo from './../images/logo.png';


const TimeSelect = () => {

  return (
    <div className="time-select">



      <div className="time-select-heading-section">
        <div className="flex-divider">
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <div className="time-text">
            <div className="time-title"> Select approx length of time for test</div>
            <div className="time-subtitle"> A longer test will give you better results. </div>
          </div>

        </div>


      </div>

      <div className="time-boxes">

        <div className="box">

          <div className="box-top">

            <div className="box-title">
              Quick test
            </div>

            <div className="box-subtitle">
              100 questions: Approx 5 mins
            </div>
            <div className="box-subtitle">
              A quick test if you’re short on time. Results may be less accurate than the longer test options.
            </div>

          </div>

          <div className="box-bottom">

          <Link to="/pre-test"> <button className="button secondary">Take the test </button> </Link>

          </div>

        </div>

        <div className="box">

          <div className="box-top">

            <div className="box-title">
              Medium test
            </div>

            <div className="box-subtitle">
            200 questions: Approx 15 mins 
            </div>
            <div className="box-subtitle">
            A medium-length test that will give you more accurate results.             </div>

          </div>

          <div className="box-bottom">

          <Link to="/pre-test"> <button className="button secondary">Take the test </button> </Link>

          </div>

        </div>

        <div className="box">

          <div className="box-top">

            <div className="box-title">
              Full test
            </div>

            <div className="box-subtitle">
            200 questions: Approx 30 mins            </div>
            <div className="box-subtitle">
            The longest test to give you the best, in-depth results. Results will break down into sub-facets of the big five ( There are 2 sub facets for each big 5 trait), as well as giving you more in-depth understanding of your personality.     
                    </div>

          </div>

          <div className="box-bottom">

            <div>Coming soon </div>

          </div>

        </div>


      </div>

     





    </div>
  );
}

export default TimeSelect;
