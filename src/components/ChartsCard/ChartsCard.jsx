import React from 'react'
import "./ChartsCard.css"
import { useState } from 'react'

import { TopchartsData } from "../../constants/data"
import Heart from "../../assets/chart-heart.svg"

const ChartsCard = () => {
  const [TopCharts, setTopCharts] = useState(TopchartsData)

  const cards = TopCharts.map(card => {
    return (
        <div className="charts-card" key={card.song}>
            <div className="left">
                <img src={card.thumbnail} alt="" />
                <div className="card-contents">
                    <h3>{card.song}</h3>
                    <p className="artist">{card.artist}</p>
                    <p className="time">{card.time}</p>
                </div>
            </div>
            <div className="like-icon"><img src={Heart} alt="" /></div>
        </div>
    )
  })

  return (
    <React.Fragment>
        { cards }
    </React.Fragment>
  )
}

export default ChartsCard