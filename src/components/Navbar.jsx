import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo-search-container">
        {/* Logo */}
        <a href="#" className="navbar-logo">
            <span>
                <img src="/avatar_small.png" alt="" />
            </span>
        </a>

        {/* Search Bar */}
        <div className="navbar-search">
            <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 10a7 7 0 1 0-14 0 7 7 0 0 0 14 0z" />
            </svg>
            <input type="text" placeholder="What would you like to cook?" />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="navbar-links">
        <a href="#">What to cook</a>
        <a href="#">Recipes</a>
        <a href="#">Ingredients</a>
        <a href="#">Occasions</a>
        <a href="#">About Us</a>
      </div>

      {/* Recipe Box Button & Profile Picture */}
      <div className="navbar-actions">
        <button className="recipe-box-btn">
            <img src="/archive_check.png" alt="" />
            <span>Your Recipe Box</span>
        </button>
        <a href="#" className="navbar-profile">
          <img src="/avatar.png" alt="Profile" />
        </a>
      </div>
    </nav>
  );
}
