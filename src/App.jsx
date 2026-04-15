import React, { useState } from 'react'
import './app.scss'
import Dock from './components/Dock/Dock'
import Nav from './components/Navbar/Nav'
import Github from './components/windows/GithubWindow/Github'
import Note from './components/windows/NoteWindow/Note'
import Resume from './components/windows/ResumeWindow/Resume'
import Spotify from './components/windows/SpotifyWindow/Spotify'
import Cli from './components/windows/CliWindow/Cli'



function App() {
  return (
    <main>
      <Nav />
      <Dock />
      <Github />
      <Note />
      <Resume />
      <Spotify />
      <Cli />
    </main>
  )
}

export default App