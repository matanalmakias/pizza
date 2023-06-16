import { Link } from "react-router-dom";
import React from "react";
import { content } from "../../../utils/content/content";

export default function Hero4({ helperCls }) {
  const { btn, heroText, imgUrl, priceBadge } = content.hero4;
  return (
    <>
      <section
        id="hero-4"
        className={`bg-fixed hero-section division ${
          helperCls ? helperCls : ""
        }`}
      >
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-7">
              <div className="hero-4-img text-center">
                <img className="img-fluid" src={imgUrl} alt="hero-image" />
                <div className="price-badge-md bg-fixed 1white-color">
                  <div className="badge-txt">
                    <h4 className="h4-xs">{priceBadge.text}</h4>
                    <h3 className="h3-lg">&#8362;{priceBadge.price}</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="hero-4-txt text-center white-color">
                <h2>{heroText.title}</h2>
                <h3>{heroText.subTitle}</h3>
                <p className="p-md">{heroText.text}</p>
                <Link
                  to={btn.link}
                  className="btn btn-md btn-yellow tra-white-hover"
                >
                  {btn.text}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
