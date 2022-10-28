import React from 'react'
import "./Card.css"

const Card = ({ song, artist, thumbnail }) => {
  return (
    <div className="card">
        <img src={thumbnail} alt="" className='card__thumbnail' />
        <p>{song}</p>
        <p>{artist}</p>
    </div>
  )
}

export default Card