import React from 'react';
import { opeResultsText } from './../text/ope-results-text.js';
import { conResultsText } from './../text/con-results-text.js';
import { extResultsText } from './../text/ext-results-text.js';
import { agrResultsText } from './../text/agr-results-text.js';
import { staResultsText } from './../text/sta-results-text.js';
import { strengthsText } from './../text/strengths-text.js';




import Logo from './../images/logo.png';

import O from './../images/o.png';
import O2 from './../images/o2.png';
import C from './../images/c.png';
import C2 from './../images/c2.png';
import E from './../images/e.png';
import E2 from './../images/e2.png';
import A from './../images/a.png';
import A2 from './../images/a2.png';
import S from './../images/s.png';
import S2 from './../images/s2.png';

import Strength from './../images/strength.png';
import Weakness from './../images/weakness.png';

import { Link, useNavigate } from 'react-router-dom';

import './results.scss';
import './pre-test.scss';



let opeTitle;
let opeText1;
let opeText2;
let opeText3;

let conTitle;
let conText1;
let conText2;
let conText3;

let extTitle;
let extText1;
let extText2;
let extText3;


let agrTitle;
let agrText1;
let agrText2;
let agrText3;


let staTitle;
let staText1;
let staText2;
let staText3;

let strengthsText1;
let strengthsText2;
let strengthsText3;

let weaknessText1;
let weaknessText2;
let weaknessText3;

let opeStrengths1;
let opeStrengths2;
let opeStrengths3;
let opeWeaknesses1;
let opeWeaknesses2;
let opeWeaknesses3;

let conStrengths1;
let conStrengths2;
let conStrengths3;
let conWeaknesses1;
let conWeaknesses2;
let conWeaknesses3;

let extStrengths1;
let extStrengths2;
let extStrengths3;
let extWeaknesses1;
let extWeaknesses2;
let extWeaknesses3;

let agrStrengths1;
let agrStrengths2;
let agrStrengths3;
let agrWeaknesses1;
let agrWeaknesses2;
let agrWeaknesses3;

let staStrengths1;
let staStrengths2;
let staStrengths3;
let staWeaknesses1;
let staWeaknesses2;
let staWeaknesses3;


let renderOpeStrengths = true;
let renderConStrengths = true;
let renderExtStrengths = true;
let renderAgrStrengths = true;
let renderStaStrengths = true;


