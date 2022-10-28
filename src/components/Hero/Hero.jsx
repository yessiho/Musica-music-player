import React from 'react'
import "./Hero.css"

import HeroImg from "../../assets/hero-img.png"
import Bgvector from "../../assets/hero-bg-vector.svg"

import Avatar1 from "../../assets/Ellipse 2.svg"
import Avatar2 from "../../assets/Ellipse 3.svg"
import Avatar3 from "../../assets/Ellipse 4.svg"
import Avatar4 from "../../assets/Ellipse 5.svg"
import Avatar5 from "../../assets/Ellipse 6.svg"
import Like from "../../assets/like.svg"

const Hero = () => {
  return (
    <header className="hero"
        style={{
            backgroundImage: `url(${HeroImg}), url(${Bgvector})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
        }}
    >
       <div className="hero-content">
          <p className='currated-playlist'>Currated playlist</p>
          <div className="hero-header">
            <h1>R & B Hits</h1>
            <p>All mine, Lie again, Petty call me everyday,
                Out of time, No love, Bad habit,
                and so much more
            </p>
          </div>
          <div className="likes">
            <div className="avatars">
                <img src={Avatar1} />
                <img src={Avatar2} />
                <img src={Avatar3} />
                <img src={Avatar4} />
                <img src={Avatar5} />
            </div>
            <img src={Like} alt="" />
            <p>33K Likes</p>
          </div>
       </div>
    </header>
  )
}

export default Hero