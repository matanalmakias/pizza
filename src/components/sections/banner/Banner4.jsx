import { content } from "../../../utils/content/content";
import { Link } from "react-router-dom";
import React from "react";

export default function Banner4({ helperCls }) {
  const { title, subTitle, text, link } = content.banner4;
  return (
    <>
      <section
        id="banner-4"
        className={`bg-fixed wide-100 banner-section division ${
          helperCls ? helperCls : ""
        }`}
      >
        <div className="container">
          <div className="row">
            {/* BANNER TEXT */}
            <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
              <div className="banner-4-txt text-center">
                {/* Title  */}
                <h4 className="h4-xl">{subTitle}</h4>
                {/* Title  */}
                <h2>{title}</h2>
                {/* Text */}
                <p className="p-lg">{text}</p>
                {/* Call Button */}
                <Link
                  href={`tel:${link}`}
                  className="btn btn-lg btn-red tra-red-hover"
                >
                  חייגו: {link}
                </Link>
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
