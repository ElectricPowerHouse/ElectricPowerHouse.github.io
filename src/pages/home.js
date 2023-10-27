import React from 'react';
import { useState, useEffect } from 'react';

import HomeImage from './../images/home-image.png';
import Icons from './../images/icons.png';
import Results from './../images/results.png';
import Science from './../images/science.png';
import Open from './../images/open.png';
import Structured from './../images/structured.png';
import Extraverted from './../images/extraverted.png';
import Agreeable from './../images/agreeable.png';
import Stable from './../images/stable.png';

import Chevron from './../images/chevron.png';
import ChevronDown from './../images/chevron-down.png';

import { Link, useNavigate } from 'react-router-dom';

const Home = () => {




  return (
    <div className="home">



      <div className="home-section-1">
        <div className="background" >
          <div className="home-body">
            <div className="flex-divider">
              <div className="home-left">
                <img src={HomeImage} alt="home-image" />
              </div>


              <div className="home-right">
                <div className="subheading">
                  Understand yourself
                </div>
                <div className="title">
                  The Big Five
                </div>
                <div className="text">
                The Big Five is a method of assessing & understanding individual personality traits. Every person differs in a way that can fundamentally be broken down into 5 personality facets: openness, structuredness, extraversion, agreeableness, and emotional stability. Understanding these traits can help you understand why you are the person you are, what your weaknesses and strengths are, and how you relate to others in your life.
                </div>
                <div className="buttons">

                  <Link to="/pre-test">
                    <button className="button">
                      <div className="button-text" >  Take the test </div>
                      <img className="button-icon" src={Chevron} alt="chevron" />
                    </button>
                  </Link>

                  <div className="horizontal-divider" />

                  <button className="button"><div className="button-text" onClick = {()=> {window.scrollTo(0,500)}}>  Learn more </div>
                    <img className="button-icon" src={ChevronDown} alt="chevron" />
                  </button>


                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      <div className="home-section-2" >
        <div className="home-body">
          <div className="vertical-spacer" />
          <div className="subheading"> A better metric</div>
          <div className="title"> What is the Big Five? </div>

          <div className="home-small-segment">
            <div className="flex-divider">

              <img src={Icons} alt="icons" />

              <div className="home-small-segment-right">
                <div className="small-title"> The big 5 metric:</div>
                <div className="text">
                The Big 5 is a psychology metric used to determine the most fundamental ways in which people differ in terms of their personality. The big 5 aspects are openness, structuredness, extraversion, agreeableness, and emotional stability. These aspects are not binary: They are a continuum, with most people aggregating somewhere in the middle and a small amount of outliers at the edges. 
                </div>
              </div>

            </div>

          </div>

          <div className="home-small-segment">
            <div className="flex-divider">



              <div className="home-small-segment-left">
                <div className="small-title"> Honest results:</div>
                <div className="text">
                The Big Five personality test aims to give people a realistic understanding of their personality without sugarcoating strengths & weaknesses. This is in contrast to some other models of personality which aim to flatter the user. Each of the facets of personality comes with unique perspectives, blindspots, ways of understanding the world, and understanding these factors & how they relate to you can be extremely beneficial. 
                </div>
              </div>

              <img src={Results} alt="research" />

            </div>

          </div>


          <div className="home-small-segment">
            <div className="flex-divider">

              <img src={Science} alt="science" />

              <div className="home-small-segment-right">
                <div className="small-title"> Scientifically grounded:</div>
                <div className="text">
                The Big 5 personality index is a well-studied field of psychology and has a broad literature of academic work behind it. The metric is backed by quantitative scientific studies that have been performed on large groups of diverse people. The Big 5 personality test aims to give results based on these objective scientific principles. 
                </div>
              </div>



            </div>

          </div>


        </div>
      </div>



      <div className="home-section-3">
        <div className="home-body">

          <div className="vertical-spacer" />
          <div className="subheading"> How it works</div>
          <div className="title"> The Big Five categories </div>
          <div className="text">The Big 5 metric treats each of the 5 facets of personality separately. Everybody will fall somewhere on a spectrum of these traits, with most people being somewhere in the middle, and a small number of people being outliers.
          </div>

          <div className="home-small-segment">
            <div className="flex-divider">

              <img src={Open} alt="open" />

              <div className="home-small-segment-right">
                <div className="small-title"> Open to experience vs Closed to experience  </div>
                <div className="text">
                People who are open to experience will be more willing to explore and discuss abstract ideas, as well as to seek out novel experiences. Openness is also tightly correlated with creativity. People who are closed to experience are less willing to explore and discuss abstract concepts, and more likely to fall back on more traditional and established ideas.
                </div>
              </div>
            </div>
          </div>



          <div className="home-small-segment">
            <div className="flex-divider">

              <div className="home-small-segment-left">
                <div className="small-title"> Structured vs Unstructured:  </div>
                <div className="text">
                Structured ( Or conscientious ) people are more likely to be diligent with their tasks and to make plans. They value discipline and orderliness, both in their work and in their life. They are also more likely to be judgemental. Unstructured people are more carefree and relaxed, and have a more chaotic and disorganised way of living their life. They may see structured people as uptight and judgemental.

                </div>
              </div>

              <img src={Structured} alt="open" />

            </div>
          </div>

          <div className="home-small-segment">
            <div className="flex-divider">

              <img src={Extraverted} alt="open" />

              <div className="home-small-segment-right">
                <div className="small-title"> Extraversion vs Introversion  </div>
                <div className="text">
                People who are extraverted gather energy from being around people, enjoy large gatherings, parties, and tend to be more enthusiastic and talkative than introverted people. People who are higher in introversion gather energy from being by themselves, and prefer one on one situations for socialising. They tend to be quieter and less likely to speak first. 

                </div>
              </div>
            </div>
          </div>



          <div className="home-small-segment">
            <div className="flex-divider">

              <div className="home-small-segment-left">
                <div className="small-title"> Agreeable vs Disagreeable  </div>
                <div className="text">
                People who are agreeable are more likely to be warm in nature, seek harmony, and to help others. They are naturally interested in others, and want the best for everyone in a group context. People who are disagreeable are less afraid of conflict with others, and look out for themselves more than agreeable people. They are not afraid of competition & are direct about what they want. 
                </div>
              </div>

              <img src={Agreeable} alt="open" />

            </div>
          </div>

          <div className="home-small-segment">
            <div className="flex-divider">

              <img src={Stable} alt="open" />

              <div className="home-small-segment-right">
                <div className="small-title"> Emotionally stable vs Emotionally unstable  </div>
                <div className="text">
                Emotionally stable people do not get easily bothered by stressful situations, and do not swing wildly in their mood. They are more likely to be able to handle dangerous environments where there is a lot of pressure on them. Emotionally unstable people are more easily disturbed, and tend to have more ups and downs in their mood. They are more bothered by events than emotionally stable people and tend to be more sensitive to threats and negative events in their life.

                </div>
              </div>
            </div>
          </div>


          <div className="home-bottom-button">

            <Link to="/pre-test">
              <button className="button">
                <div className="button-text" >  Take the test </div>
                <img className="button-icon" src={Chevron} alt="chevron" />
              </button>
            </Link>

          </div>

        </div>

      </div>










    </div>
  );
}

export default Home;
