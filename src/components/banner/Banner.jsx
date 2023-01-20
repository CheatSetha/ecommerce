import React from 'react'
import './Banner.css'
import img from './../../img/3d.png'

const Banner = () => {
  return (
    <div>
        <div className="container max-w-screen-xl banner  mx-auto">
          <img src={img} alt="3dposter" className='poster absolute left-40'/>
          
          <h1 className='title'>  Lunar new year's promotion</h1>
          <h1 className='dc'>100% off</h1>
          
        </div>
    </div>
  )
}

export default Banner