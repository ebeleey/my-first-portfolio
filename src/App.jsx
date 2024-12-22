import { useState } from 'react'

import './App.css'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Education from './components/Education'

function App() {

  return (
    <>
      <Profile />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      
    </>
  )
}

export default App
