import { content } from "../../../utils/content/content";
import { Link } from "react-router-dom";
import React from "react";

export default function Banner3({ helperCls }) {
  const { title, subTitle, text, imgUrl } = content.banner3;
  return (
    <>
      <section
        id="banner-3"
        className={`banner-section division ${helperCls ? helperCls : ""}`}
      >
        <div className="container">
          <div className="row d-flex align-items-center">
            {/* BANNER TEXT */}
            <div className="col-md-7 col-lg-6">
              <div className="banner-3-txt coffee-color">
                {/* Title  */}
                <h4 className="h4-xl">{subTitle}</h4>
                <h2>{title}</h2>
                {/* Text */}
                <p className="p-md">{text}</p>
                {/* Store Badges */}
                <div className="stores-badge"></div>
              </div>
            </div>
            {/* BANNER IMAGE */}
            <div className="col-md-5 col-lg-6">
              <div className="banner-3-img">
                <img className="img-fluid" src={imgUrl} alt="banner-image" />
              </div>
            </div>
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>
    </>
  );
}
