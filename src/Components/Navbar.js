import React, { useContext } from "react";
import { MyContext } from "../state/Context"; //context

function Navbar() {
  const context = useContext(MyContext);
  const data = context.data;
  const navbar = data.navbar;

  return (
    <nav className="navbar navbar-expand-lg fixed-top" id="Home">
      <div className="content container-fluid WRAPPER">
        <a className="navbar-brand" href="/">
          <div className="logo-img"></div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className={`nav-link ${navbar === 1 ? "active" : ""}`}
                href="/"
              >
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${navbar === 2 ? "active" : ""}`}
                href="/#about"
              >
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${navbar === 3 ? "active" : ""}`}
                href="/#services"
              >
                SERVICES
              </a>
            </li>
          </ul>
          <a href="/#contact" className="btn btn-health-check">
            Schedule a Free IT Health Check
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

