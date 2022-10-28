import React from 'react'
import Card from '../Card/Card'
import "./NewReleases.css"

import { New } from '../../constants/data'

const NewReleases = () => {
  return (
    <div className="new-releases">
        <h2>New releases.</h2>
        <div className="cards">
            { New.map(item => {
              return (
                <Card 
                  thumbnail={item.thumbnail}
                  song={item.song}
                  artist={item.artist}
                />
              )
            })
              }
        </div>
        <div className="cards">
            { New.map(item => {
              return (
                <Card 
                  thumbnail={item.thumbnail}
                  song={item.song}
                  artist={item.artist}
                />
              )
            })
              }
        </div>
    </div>
  )
}

export default NewReleases