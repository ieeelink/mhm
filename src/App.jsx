
import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'


import Pages from './Pgaes.jsx';
import Posters from './components/Posters/Posters.jsx';


function App() {

  return (
    <>
    <Router>
     
      <Routes>
      <Route path="/" element={<Pages />} exact />
          <Route path="/poster" element={<Posters />} exact />
          
        </Routes>
      </Router>
      
    </>
  )
}

export default App;