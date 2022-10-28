import React from 'react'
import "./MusicPlayer.css"

import Blur from "../../assets/blur.svg"
import Cover from "../../assets/covers/Rectangle 21.png"
import Controls from '../Controls/Controls'
import Volume from '../Volume/Volume'
import ProgressBar from '../ProgressBar/ProgressBar'

const MusicPlayer = () => {
  let audio = new Audio("/audio/ashawo.mp3")

  const play = () => {
    audio.play()
    console.log("play")
  }

  return (
    <div className="music-player-wrapper" style={{
        backgroundImage: `url(${Blur})`
    }}>
        <div className="song">
          <img src={Cover} alt="" className='thumbnail' />
          <div className="description">
            <h3>Seasons in</h3>
            <p>James</p>
          </div>
        </div>
        <div className="center">
          <Controls play={play} />
          <ProgressBar />
        </div>
        <Volume />
    </div>
  )
}

export default MusicPlayer