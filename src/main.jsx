import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import AOS from "aos";
import "aos/dist/aos.css";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { BrowserRouter } from "react-router-dom";

AOS.init({
  duration: 1000,
  once: true,
});

// Lenis Smooth Scroll
const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true,
  touchMultiplier: 2,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);