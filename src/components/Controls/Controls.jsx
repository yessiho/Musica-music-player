import React from 'react'
import "./Controls.css"

import Shuffle from "../../assets/controls/shuffle.svg"
import Next from "../../assets/controls/next.svg"
import Play from "../../assets/controls/play.svg"
import Previous from "../../assets/controls/previous.svg"
import Repeat from "../../assets/controls/repeat.svg"

const Controls = ({ play }) => {
  return (
    <div className="controls">
        <button className="shuffle">
            <img src={Shuffle} alt="" />
        </button>
        <div className="main-buttons">
            <button className="prev">
                <img src={Previous} alt="" />
            </button>
            <button className="play" onClick={play}>
                <img src={Play} alt="" />
            </button>
            <button className="next">
                <img src={Next} alt="" />
            </button>
        </div>
        <button className="repeat">
            <img src={Repeat} alt="" />
        </button>
    </div>
  )
}

export default Controls