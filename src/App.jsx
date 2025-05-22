import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import CreativeChallenges from './components/CreativeChallenges'
import PortalFeatures from './components/PortalFeatures'
import CallToAction from './components/CallToAction'
import Navbar from './components/Navbar'
import CommunitySection from './components/CommunitySection'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CreativeChallenges />
        <PortalFeatures />
        <CallToAction />
        <CommunitySection />
      </main>
      <footer className="main-footer">
        <div className="container">
          <p>Portal © 2025</p>
        </div>
      </footer>
    </>
  )
}

export default App
