import React from 'react'
import "./Volume.css"

import VolumeIcon from "../../assets/controls/volume-high.svg"

const Volume = () => {
  return (
    <div className="volume">
        <img src={VolumeIcon} alt="" />
        <div className="progress-bar">
            <div className="progress"></div>
        </div>
    </div>
  )
}

export default Volume