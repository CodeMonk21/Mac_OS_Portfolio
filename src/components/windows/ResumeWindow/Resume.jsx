import React from 'react'
import MacWindow from '../MacWindow/MacWindow'
import './resume.scss'

function Resume() {
  return (
    <MacWindow>
        <div className="resume-window">
            <embed src="./resume.pdf" className='resume' frameborder="0"></embed>
        </div>
    </MacWindow>
  )
}

export default Resume