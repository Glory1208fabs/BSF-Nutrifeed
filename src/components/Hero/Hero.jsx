import React from 'react'
import { Link } from "react-router-dom";
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Welcome to BSF Nutrifeed</h1>
        <p>Discover the power of sustainable nutrition with our premium BSF Nutrifeed, crafted to nourish your livestock and promote a greener future.</p>
        <Link to="/login">
              <button className="w-full sm:w-auto border border-white-600 text-black px-6 py-3 rounded-lg hover:bg-green-50 transition">
                Learn More
              </button>
            </Link>
      </div>
    </div>
  )
}

export default Hero
