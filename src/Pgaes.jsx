import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Faq from './components/Faq/Faq'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'

import SimpleAbout from './components/SimpleAbout/SimpleAbout'

import Stat from './components/Stat/Stat'
import GetTicket from './components/GetTicket/GetTicket'
import Focus from './components/Focus/Focus'
import Schedule from './components/Schedule/Schedule';


function Pages() {

  return (
    <>
  
      <Navbar />
      <Hero />
      <Stat />
      <SimpleAbout />
      <Schedule/>
      <GetTicket/>
      <Focus/>
      <Faq />
      <Footer />
      
      
    </>
  )
}

export default Pages;
