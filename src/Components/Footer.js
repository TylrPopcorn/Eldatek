import React from "react";

function Footer() {
   //
  //
  const handleSubmit = () => {
    // Wait a bit so FormSubmit can open success page in new tab
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };
  //
  //
  
  const handleClick = (e, id) => {
  e.preventDefault(); // stop reload

  if (id === "Home") {
    // If Home, always go back to homepage
    if (window.location.hash === "/" || window.location.hash === "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.href = "/#/";
    }
    return;
  }

  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  } else {
    // fallback if not on homepage
    window.location.href = "/#/";
  }
};

  //--------
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
            <a href="/" className="home"  onClick={(e) => handleClick(e, "Home")}>
              Home
            </a>
            <a href="/#About" className="about"  onClick={(e) => handleClick(e, "About")}>
              About
            </a>
            <a href="/#Services" className="services"  onClick={(e) => handleClick(e, "Services")}>
              Services
            </a>
            <a href="/#Contact" className="IT-health-check"  onClick={(e) => handleClick(e, "Contact")}>
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
              <form class="email-form"  onSubmit={handleSubmit}>
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






