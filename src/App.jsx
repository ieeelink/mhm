import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Faq from './components/Faq/Faq'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Glimpses from './components/Glimpses/Glimpses'
import BackgroundMesh from './components/BackgroundMesh/BackgroundMesh'
import Stat from './components/Stat/Stat'
import GetTicket from './GetTicket/GetTicket'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Stat />
      <About />
      <GetTicket/>
      <Faq />
      <Footer />
    </>
  )
}

export default App
