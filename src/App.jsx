import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Faq from './components/Faq/Faq'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import SimpleAbout from './components/SimpleAbout/SimpleAbout'
import Glimpses from './components/Glimpses/Glimpses'
import BackgroundMesh from './components/BackgroundMesh/BackgroundMesh'
import Stat from './components/Stat/Stat'
import GetTicket from './components/GetTicket/GetTicket'
import Focus from './components/Focus/Focus'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Stat />
      <SimpleAbout />
      <GetTicket/>
      <Focus/>
      <Faq />
      <Footer />
    </>
  )
}

export default App
