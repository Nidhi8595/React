import Logo from './Logo.webp'
const currYear = new Date().getFullYear();
import React from "react";
import "./Footer.css"; // Import CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={Logo} alt="Meal Haven Logo" className="circular-logo" />
        </div>
        <div className="footer-links">
          <h3>&copy; 2024 Meal Haven. All rights reserved.</h3>
        </div>
        <div className="footer-illustration">
          <p className="footer-tagline">"Meals made with love"</p>
          <div className="footer-messages">
            <span className="message">Enjoy the best!</span>
            <span className="message">Ready to serve you!</span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;