import React, { useContext, useEffect } from "react";

//components:
import Navbar from "./Navbar";
import Footer from "./Footer";

import { MyContext } from "../state/Context"; //context

//ABOUT US
function ABOUT() {
  const context = useContext(MyContext);
  const { Dispatch } = context;

  useEffect(() => {
    Dispatch({ navbar: 2 });
  }, [Dispatch]);

  return (
    <div className="About">
      <Navbar />
      {/** --------- */}

      <div className="Content">
        <div className="header-section">
          <div className="WRAPPER">
            <h1 className="header">
              Meet Eldatek:<br></br>
              <span className="Colored">Your Trusted IT Partner.</span>
            </h1>
          </div>
        </div>

        <div className="content-section">
          <div className="WRAPPER">
            <div className="section-1">
              <div className="top-dots">
                <div className="dots">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </div>
              <div className="IMG"></div>
              <p className="description">
                Our mission is to empower small businesses and contractors with
                reliable, affordable IT solutions tailored to their needs. From
                securing your data to optimizing your workflows, we help you
                focus on what you do best.
              </p>
            </div>

            <div className="section-2">
              <h1 className="header">
                What Drives <span className="Colored">Us</span>
              </h1>
              <div className="content">
                {/*--------------------------------*/}
                <div className="item">
                  <div className="back"></div>
                  <div className="item-content">
                    <div className="text-content">
                      <h3 className="header-item">Security</h3>
                      <p className="desc-item">
                        Protecting your data is our top priority.
                      </p>
                    </div>
                  </div>
                </div>
                {/*--------------------------------*/}
                <div className="item">
                  <div className="back"></div>
                  <div className="item-content">
                    <div className="text-content">
                      <h3 className="header-item">Reliability</h3>
                      <p className="desc-item">
                        Count on us to deliver solutions that work every time.
                      </p>
                    </div>
                  </div>
                </div>
                {/*--------------------------------*/}
                <div className="item">
                  <div className="back"></div>
                  <div className="item-content">
                    <div className="text-content">
                      <h3 className="header-item">Transparency</h3>
                      <p className="desc-item">
                        Clear pricing, no hidden fees, and solutions that match
                        your goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-3">
              <h1 className="header">
                How It <span className="Colored">Started</span>
              </h1>
              <p className="desc">
                Eldatek was founded to solve the IT challenges faced by small
                businesses. With over two years of experience and partnerships
                with industry leaders like Barracuda, we’ve built a reputation
                for delivering practical, scalable solutions.
              </p>
            </div>
            <div className="section-4">
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
              <div className="IMG"></div>
              <p className="desc">
                Let’s grow your business together. Contact us today to learn how
                Eldatek can help you thrive.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/** --------- */}
      <Footer />
    </div>
  );
}

export default ABOUT;


