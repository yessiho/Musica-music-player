import React from 'react'
import "./ProgressBar.css"

const ProgressBar = () => {
  return (
    <div className="music-progress-bar">
        <div className="music-progress">
            <div className="circle">
                <div className="small-circle"></div>
            </div>
        </div>
    </div>
  )
}

export default ProgressBar