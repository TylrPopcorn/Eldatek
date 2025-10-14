import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => navigate("/"), 1000);
  };

  const handleClick = (e, id) => {
    e.preventDefault();

    // If we're not on the homepage, navigate first
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      // Wait for navigation to finish before scrolling
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 300);
      return;
    }

    // If we're already home, just scroll
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="Footer">
      <div className="WRAPPER">
        <div className="content row">
          <div className="item logo col">
            <div className="logo-icon"></div>
          </div>

          <div className="item socials col">
            <div className="header-section">
              <h6 className="header">SOCIALS</h6>
            </div>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="instagram"></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="facebook"></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="linkedin"></a>
          </div>

          <div className="item links col">
            <div className="header-section">
              <h6 className="header">QUICK LINKS</h6>
            </div>
            <a href="/" onClick={(e) => handleClick(e, "top")}>Home</a>
            <a href="/#about" onClick={(e) => handleClick(e, "About")}>About</a>
            <a href="/#services" onClick={(e) => handleClick(e, "Services")}>Services</a>
            <a href="/#contact" onClick={(e) => handleClick(e, "Contact")}>IT Health Check</a>
          </div>

          <div className="item contact col">
            <div className="header-section">
              <h6 className="header">CONTACT</h6>
            </div>
            <p className="email">support@eldatek.com</p>
            <p className="phone">(XXX) XXX-XXXX</p>
          </div>

          <div className="item subscribe col">
            <div className="header-section">
              <h6 className="header">STAY UP TO DATE</h6>
            </div>
            <p>Subscribe to our newsletter.</p>
            <div className="inputBox">
              <form className="email-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <button className="arrow" type="submit"></button>
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
