import React from "react";
import "../CSS/footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function footer() {
  return (
    <>
      <div className="container footer-bg">
        <div className="footer">
          <div className="footer-1st">
            <div className="quick-links">
              <h1>Quick links</h1>
              <h5>Home</h5>
              <h5>Course</h5>
              <h5>About Us</h5>
              <h5>Contact Us</h5>
            </div>
            <div className="social-media">
              <h1>Social Media</h1>
              <FaFacebook className="footer-icon" />
              <FaInstagram className="footer-icon" />
            </div>
          </div>
          <hr className="rule" />
          <div className="footer-2nd">
            <h6>Copyright © 2024 trainingnet.com</h6>
          </div>
        </div>
      </div>
    </>
  );
}
