import React from 'react';
import { useState, useEffect } from 'react';
import TestQuestion from './../components/test-question.js'

import { Link, useNavigate } from 'react-router-dom';
import questions from './../components/questions.js';
import shortQuestionList from './../components/question-list.js';

import './test.scss';
import './../style.scss';

const Math = require('mathjs');






const Test = ({opeScore, setOpeScore, conScore, setConScore, extScore, setExtScore, agrScore, setAgrScore, staScore, setStaScore}) => {

  const showDevTools = false; 

  //big 5 distribution curve variables
  const opeMean = 37.837;
  const opeStd = 6.677;
  const conMean = 33.1879;
  const conStd = 7.473;
  const extMean = 29.5722;
  const extStd = 9.116;
  const agrMean = 39.761;
  const agrStd = 6.954;
  const staMean = 34.987;
  const staStd = 7.452;


  //distribution curve cutoff points
  //these were for a -100 to 100 scale but i needed a 0 to 100 scale instead
  //const leftPoint4 = -100;
  //const leftPoint3 = -70;
  //const leftPoint2 = -42;
  //const leftPoint1 = -14;
  //const rightPoint1 = 14;
  //const rightPoint2 = 42;
  //const rightPoint3 = 70;
  //const rightPoint4 = 100;


    //distribution curve cutoff points
    const leftPoint4 = 0;
    const leftPoint3 = 15;
    const leftPoint2 = 29;
    const leftPoint1 = 43;
    const rightPoint1 = 57;
    const rightPoint2 = 71;
    const rightPoint3 = 85;
    const rightPoint4 = 100;

  const [progress, setProgress] = useState(1);
  const [ope, setOpe] = useState(0);
  const [con, setCon] = useState(0);
  const [ext, setExt] = useState(0);
  const [agr, setAgr] = useState(0);
  const [sta, setSta] = useState(0);

  const questionDisplayAmount = 10;



  const [questionDisplayMin, setQuestionDisplayMin] = useState(0);
  const [questionDisplayMax, setQuestionDisplayMax]= useState(questionDisplayAmount);

  let questionList = [];
  const [randomizedQuestionList, setRandomizedQuestionList] = useState([]);
  const [selectedList, setSelectedList] = useState(Array(shortQuestionList.length).fill(2));


  const [opePercentile, setOpePercentile] = useState(0);
  const [conPercentile, setConPercentile] = useState(0);
  const [extPercentile, setExtPercentile] = useState(0);
  const [agrPercentile, setAgrPercentile] = useState(0);
  const [staPercentile, setStaPercentile] = useState(0);




  const [opeText, setOpeText] = useState("");
  const [conText, setConText] = useState("");
  const [extText, setExtText] = useState("");
  const [agrText, setAgrText] = useState("");
  const [staText, setStaText] = useState("");



    // used on older version to update results when 'next' was pressed

    {/*
  const addResults = () => {


    let newResults = resultTally.map((item, i) => {


      let num = mapNumRange(selectedList[i]);

      item += num;
      return item;

    }
    )

    setResultTally(newResults);
  }
*/}


  //when updating results, iterates through all of the questions from the question list, checks their trait, and if it matches the trait, either adds the score to the trait fields, or negates it depending 
  // on the score 
  const updateResults = () => {

    let o = 0;
    let c = 0;
    let e = 0;
    let a = 0;
    let s = 0; 


    for(let i=0; i<questionList.length; i++){


      if(questionList[i]!==null){



        if(questionList[i].props.questionTrait=='O'){

          console.log(questionList[i].props.questionTrait);
          console.log(selectedList[i]);

          if(questionList[i].props.questionScore==1){
            o+=selectedList[i]+1;
          }
          else{
            o+=mapNumRange(selectedList[i]);
          }
        }
        if(questionList[i].props.questionTrait=='C'){
          if(questionList[i].props.questionScore==1){
            c+=selectedList[i]+1;
          }
          else{
            c+=mapNumRange(selectedList[i]);
          }
        }

        if(questionList[i].props.questionTrait=='E'){
          if(questionList[i].props.questionScore==1){
            e+=selectedList[i]+1;
          }
          else{
            e+=mapNumRange(selectedList[i]);
          }
        }

        if(questionList[i].props.questionTrait=='A'){
          if(questionList[i].props.questionScore==1){
            a+=selectedList[i]+1;
          }
          else{
            a+=mapNumRange(selectedList[i]);
          }
        }

        if(questionList[i].props.questionTrait=='S'){
          if(questionList[i].props.questionScore==1){
            s+=selectedList[i]+1;
          }
          else{
            s+=mapNumRange(selectedList[i]);
          }
        }

     
      }

 

    }

    setOpe(o);
    setCon(c);
    setExt(e);
    setAgr(a);
    setSta(s);
      
  

  }


  // returns the proper scores for negative weighted questions 
  const mapNumRange = (num) => {
    if (num <= 0) {
      return 5;
    }
    else if (num <= 1) {
      return 4;
    }
    else if (num <= 2) {
      return 3;
    }
    else if (num <= 3) {
      return 2;
    }
    else {
      return 1;
    }
  }


  const setSelectedButton = (index, selectedButton) => {
    let newSelected = selectedList.map((item, i) => {
      if (i == index) {
        return selectedButton;
      }
      else {
        return item;
      }
    });
    setSelectedList(newSelected);

    updateResults();

  }


  const addProgress = () => {
    let progressVal = progress;
    progressVal += 1;
    setProgress(progressVal);

    let newQuestionDisplayMin=questionDisplayMin+questionDisplayAmount;
    let newQuestionDisplayMax=questionDisplayMax+questionDisplayAmount;
    setQuestionDisplayMin(newQuestionDisplayMin);
    setQuestionDisplayMax(newQuestionDisplayMax);
  }


  const minusProgress = () => {
    let progressVal = progress;
    progressVal -= 1;
    setProgress(progressVal);

    let newQuestionDisplayMin=questionDisplayMin-questionDisplayAmount;
    let newQuestionDisplayMax=questionDisplayMax-questionDisplayAmount;
    setQuestionDisplayMin(newQuestionDisplayMin);
    setQuestionDisplayMax(newQuestionDisplayMax);
  }

  const calculateResults = () => {
    const opeZ = ( ope - opeMean ) / opeStd;
    const conZ = ( con - conMean ) / conStd;
    const extZ = ( ext - extMean ) / extStd;
    const agrZ = ( agr - agrMean ) / agrStd;
    const staZ = ( sta - staMean ) / staStd;

   

    // Use the cumulative distribution function (CDF) to get the percentile
    const opePercentile = 0.5 * (1 + Math.erf(opeZ / Math.sqrt(2)));
    const conPercentile = 0.5 * (1 + Math.erf(conZ / Math.sqrt(2)));
    const extPercentile = 0.5 * (1 + Math.erf(extZ / Math.sqrt(2)));
    const agrPercentile = 0.5 * (1 + Math.erf(agrZ / Math.sqrt(2)));
    const staPercentile = 0.5 * (1 + Math.erf(staZ / Math.sqrt(2)));

    console.log("Openness score = " + opePercentile + "Score is in the " + opePercentile*100 + "Percentile");
    console.log("Conciencious score = " + conPercentile + "Score is in the " + conPercentile*100 + "Percentile");
    console.log("Extraversion score = " + extPercentile + "Score is in the " + extPercentile*100 + "Percentile");
    console.log("Agreeableness score = " + agrPercentile + "Score is in the " + agrPercentile*100 + "Percentile");
    console.log("Emotional stability score = " + staPercentile + "Score is in the " + staPercentile*100 + "Percentile");

    setOpePercentile(opePercentile*100);
    setConPercentile(conPercentile*100);
    setExtPercentile(extPercentile*100);
    setAgrPercentile(agrPercentile*100);
    setStaPercentile(staPercentile*100);

    if(opePercentile*100<=leftPoint3){
      setOpeText("Highly closed to experience");
      setOpeScore(1);
    }
    else if(opePercentile*100<=leftPoint2){
      setOpeText("Moderately closed to experience");
      setOpeScore(2);
    }
    else if(opePercentile*100<=leftPoint1){
      setOpeText("Somewhat closed to experience");
      setOpeScore(3);
    }
    else if(opePercentile*100<=rightPoint1){
      setOpeText("Neither open nor closed to experience");
      setOpeScore(4);
    }
    else if(opePercentile*100<=rightPoint2){
      setOpeText("Somewhat open to experience");
      setOpeScore(5);
    }
    else if(opePercentile*100<=rightPoint3){
      setOpeText("Moderately open to experience");
      setOpeScore(6);
    }
    else{
      setOpeText("Highly open to experience");
      setOpeScore(7);
    }




    if(conPercentile*100<=leftPoint3){
      setConText("Highly unconscientious");
      setConScore(1);
    }
    else if(conPercentile*100<=leftPoint2){
      setConText("Moderately unconscientious");
      setConScore(2);
    }
    else if(conPercentile*100<=leftPoint1){
      setConText("Somewhat unconscientious");
      setConScore(3);
    }
    else if(conPercentile*100<=rightPoint1){
      setConText("Neither conscientious nor unconscientious");
      setConScore(4);
    }
    else if(conPercentile*100<=rightPoint2){
      setConText("Somewhat conscientious");
      setConScore(5);
    }
    else if(conPercentile*100<=rightPoint3){
      setConText("Moderately conscientious");
      setConScore(6);
    }
    else{
      setConText("Highly conscientious");
      setConScore(7);
    }

    if(agrPercentile*100<=leftPoint3){
      setAgrText("Highly disagreeable");
      setAgrScore(1);
    }
    else if(agrPercentile*100<=leftPoint2){
      setAgrText("Moderately disagreeable");
      setAgrScore(2);
    }
    else if(agrPercentile*100<=leftPoint1){
      setAgrText("Somewhat disagreeable");
      setAgrScore(3);
    }
    else if(agrPercentile*100<=rightPoint1){
      setAgrText("Neither agreeable nor disagreeable");
      setAgrScore(4);
    }
    else if(agrPercentile*100<=rightPoint2){
      setAgrText("Somewhat agreeable");
      setAgrScore(5);
    }
    else if(agrPercentile*100<=rightPoint3){
      setAgrText("Moderately agreeable");
      setAgrScore(6);
    }
    else{
      setAgrText("Highly agreeable");
      setAgrScore(7);
    }




    if(extPercentile*100<=leftPoint3){
      setExtText("Highly introverted");
      setExtScore(1);
    }
    else if(extPercentile*100<=leftPoint2){
      setExtText("Moderately introverted");
      setExtScore(2);
    }
    else if(extPercentile*100<=leftPoint1){
      setExtText("Somewhat introverted");
      setExtScore(3);
    }
    else if(extPercentile*100<=rightPoint1){
      setExtText("Neither introverted nor extraverted");
      setExtScore(4);
    }
    else if(extPercentile*100<=rightPoint2){
      setExtText("Somewhat extraverted");
      setExtScore(5);
    }
    else if(extPercentile*100<=rightPoint3){
      setExtText("Moderately extraverted");
      setExtScore(6);
    }
    else{
      setExtText("Highly extraverted");
      setExtScore(7);
    }

    if(staPercentile*100<=leftPoint3){
      setStaText("Highly neurotic");
      setStaScore(1);
    }
    else if(staPercentile*100<=leftPoint2){
      setStaText("Moderately neurotic");
      setStaScore(2);
    }
    else if(staPercentile*100<=leftPoint1){
      setStaText("Somewhat neurotic");
      setStaScore(3);
    }
    else if(staPercentile*100<=rightPoint1){
      setStaText("Neither neurotic nor emotionally stable");
      setStaScore(4);
    }
    else if(staPercentile*100<=rightPoint2){
      setStaText("Somewhat emotionally stable");
      setStaScore(5);
    }
    else if(staPercentile*100<=rightPoint3){
      setStaText("Moderately emotionally stable");
      setStaScore(6);
    }
    else{
      setStaText("Highly emotionally stable");
      setStaScore(7);
    }
  }


  
    // Effect to shuffle the array once during component initialization
    useEffect(() => {
      setRandomizedQuestionList(shuffle(shortQuestionList));
      }, []);


    shortQuestionList.forEach((item,index) => {
    
      questionList.push(<TestQuestion index={index}
        selected={selectedList[index]}
        setSelected={setSelectedButton}
        key={index}
        questionText={shortQuestionList[index].question}
        questionTrait={shortQuestionList[index].trait} 
        questionScore={shortQuestionList[index].score}  />);
    
    });


    const shuffle = (array) => {
      let currentIndex = array.length, randomIndex;
    
      // While there remain elements to shuffle.
      while (currentIndex > 0) {
    
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
    
      return array;
    }




  



  return (
    <div className="test">

      <div className="heading"> Medium test</div>





       {renderDevTools( showDevTools, ope, con, ext, agr, sta, opePercentile, conPercentile, extPercentile, agrPercentile, staPercentile, opeText, conText, extText, staText, agrText, calculateResults
        )}



  


      <div className="test-questions">
      <div className="test-top"> Part {progress} of 5</div>
      { questionList.slice(questionDisplayMin,questionDisplayMax) }




      <div className="test-bottom">

        {progress > 1 ?
          <button className="button secondary" onClick={()=>{
            calculateResults();
            minusProgress();
            window.scrollTo(0,0)
          }}> Previous </button>
          : //invisible for styling reasons
          <button style = {{visibility: 'hidden'}} className = "button secondary"> Previous</button>
        }

        <div className="test-bottom-text"> Part {progress} of 5</div>

        {progress < 5 ?
          <button
            className="button secondary"
            onClick={() => {
              calculateResults();
              addProgress();
                window.scrollTo(0,0)
            }}>
            Next
          </button>

          : <Link to="/results"><button onClick = {()=>{
            calculateResults();
          }} className="button secondary" > Finish </button> </Link>
        }

      </div>

      </div>

    </div>
  );
}


const renderDevTools = ( showDevTools, ope, con, ext, agr, sta, opePercentile, conPercentile, extPercentile, agrPercentile, staPercentile, opeText, conText, extText, staText, agrText, calculateResults ) => {

  if(showDevTools == true){

    return(
      <>
      <div className="center"> O: {ope} C:{con} E:{ext} A:{agr} S:{sta} </div>  
      <div className="center"> Results: Openness percentile: {opePercentile} Concienciousness percentile: {conPercentile}
       Extraversion percentile: {extPercentile} Agreeableness percentile {agrPercentile} Emotional stability percentile: {staPercentile} </div>

       <div className="center"> {opeText},{conText},{extText},{staText},{agrText}  </div>

             
       <h3><button onClick = {calculateResults}> update ( for testing ) </button></h3>
       </>
    )
  }
    else{
      return(<> </>);
    }

  

}

export default Test;
