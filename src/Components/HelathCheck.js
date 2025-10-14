import React from "react";

//components:
import Navbar from "./Navbar";
import Footer from "./Footer";

//CONTACT US
function HealthCheck() {
  //
  //
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      window.location.pathname = "/";
    }, 1000);
  };
  //
  //
  return (
    <div className="HealthCheck">
      <Navbar />

      {/** --------- */}
      <div className="Content">
        <div className="header-section">
          <div className="WRAPPER">
            <h1 className="header">
              Get Your
              <br />
              <span className="Colored">Free IT Health Check</span>
            </h1>
            <p className="sub-header">
              <span className="Colored">Identify</span> risks,{" "}
              <span className="Colored">secure</span> your data,{" "}
              <span className="Colored">and optimize</span> your workflows.
            </p>
          </div>
        </div>

        <div className="content-section">
          <div className="WRAPPER">
            <div className="section1 row">
              {/**---------------**/}
              <div className="item col">
                <div className="dots">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
                <div className="img img1">
                  <h5 className="header">Identify Vulnerabilities</h5>
                </div>
                <div className="Line"></div>
                <p className="Description">
                  We analyze your current IT setup to find areas at risk for
                  data loss or inefficiency.
                </p>
              </div>

              {/**---------------**/}
              <div className="item col">
                <div className="dots">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
                <div className="img img2">
                  <h5 className="header">Custom Recommendations</h5>
                </div>
                <div className="Line"></div>
                <p className="Description">
                  Get a tailored IT strategy to improve productivity and protect
                  your business.
                </p>
              </div>
            </div>

            <div className="section2">
              <div className="header-section">
                <h1 className="header">
                  Schedule My Free
                  <br />
                  <span className="Colored">IT Health Check</span>
                </h1>
              </div>

              <div className="formWrapper">
                <form  method="POST" onSubmit={handleFormSubmit}>
                  <label className="Name">Name:</label>
                  <input
                    placeholder="Full Name"
                    name="name"
                    type="text"
                    required
                  />

                  <label htmlFor="email" className="Email">
                    Email:
                  </label>
                  <input
                    id="email"
                    placeholder="Email"
                    name="email"
                    type="email"
                    required
                  />

                  <label className="Phone">Phone:</label>
                  <input
                    placeholder="Phone Number"
                    name="phone"
                    type="tel"
                    required
                  />

                  <label className="companyName">Company Name:</label>
                  <input
                    placeholder="Company Name"
                    name="companyName"
                    type="text"
                    required
                  />

                  <label className="numbUsers">Number of Users:</label>
                  <input
                    placeholder="Number of Users"
                    name="numbUsers"
                    type="number"
                    required
                  />

                  <label className="IT_Challenges">IT Challenges:</label>
                  <textarea
                    placeholder="Explain your IT challenges"
                    name="itChallenges"
                    required
                  ></textarea>

                  <div className="buttonWrapper">
                    <button type="submit" onClick={handleFormSubmit}>Schedule</button>
                  </div>
                </form>
              </div>

              <div className="bottom-dots">
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
        </div>
      </div>
      {/** --------- */}

      <Footer />
    </div>
  );
}

export default HealthCheck;






