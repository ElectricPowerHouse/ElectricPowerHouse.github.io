import logo from './logo.svg';
import './App.css';
import './style.scss';
import Button from '@mui/material/Button';
import Navbar from './navbar.js';
import Footer from './footer.js';
import React, { useState } from 'react';
import Home from './pages/home.js';
import TimeSelect from './pages/time-select.js';
import PreTest from './pages/pre-test.js';
import Results from './pages/results.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Link, useNavigate} from 'react-router-dom';
import Test from './pages/test.js'

function App() {

  const [pageStep, setPageStep] = useState(0);


  const [opeScore, setOpeScore] = useState(4);
  const [conScore, setConScore] = useState(4);
  const [extScore, setExtScore] = useState(4);
  const [agrScore, setAgrScore] = useState(4);
  const [staScore, setStaScore] = useState(4);


  return (
    <BrowserRouter>
    <div className="App">
    
      <Navbar />
        
      <div className="body">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/time-select" element={<TimeSelect/>}/>
          <Route path="/pre-test" element={<PreTest/>}/>
          <Route path="/test" element={<Test opeScore = {opeScore} setOpeScore={setOpeScore}
           conScore = {conScore} setConScore={setConScore} extScore = {extScore} setExtScore = {setExtScore}
            agrScore = {agrScore} setAgrScore = {setAgrScore} staScore = {staScore} setStaScore={setStaScore}/>}/>
          <Route path="/results" element={<Results opeScore = {opeScore} conScore = {conScore} extScore = {extScore} agrScore = {agrScore} 
          staScore = {staScore} />}/>
        
        </Routes>
      </div>


    <Footer />

       
      
    </div>

    </BrowserRouter>
  );
}

export default App;
