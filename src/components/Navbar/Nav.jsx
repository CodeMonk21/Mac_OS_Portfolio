import React from 'react'
import './nav.scss'
import DateTime from './DateTime'

function Nav() {
  return (
    <nav>
        <div className="left">
            <div className="apple-icon">
                <img src="./nav_icons/apple.svg" alt="" />
            </div>
            <div className="nav-item">
                <p>Jagrit Madaan</p>
            </div>
            <div className="nav-item">
                <p>File</p>
            </div>
            <div className="nav-item">
                <p>Window</p>
            </div>
            <div className="nav-item">
                <p>Terminal</p>
            </div>
        </div>
        <div className="right">
            <div className="nav-icon">
                <img src="./nav_icons/wifi.svg" alt="" />
            </div>
            <DateTime />
        </div>
    </nav>
  )
}

export default Nav