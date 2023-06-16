import React from "react";
import App from "./App.jsx";
import "./index.css";
import "../public/assests/css/animate.min.css";
import "../public/assests/css/style.css";
import "../public/css/bootstrap.min.css";
import "../public/css/flaticon.css";
import "../public/css/menu.css";
import "../public/css/responsive.css";
import "../public/css/style.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>
);
