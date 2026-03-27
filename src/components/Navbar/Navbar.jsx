import { Link } from "react-router-dom";
import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='container'>
      <h1 className='logo'>
        BSF-Nutrifeed
      </h1>

      <div className='nav-links'>
        <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="HowItWorks">How it works</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/login">
          <button className="w-full sm:w-auto bg-green-600 text-white px-6 py-3 rounded-lg">Login</button>
        </Link></li>
       </ul>
      </div>

      <Link to="/signup">
              <button className="w-full sm:w-auto bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
                Get Started
              </button></Link>
    </nav>
  )
}

export default Navbar
