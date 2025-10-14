import React, { useState, useContext, useEffect } from "react";

//components:
import Navbar from "./Navbar";
import Footer from "./Footer";

import { MyContext } from "../state/Context"; //context

//HOMEPAGE:
function Homepage() {
  //------vars:
  const context = useContext(MyContext);
  const { Dispatch } = context;

  const [img, setImg] = useState(1);

  useEffect(() => {
    Dispatch({ navbar: 1 });
  }, []);

  return (
    <div className="Homepage">
      <Navbar />
      {/** --------- */}

      {/** HERO SECTION */}
      <div className="Hero-Section">
        <div className="WRAPPER">
          <div className="img">
            <div className="content">
              <h1 className="Header-Text">
                <span className="colored">IT Solutions</span> That Work{" "}
                <br></br>
                as Hard as You Do
              </h1>
              <p className="sub-text">
                Affordable, reliable, and tailored for contractors and small
                businesses.
              </p>
              <a href="/about">
                <button>Learn More</button>
              </a>
            </div>
            <div class="container content-2">
              <div class="arrow" alt=""></div>
            </div>
          </div>
        </div>
      </div>

      {/** SERVICES SECTION */}
      <div className="Services-Section">
        <div className="WRAPPER">
          <div className="header-section">
            <h1 className="header">
              Core<br></br>
              <span className="Colored">Services</span>
            </h1>
            <p className="sub-header">
              Empowering Small Businesses with Reliable IT Solutions
            </p>
          </div>
          <div className="top-dots">
            <div className="dots">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <div className="dots">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
          <div className="Content row">
            {/**---------------**/}
            <div className="item col">
              <div className="img img1">
                <h1 className="header">Data Backup & Recovery</h1>
              </div>
              <div className="Line"></div>
              <p className="Description">
                Automate your backups to prevent data loss and ensure quick
                recovery. Whether it's hardward failure or a cyberattack,
                Eldatek ensures your files are safe and accessible.
              </p>
            </div>
            {/**---------------**/}
            <div className="item col">
              <div className="img img2">
                <h1 className="header">SharePoint Solutions</h1>
              </div>
              <div className="Line"></div>
              <p className="Description">
                Collaborate better with SharePoint. From custom workflows to
                document management, our solutions are tailored to streamline
                your operations.
              </p>
            </div>
            {/**---------------**/}
            <div className="item col">
              <div className="img img3">
                <h1 className="header">24/7 Helpdesk Support</h1>
              </div>
              <div className="Line"></div>
              <p className="Description">
                Resolve IT issues fast with our around-the-clock helpdesk. Our
                experts are always available to keep your business running
                smoothly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/** WHY US SECTION */}
      <div className="WhyUs-Section">
        <div className="WRAPPER">
          <div className="header-section">
            <h1 className="header">
              <span className="Colored">Why</span>
              <br></br>Choose <span className="Colored">Us</span>
            </h1>
            <p className="sub-header">
              Why Contractors and Small Businesses Choose Us
            </p>
          </div>
          <div className="Content row">
            {/*--------------------------------*/}
            <div className="item text-content col">
              {/*------*/}
              <div
                className={`feature-item ${img === 1 ? "active" : ""}`}
                data-image="img1"
                onMouseEnter={() => setImg(1)}
              >
                <h3 className="header">
                  <span>#1</span> Affordable Plans
                </h3>
                <p className="sub">Starting at just $150 per user per month.</p>
              </div>
              {/*------*/}
              <div
                className={`feature-item ${img === 2 ? "active" : ""}`}
                onMouseEnter={() => setImg(2)}
                data-image="img2"
              >
                <h3 className="header">
                  <span>#2</span> Proven Expertise
                </h3>
                <p className="sub">
                  Powered by industry-leading tools like Barracuda and
                  Microsoft.
                </p>
              </div>
              {/*------*/}
              <div
                className={`feature-item ${img === 3 ? "active" : ""}`}
                data-image="img3"
                onMouseEnter={() => setImg(3)}
              >
                <h3 className="header">
                  <span>#3</span> Custom Solutions
                </h3>
                <p className="sub">
                  We design IT strategies that fit your specific needsm no
                  matter the size of your team.
                </p>
              </div>
            </div>
            {/*--------------------------------*/}
            <div className="item images col">
              <div
                className={`img1 ${img === 1 ? "active" : ""} us-img`}
                alt="Image1"
              ></div>
              <div
                className={`img2 ${img === 2 ? "active" : ""} us-img`}
                alt="Image2"
              ></div>
              <div
                className={`img3 ${img === 3 ? "active" : ""} us-img`}
                alt="Image3"
              ></div>
            </div>
          </div>
          <div className="bottom-dots">
            <div className="dots">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        </div>
      </div>

      {/** TESTIMONIALS SECTION */}
      <div className="Testimonials-Section">
        <div className="WRAPPER">
          <div className="header-section">
            <h1 className="header Colored">Testimonials</h1>
            <p className="sub-header">What Our Clients Are Saying</p>
          </div>
          <div className="Content row">
            {/*--------------------------------*/}
            <div className="item col">
              <div className="box">
                <div className="stars">
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                </div>
                <p className="description">
                  "Eldatek transformed the way we manage data. Their backup
                  solutions have saved us from costly downtime."
                </p>
              </div>
              <div className="author">
                <h2 className="name">Sarah T.</h2>
                <p className="title">Real Estate Proffesional</p>
              </div>
            </div>
            {/*--------------------------------*/}
            <div className="item col">
              <div className="box">
                <div className="stars">
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                </div>
                <p className="description">
                  "Their helpdesk is always responsive. It's like having an IT
                  department without the overhead."
                </p>
              </div>
              <div className="author">
                <h2 className="name">John D.</h2>
                <p className="title">Construction Business Owner</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/** CTA SECTION */}
      <div className="CTA-Section">
        <div className="WRAPPER">
          <div className="img">
            <div className="text-content">
              <h1 className="header">
                <span className="Colored">Secure</span> Your Business <br></br>
                Today
              </h1>
              <div className="buttons">
                <a href="/contact">
                  <button className="quote">Get a Custom Quote</button>
                </a>
                <a href="/contact">
                  <button className="schedule">
                    Schedule a FREE IT Health Check
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/** --------- */}
      <Footer />
    </div>
  );
}

export default Homepage;
