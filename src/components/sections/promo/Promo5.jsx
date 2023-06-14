import { content } from "../../../utils/content/content.js";
import { Link } from "react-router-dom";
import React from "react";

export default function Promo5({ helperCls }) {
  const { title, text, promoItems } = content.promo5;
  return (
    <>
      <section
        id="promo-5"
        className={`wide-100 promo-section division ${
          helperCls ? helperCls : ""
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="section-title mb-60 text-center">
                <h2 className="h2-xl red-color">{title}</h2>
                <p className="p-xl">{text}</p>
              </div>
            </div>
          </div>
          <div className="row d-flex align-items-center">
            {promoItems?.map((item) => (
              <div key={item._id} className="col-sm">
                <Link href="/product-single">
                  <div id="pb-5-2" className="pbox-5">
                    <div className="pbox-5-txt">
                      <h4 className="h4-xs coffee-color">{item.title}</h4>
                      <span className="item-code">Code: {item.code}</span>
                      <div className="pbox-5-img text-center mt-25">
                        <img
                          className="img-fluid"
                          src={item.imageUrl}
                          alt="promo-image"
                        />
                      </div>
                      <div className="pbox-5-price">
                        <p>
                          {item.medium.text} {` -  `}
                          <span className="red-color">
                            {"    "}
                            &#8362;{item.medium.price}
                          </span>
                        </p>
                        <p>
                          {item.large.text}
                          {"  - "}
                          <span className="red-color">
                            {"   "}
                            &#8362;{item.medium.price}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
