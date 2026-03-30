import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">BSF-Nutrifeed</h1>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className={isOpen ? "bar rotate1" : "bar"}></span>
          <span className={isOpen ? "bar fade" : "bar"}></span>
          <span className={isOpen ? "bar rotate2" : "bar"}></span>
        </div>

        <ul className={isOpen ? "nav-links open" : "nav-links"}>
          <li><NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink></li>
          <li><NavLink to="/dashboard" className={({isActive}) => isActive ? "active" : ""}>Dashboard</NavLink></li>
          <li>
            <NavLink to="/login" className="login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signup" id="get-started" className="btn btn-primary">Get Started</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;