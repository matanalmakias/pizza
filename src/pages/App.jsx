import "@/public/assests/css/animate.min.css";
import "@/public/assests/css/style.css";
import "@/public/css/bootstrap.min.css";
import "@/public/css/flaticon.css";
import "@/public/css/menu.css";
import "@/public/css/responsive.css";
import "@/public/css/style.css";
import "../node_modules/react-modal-video/css/modal-video.min.css";
import Home from "./Demo-5";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BrowserRouter } from "react-router-dom";
import React from "react";

export default function App({ Component, pageProps }) {
  return (
    <div dir="rtl">
      <Component {...pageProps} />
    </div>
  );
}
