import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="Footer">
      <div className="WRAPPER">
        <div className="content row">
          {/**-----------------**/}
          <div className="item logo col">
            <div className="logo-icon"></div>
          </div>
          <div className="item socials col">
            <div className="header-section">
              <h6 className="header">SOCIALS</h6>
            </div>
            <a href="" className="instagram"></a>
            <a href="" className="facebook"></a>
            <a href="" className="linkedin"></a>
          </div>
          {/**-----------------**/}
          <div className="item links col">
            <div className="header-section">
              <h6 className="header">QUICK LINKS</h6>
            </div>
            <Link to="/" className="home">
              Home
            </Link>
            <Link to="/#about" className="about">
              About
            </Link>
            <Link to="/#services" className="services">
              Services
            </Link>
            <Link to="/#contact" className="IT-health-check">
              IT Health Check
            </a>
          </div>
          {/**-----------------**/}
          <div className="item contact col">
            <div className="header-section">
              <h6 className="header">CONTACT</h6>
            </div>
            <p className="email">support@eldatek.com</p>
            <p className="phone">(XXX) XXX-XXXX</p>
          </div>
          {/**-----------------**/}
          <div className="item subscribe col">
            <div className="header-section">
              <h6 className="header">STAY UP TO DATE</h6>
            </div>
            <p>Subscribe to our newsletter.</p>
            <div className="inputBox">
              <form class="email-form">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <button className="arrow"></button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </footer>
  );
}

export default Footer;


