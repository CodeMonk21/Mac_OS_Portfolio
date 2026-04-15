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
  const [windowState, setWindowState] = useState({
    github:false,
    note:false,
    resume:false,
    spotify:false,
    cli:false,
  })
  return (
    <main>
      <Nav setWindowState={setWindowState} />
      <Dock windowState={windowState} setWindowState={setWindowState} />
      {windowState.github && <Github windowName="github" setWindowState={setWindowState} />} 
      {windowState.note && <Note windowName="note" setWindowState={setWindowState} />}
      {windowState.resume && <Resume windowName="resume" setWindowState={setWindowState} />}
      {windowState.spotify && <Spotify windowName="spotify" setWindowState={setWindowState} />}
      {windowState.cli && <Cli windowName="cli" setWindowState={setWindowState} />}
    </main>
  )
}

export default App