const Results = ({ opeScore, conScore, extScore, agrScore, staScore }) => {

  console.log("results = " + opeScore + conScore + extScore + agrScore + staScore);


  const opeLevel = opeScore;
  const conLevel = conScore;
  const extLevel = extScore;
  const agrLevel = agrScore;
  const staLevel = staScore;

  //const opeLevel = 2; 
  //const conLevel = 4; 
  //const extLevel = 2; 
  //const agrLevel = 2;
  //const staLevel = 7; 


  if (opeLevel <= 1) {
    opeTitle = "Highly closed to experience";
    opeText1 = opeResultsText.ope1text1;
    opeText2 = opeResultsText.ope1text2;
    opeText3 = opeResultsText.ope1text3;
  }
  else if (opeLevel <= 2) {
    opeTitle = "Moderately closed to experience";
    opeText1 = opeResultsText.ope2text1;
    opeText2 = opeResultsText.ope2text2;
    opeText3 = opeResultsText.ope2text3;
  }
  else if (opeLevel <= 3) {
    opeTitle = "Somewhat closed to experience";
    opeText1 = opeResultsText.ope3text1;
    opeText2 = opeResultsText.ope3text2;
    opeText3 = opeResultsText.ope3text3;
  }
  else if (opeLevel <= 4) {
    opeTitle = "Neither open nor closed to experience";
    opeText1 = opeResultsText.ope4text1;
    opeText2 = opeResultsText.ope4text2;
    opeText3 = opeResultsText.ope4text3;
  }
  else if (opeLevel <= 5) {
    opeTitle = "Somewhat open to experience";
    opeText1 = opeResultsText.ope5text1;
    opeText2 = opeResultsText.ope5text2;
    opeText3 = opeResultsText.ope5text3;
  }
  else if (opeLevel <= 6) {
    opeTitle = "Moderately open to experience";
    opeText1 = opeResultsText.ope6text1;
    opeText2 = opeResultsText.ope6text2;
    opeText3 = opeResultsText.ope6text3;
  }
  else if (opeLevel <= 7) {
    opeTitle = "Highly open to experience";
    opeText1 = opeResultsText.ope7text1;
    opeText2 = opeResultsText.ope7text2;
    opeText3 = opeResultsText.ope7text3;
  }


  if (conLevel <= 1) {
    conTitle = "Highly unstructured";
    conText1 = conResultsText.con1text1;
    conText2 = conResultsText.con1text2;
    conText3 = conResultsText.con1text3;
  }
  else if (conLevel <= 2) {
    conTitle = "Moderately unstructured";
    conText1 = conResultsText.con2text1;
    conText2 = conResultsText.con2text2;
    conText3 = conResultsText.con2text3;
  }
  else if (conLevel <= 3) {
    conTitle = "Somewhat unstructured";
    conText1 = conResultsText.con3text1;
    conText2 = conResultsText.con3text2;
    conText3 = conResultsText.con3text3;
  }
  else if (conLevel <= 4) {
    conTitle = "Neither structured nor unstructured";
    conText1 = conResultsText.con4text1;
    conText2 = conResultsText.con4text2;
    conText3 = conResultsText.con4text3;
  }
  else if (conLevel <= 5) {
    conTitle = "Somewhat structured";
    conText1 = conResultsText.con5text1;
    conText2 = conResultsText.con5text2;
    conText3 = conResultsText.con5text3;
  }
  else if (conLevel <= 6) {
    conTitle = "Moderately structured";
    conText1 = conResultsText.con6text1;
    conText2 = conResultsText.con6text2;
    conText3 = conResultsText.con6text3;
  }
  else if (conLevel <= 7) {
    conTitle = "Highly structured";
    conText1 = conResultsText.con7text1;
    conText2 = conResultsText.con7text2;
    conText3 = conResultsText.con7text3;
  }



  if (extLevel <= 1) {
    extTitle = "Highly introverted";
    extText1 = extResultsText.ext1text1;
    extText2 = extResultsText.ext1text2;
    extText3 = extResultsText.ext1text3;
  }
  else if (extLevel <= 2) {
    extTitle = "Moderately introverted";
    extText1 = extResultsText.ext2text1;
    extText2 = extResultsText.ext2text2;
    extText3 = extResultsText.ext2text3;
  }
  else if (extLevel <= 3) {
    extTitle = "Somewhat introverted";
    extText1 = extResultsText.ext3text1;
    extText2 = extResultsText.ext3text2;
    extText3 = extResultsText.ext3text3;
  }
  else if (extLevel <= 4) {
    extTitle = "Neither introverted nor extraverted";
    extText1 = extResultsText.ext4text1;
    extText2 = extResultsText.ext4text2;
    extText3 = extResultsText.ext4text3;
  }
  else if (extLevel <= 5) {
    extTitle = "Somewhat extraverted";
    extText1 = extResultsText.ext5text1;
    extText2 = extResultsText.ext5text2;
    extText3 = extResultsText.ext5text3;
  }
  else if (extLevel <= 6) {
    extTitle = "Moderately extraverted";
    extText1 = extResultsText.ext6text1;
    extText2 = extResultsText.ext6text2;
    extText3 = extResultsText.ext6text3;
  }
  else if (extLevel <= 7) {
    extTitle = "Highly extraverted";
    extText1 = extResultsText.ext7text1;
    extText2 = extResultsText.ext7text2;
    extText3 = extResultsText.ext7text3;
  }




  if (agrLevel <= 1) {
    agrTitle = "Highly disagreeable";
    agrText1 = agrResultsText.agr1text1;
    agrText2 = agrResultsText.agr1text2;
    agrText3 = agrResultsText.agr1text3;
  }
  else if (agrLevel <= 2) {
    agrTitle = "Moderately disagreeable";
    agrText1 = agrResultsText.agr2text1;
    agrText2 = agrResultsText.agr2text2;
    agrText3 = agrResultsText.agr2text3;
  }
  else if (agrLevel <= 3) {
    agrTitle = "Somewhat disagreeable";
    agrText1 = agrResultsText.agr3text1;
    agrText2 = agrResultsText.agr3text2;
    agrText3 = agrResultsText.agr3text3;
  }
  else if (agrLevel <= 4) {
    agrTitle = "Neither disagreeable nor agreeable";
    agrText1 = agrResultsText.agr4text1;
    agrText2 = agrResultsText.agr4text2;
    agrText3 = agrResultsText.agr4text3;
  }
  else if (agrLevel <= 5) {
    agrTitle = "Somewhat agreeable";
    agrText1 = agrResultsText.agr5text1;
    agrText2 = agrResultsText.agr5text2;
    agrText3 = agrResultsText.agr5text3;
  }
  else if (agrLevel <= 6) {
    agrTitle = "Moderately agreeable";
    agrText1 = agrResultsText.agr6text1;
    agrText2 = agrResultsText.agr6text2;
    agrText3 = agrResultsText.agr6text3;
  }
  else if (agrLevel <= 7) {
    agrTitle = "Highly agreeable";
    agrText1 = agrResultsText.agr7text1;
    agrText2 = agrResultsText.agr7text2;
    agrText3 = agrResultsText.agr7text3;
  }




  if (staLevel <= 1) {
    staTitle = "Highly emotionally unstable";
    staText1 = staResultsText.sta1text1;
    staText2 = staResultsText.sta1text2;
    staText3 = staResultsText.sta1text3;
  }
  else if (staLevel <= 2) {
    staTitle = "Moderately emotionally unstable";
    staText1 = staResultsText.sta2text1;
    staText2 = staResultsText.sta2text2;
    staText3 = staResultsText.sta2text3;
  }
  else if (staLevel <= 3) {
    staTitle = "Somewhat emotionally unstable";
    staText1 = staResultsText.sta3text1;
    staText2 = staResultsText.sta3text2;
    staText3 = staResultsText.sta3text3;
  }
  else if (staLevel <= 4) {
    staTitle = "Neither emotionally stable nor  emotionally unstable";
    staText1 = staResultsText.sta4text1;
    staText2 = staResultsText.sta4text2;
    staText3 = staResultsText.sta4text3;
  }
  else if (staLevel <= 5) {
    staTitle = "Somewhat emotionally stable";
    staText1 = staResultsText.sta5text1;
    staText2 = staResultsText.sta5text2;
    staText3 = staResultsText.sta5text3;
  }
  else if (staLevel <= 6) {
    staTitle = "Moderately emotionally stable";
    staText1 = staResultsText.sta6text1;
    extText2 = staResultsText.sta6text2;
    extText3 = staResultsText.sta6text3;
  }
  else if (staLevel <= 7) {
    staTitle = "Highly emotionally stable";
    staText1 = staResultsText.sta7text1;
    staText2 = staResultsText.sta7text2;
    staText3 = staResultsText.sta7text3;
  }


  if (opeLevel <= 4) {
    opeStrengths1 = strengthsText.cloStrength1;
    opeStrengths2 = strengthsText.cloStrength2;
    opeStrengths3 = strengthsText.cloStrength3;
    opeWeaknesses1 = strengthsText.cloWeakness1;
    opeWeaknesses2 = strengthsText.cloWeakness2;
    opeWeaknesses3 = strengthsText.cloWeakness3;
  }
  else {
    opeStrengths1 = strengthsText.opeStrength1;
    opeStrengths2 = strengthsText.opeStrength2;
    opeStrengths3 = strengthsText.opeStrength3;
    opeWeaknesses1 = strengthsText.opeWeakness1;
    opeWeaknesses2 = strengthsText.opeWeakness2;
    opeWeaknesses3 = strengthsText.opeWeakness3;
  }

  if (opeLevel == 4) {
    renderOpeStrengths = false;
  }



  if (conLevel <= 4) {
    conStrengths1 = strengthsText.uncStrength1;
    conStrengths2 = strengthsText.uncStrength2;
    conStrengths3 = strengthsText.uncStrength3;
    conWeaknesses1 = strengthsText.uncWeakness1;
    conWeaknesses2 = strengthsText.uncWeakness2;
    conWeaknesses3 = strengthsText.uncWeakness3;
  }
  else {
    conStrengths1 = strengthsText.conStrength1;
    conStrengths2 = strengthsText.conStrength2;
    conStrengths3 = strengthsText.conStrength3;
    conWeaknesses1 = strengthsText.conWeakness1;
    conWeaknesses2 = strengthsText.conWeakness2;
    conWeaknesses3 = strengthsText.conWeakness3;
  }

  if (conLevel == 4) {
    renderConStrengths = false;
  }


  if (extLevel <= 4) {
    extStrengths1 = strengthsText.intStrength1;
    extStrengths2 = strengthsText.intStrength2;
    extStrengths3 = strengthsText.intStrength3;
    extWeaknesses1 = strengthsText.intWeakness1;
    extWeaknesses2 = strengthsText.intWeakness2;
    extWeaknesses3 = strengthsText.intWeakness3;
  }
  else {
    extStrengths1 = strengthsText.extStrength1;
    extStrengths2 = strengthsText.extStrength2;
    extStrengths3 = strengthsText.extStrength3;
    extWeaknesses1 = strengthsText.extWeakness1;
    extWeaknesses2 = strengthsText.extWeakness2;
    extWeaknesses3 = strengthsText.extWeakness3;
  }

  if (extLevel == 4) {
    renderExtStrengths = false;
  }


  if (agrLevel <= 4) {
    agrStrengths1 = strengthsText.disStrength1;
    agrStrengths2 = strengthsText.disStrength2;
    agrStrengths3 = strengthsText.disStrength3;
    agrWeaknesses1 = strengthsText.disWeakness1;
    agrWeaknesses2 = strengthsText.disWeakness2;
    agrWeaknesses3 = strengthsText.disWeakness3;
  }
  else {
    agrStrengths1 = strengthsText.agrStrength1;
    agrStrengths2 = strengthsText.agrStrength2;
    agrStrengths3 = strengthsText.agrStrength3;
    agrWeaknesses1 = strengthsText.agrWeakness1;
    agrWeaknesses2 = strengthsText.agrWeakness2;
    agrWeaknesses3 = strengthsText.agrWeakness3;
  }

  if (agrLevel == 4) {
    renderAgrStrengths = false;
  }

  if (staLevel <= 4) {
    staStrengths1 = strengthsText.neuStrength1;
    staStrengths2 = strengthsText.neuStrength2;
    staStrengths3 = strengthsText.neuStrength3;
    staWeaknesses1 = strengthsText.neuWeakness1;
    staWeaknesses2 = strengthsText.neuWeakness2;
    staWeaknesses3 = strengthsText.neuWeakness3;
  }
  else {
    staStrengths1 = strengthsText.staStrength1;
    staStrengths2 = strengthsText.staStrength2;
    staStrengths3 = strengthsText.staStrength3;
    staWeaknesses1 = strengthsText.staWeakness1;
    staWeaknesses2 = strengthsText.staWeakness2;
    staWeaknesses3 = strengthsText.staWeakness3;
  }

  if (staLevel == 4) {
    renderStaStrengths = false;
  }


  const opeLogo = (opeLevel <= 4) ? O2 : O;
  const conLogo = (conLevel <= 4) ? C2 : C;
  const extLogo = (extLevel <= 4) ? E2 : E;
  const agrLogo = (agrLevel <= 4) ? A2 : A;
  const staLogo = (staLevel <= 4) ? S2 : S;

  return (
    <div className="results">

      <div className="results-heading-section">
        <div className="flex-divider">
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <div>
            <div className="results-heading-text">
              <div className="results-heading-title"> Your results:</div>
              <div className="time-subtitle"></div>
            </div>
          </div>

        </div>


      </div>

      <div className="result-icons">
        <div className="result">
          <div className="result-icon">
            <img src={opeLogo} alt="logo" />
          </div>
          <div className="result-text">
            {opeTitle}
          </div>
          {/*<div className="result-letter">
            O
  </div>*/}

        </div>
        <div className="result">
          <div className="result-icon">
            <img src={conLogo} alt="logo" />
          </div>
          <div className="result-text">
            {conTitle}
          </div>
          {/*
          <div className="result-letter">
            C
          </div>
*/}
        </div>
        <div className="result">
          <div className="result-icon">
            <img src={extLogo} alt="logo" />
          </div>
          <div className="result-text">
            {extTitle}
          </div>
          {/*
          <div className="result-letter">
            E
          </div>
*/}
        </div>
        <div className="result">
          <div className="result-icon">
            <img src={agrLogo} alt="logo" />
          </div>
          <div className="result-text">
            {agrTitle}
          </div>
          {/*
          <div className="result-letter">
            A
          </div>
*/}
        </div>
        <div className="result">
          <div className="result-icon">
            <img src={staLogo} alt="logo" />
          </div>
          <div className="result-text">
            {staTitle}
          </div>
          {/*
          <div className="result-letter">
            S
          </div>
*/}
        </div>
      </div>






      <Facet facetTitle={opeTitle} facetLogo={opeLogo} facetText1={opeText1} facetText2={opeText2} facetText3={opeText3}
        strength1={opeStrengths1} strength2={opeStrengths2} strength3={opeStrengths3} weakness1={opeWeaknesses1} weakness2={opeWeaknesses2}
        weakness3={opeWeaknesses3} showStrengths={renderOpeStrengths}
      />
      <Facet facetTitle={conTitle} facetLogo={conLogo} facetText1={conText1} facetText2={conText2} facetText3={conText3}
        strength1={conStrengths1} strength2={conStrengths2} strength3={conStrengths3} weakness1={conWeaknesses1} weakness2={conWeaknesses2}
        weakness3={conWeaknesses3} showStrengths={renderConStrengths} />
      <Facet facetTitle={extTitle} facetLogo={extLogo} facetText1={extText1} facetText2={extText2} facetText3={extText3}
        strength1={extStrengths1} strength2={extStrengths2} strength3={extStrengths3} weakness1={extWeaknesses1} weakness2={extWeaknesses2}
        weakness3={extWeaknesses3} showStrengths={renderExtStrengths} />
      <Facet facetTitle={agrTitle} facetLogo={agrLogo} facetText1={agrText1} facetText2={agrText2} facetText3={agrText3}
        strength1={agrStrengths1} strength2={agrStrengths2} strength3={agrStrengths3} weakness1={agrWeaknesses1} weakness2={agrWeaknesses2}
        weakness3={agrWeaknesses3} showStrengths={renderAgrStrengths} />
      <Facet facetTitle={staTitle} facetLogo={staLogo} facetText1={staText1} facetText2={staText2} facetText3={staText3}
        strength1={staStrengths1} strength2={staStrengths2} strength3={staStrengths3} weakness1={staWeaknesses1} weakness2={staWeaknesses2}
        weakness3={staWeaknesses3} showStrengths={renderStaStrengths} />





    </div>
  );
}


