//dependencies
// npm install react
// npm install react-router-dom
// npm install --save-dev sass  <-- SCSS
// npm install concurrently --save-dev      <--allows running multiple scripts at once
// npm install bootstrap

import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
//----    ----    ----

//styles:
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; //Bootstrap JS
//
import "./Styles/global.css";

// How to start project ]:
// npm run start

// HOW TO CREATE REACT-APP ]:
// npx create-react-app {project-name}

//----    ----    ----

//components:
import Homepage from "./Components/Homepage";
import HelathCheck from "./Components/HelathCheck";
import Services from "./Components/Services";
import About from "./Components/About";

//--
import MyContextProvider from "./state/Context";
import Redirect from "./Components/Redirect";

//START:
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MyContextProvider>
    <HashRouter>
      <Routes>
        {/* ROUTES */}
        <Route path="/" element={<Homepage />} />

        <Route exact path="/contact" element={<HelathCheck />} />

        <Route exact path="/services" element={<Services />} />

        <Route exact path="/about" element={<About />} />

        {/* ----- Catch all unknown pages ----- */}
        <Route path="*" element={<Redirect />} />
        {/*----------------------------*/}
      </Routes>
        </HashRouter>
  </MyContextProvider>
);
