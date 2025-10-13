import React, { useContext, useEffect } from "react";
//components:
import Navbar from "./Navbar";
import Footer from "./Footer";

import { MyContext } from "../state/Context"; //context

//SERVICES
function Services() {
  const context = useContext(MyContext);
  const { Dispatch } = context;

  useEffect(() => {
    Dispatch({ navbar: 3 });
  }, []);

  return (
    <div className="Services">
      <Navbar />
      {/** --------- */}

      <div className="Content">
        <div className="header-section">
          <div className="WRAPPER">
            <h1 className="header">Services</h1>
            <p className="sub-header">
              IT Solutions Built for{" "}
              <span className="Colored">Your Business</span>
            </p>
          </div>
        </div>

        <div className="services-section">
          <div className="WRAPPER">
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
            {/*------------------*/}
            <div className="service-item">
              <div className="img-wrapper">
                <div className="img img1"></div>
              </div>
              <div className="text-content">
                <div className="section-1">
                  <h4 className="header">Data Backup & Recovery</h4>
                  <p className="description">
                    Protect your business-critical files with automated backups
                    and quick recovery options. Eldatek provides secure,
                    encrypted storage for all your data, ensuring peace of mind
                    no matter what happens.
                  </p>
                </div>
                <div className="section-2">
                  <div className="pros">
                    <div className="item">
                      <span>&bull;</span> Automatic backups to prevent data
                      loss.
                    </div>
                    <div className="item">
                      <span>&bull; </span> Fast recovery solutions to minimize
                      downtime.
                    </div>
                    <div className="item">
                      <span>&bull; </span> Encrypted storage for security
                      compliance.
                    </div>
                  </div>
                  <a href="#price">
                    <button className="pricing">Pricing</button>
                  </a>
                </div>
              </div>
            </div>
            {/*------------------*/}
            <div className="service-item">
              <div className="img-wrapper">
                <div className="img img2"></div>
              </div>
              <div className="text-content">
                <div className="section-1">
                  <h4 className="header">Sharepoint Solutions</h4>
                  <p className="description">
                    Streamline collaboration and workflows with SharePoint
                    tailored to your business. Our solutions help you organize
                    documents, automate repetitive tasks, and keep your team
                    connected.
                  </p>
                </div>
                <div className="section-2">
                  <div className="pros">
                    <div className="item">
                      <span>&bull;</span> Custom workflows for approvals and
                      tasks.
                    </div>
                    <div className="item">
                      <span>&bull; </span> Mobile access for remote teams.
                    </div>
                    <div className="item">
                      <span>&bull; </span> Secure document sharing.
                    </div>
                  </div>
                  <a href="#price">
                    <button className="pricing">Pricing</button>
                  </a>
                </div>
              </div>
            </div>
            {/*------------------*/}
            <div className="service-item">
              <div className="img-wrapper">
                <div className="img img3"></div>
              </div>
              <div className="text-content">
                <div className="section-1">
                  <h4 className="header">24/7 Helpdesk Support</h4>
                  <p className="description">
                    Resolve IT issues quickly with Eldatek’s round-the-clock
                    support. From troubleshooting to critical system failures,
                    our team is always available to help.
                  </p>
                </div>
                <div className="section-2">
                  <div className="pros">
                    <div className="item">
                      <span>&bull;</span> 24/7 expert assistance.
                    </div>
                    <div className="item">
                      <span>&bull; </span> Quick ticket resolution times.
                    </div>
                    <div className="item">
                      <span>&bull; </span> Proactive monitoring and support.
                    </div>
                  </div>
                  <a href="#price">
                    <button className="pricing">Pricing</button>
                  </a>
                </div>
              </div>
              {/*------------------*/}
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
          </div>
        </div>

        <div className="pricing-section" id="price">
          <div className="WRAPPER">
            <h1 className="header">
              <span className="Colored">Pricing</span> Plan
            </h1>

            <div className="pricing-table row">
              {/*--------------------------------*/}
              <div className="item col">
                <div className="heading-section">
                  <h3 className="header">Small Teams</h3>
                  <p className="desc">3 users</p>
                </div>
                <div className="button-section">
                  <a href="/contact">
                    <button>$450/month</button>
                  </a>
                </div>
              </div>
              {/*--------------------------------*/}
              <div className="item bigger2 col">
                <div className="heading-section">
                  <h3 className="header">Larger Teams</h3>
                  <p className="desc">10 users</p>
                </div>
                <div className="button-section">
                  <a href="/contact">
                    <button className="white">$1,500/month</button>
                  </a>
                </div>
              </div>
              {/*--------------------------------*/}
              <div className="item col">
                <div className="heading-section">
                  <h3 className="header">Growing Businesses</h3>
                  <p className="desc">5 users</p>
                </div>
                <div className="button-section">
                  <a href="/contact">
                    <button>$750/month</button>
                  </a>
                </div>
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

export default Services;
