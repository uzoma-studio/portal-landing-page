import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import PortalDemo from './components/PortalDemo'
import Features from './components/Features'
import UseCases from './components/UseCases'
import CallToAction from './components/CallToAction'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <PortalDemo />
        <Features />
        <UseCases />
        <CallToAction />
      </main>
    </>
  )
}

export default App
