import React from 'react';

import { Link, useNavigate } from 'react-router-dom';
import {useState} from 'react';

const TestQuestion = ( {questionText, questionTrait, questionScore, index, selected, setSelected} ) => {



 
  return (

      <div className="radio-container">

        <hr className="horizontal-line" />

        <div className="radio-question">
          {questionText}
        </div>
        <fieldset className="buttons-container" >
         
          <div className="button-box">
            <input 
            defaultChecked={false}
            className="radio-button" 
            type="radio" 
            checked = {selected==0} 
            onClick = {() => {
            setSelected(index, 0, questionTrait, questionScore); 
            }} 
            name={questionText} 
            />
            <span style={{backgroundColor: selected==0 ? 'white': 'transparent'}} className="custom-radio big" />
            <div className="radio-button-text" >
              Strongly disagree
            </div>
          </div>


          <div className="button-box">
            <input className="radio-button"
             type="radio" 
             checked = {selected==1} 
             onClick = {() => setSelected(index, 1, questionTrait, questionScore)} 
             name={questionText} />
              <span style={{backgroundColor: selected==1 ? 'white': 'transparent'}} className="custom-radio medium" />
            <div className="radio-button-text">
              Disagree
            </div>
          </div>


          <div className="button-box">
            <input className="radio-button"
             type="radio" 
             checked = {selected==2} 
             onClick = {() => setSelected(index, 2, questionTrait, questionScore)} 
             name={questionText} />
              <span  style={{backgroundColor: selected==2 ? 'white': 'transparent'}}  className="custom-radio small" />
            <div className="radio-button-text">
              Neutral
            </div>
          </div>


          <div className="button-box">
            <input className="radio-button"
             type="radio" 
             checked = {selected==3} 
             onClick = {() => setSelected(index, 3, questionTrait, questionScore)} 
             name={questionText} />
              <span  style={{backgroundColor: selected==3 ? 'white': 'transparent'}} className="custom-radio medium" />
            <div className="radio-button-text">
              Agree
            </div>
          </div>


          <div className="button-box">
            <input className="radio-button"
             type="radio"
              checked = {selected==4}  
              onClick = {() => setSelected(index, 4, questionTrait, questionScore)} 
              name={questionText}/>
               <span  style={{backgroundColor: selected==4 ? 'white': 'transparent'}} className="custom-radio big" />
            <div className="radio-button-text">
              Strongly agree
            </div>
          </div>

         
        </fieldset>
        
      </div>
  );
}

export default TestQuestion;