const Facet = ({ facetTitle, facetLogo, facetText1, facetText2, facetText3, strength1, strength2, strength3, weakness1, weakness2,
  weakness3, showStrengths }) => {


  return (

    <div className="facet">
      <div className="facet-title">
        {facetTitle}
      </div>
      <div className="flex-divider">
        <div className="facet-logo">

          <img src={facetLogo} alt="logo" />  </div>
        <div className="facet-text-centered">
          {facetText1}
        </div>
      </div>
      <div className="facet-text">
        {facetText2}
      </div>
      <div className="facet-text">
        {facetText3}
      </div>

        
          <RenderStrengths strength1 = {strength1} strength2 = {strength2} strength3 = {strength3}
           weakness1={weakness1} weakness2={weakness2} weakness3={weakness3} renderStrengths={showStrengths} />
       

    </div>

  );

}



const RenderStrengths = ( {strength1, strength2, strength3, weakness1, weakness2, weakness3, renderStrengths }) => {

  if( renderStrengths == true){
  return (
    <>
      <div className="facet-strengths">
        <div className="flex-divider">
          <img className="strength-image" src={Strength} alt="logo" />
          <div className="strengths-text">
            <div className="strengths-title">
              Strengths:
            </div>
            <div className="strengths-p">
              <div className="strength">
                • {strength1}
              </div>
              <div className="strength">
                • {strength2}
              </div>
              <div className="strength">
                • {strength3}
              </div>
            </div>
          </div>
        </div>


      </div>



      <div className="facet-strengths">
        <div className="flex-divider">
          <img className="strength-image" src={Weakness} alt="logo" />
          <div className="strengths-text">
            <div className="strengths-title">
              Weaknesses:
            </div>
            <div className="strengths-p">
              <div className="strength">
                • {weakness1}
              </div>
              <div className="strength">
                • {weakness2}
              </div>
              <div className="strength">
                • {weakness3}
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  
  );
  }
  else{
    return (<></>);
  }

}

export default Results;
