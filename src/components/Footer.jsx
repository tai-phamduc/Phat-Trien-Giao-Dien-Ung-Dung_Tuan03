import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section-bottom-container">
        {/* About Section */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
          <div className="footer-input-container">
            <input type="email" placeholder="Enter your email" />
            <button>Send</button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-logo">
            <span>
              <img src="/chefifywhite.png" alt="" />
            </span>
          </div>
          <p>© 2023 Chefify Company</p>
          <p>
            <a href="#" className="terms">Terms of Service</a> 
            <span> | </span> 
            <a href="#" className="terms">Privacy Policy</a>
          </p>
        </div>
      </div>

      <div>
        {/* Learn More Section */}
        <div className="footer-section">
          <h3>Learn More</h3>
          <ul className="footer-links">
            <li><a href="#">Our Cooks</a></li>
            <li><a href="#">See Our Features</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* Shop Section */}
        <div className="footer-section">
          <h3>Shop</h3>
          <ul className="footer-links">
            <li><a href="#">Gift Subscription</a></li>
            <li><a href="#">Send Us Feedback</a></li>
          </ul>
        </div>
      </div>

      {/* Recipes Section */}
      <div className="footer-section">
        <h3>Recipes</h3>
        <ul className="footer-links">
          <li><a href="#">What to Cook This Week</a></li>
          <li><a href="#">Pasta</a></li>
          <li><a href="#">Dinner</a></li>
          <li><a href="#">Healthy</a></li>
          <li><a href="#">Vegetarian</a></li>
          <li><a href="#">Vegan</a></li>
          <li><a href="#">Christmas</a></li>
        </ul>
      </div>

    </footer>
  );
}
