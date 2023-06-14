import { content } from "@/utils/content/content";
import { Link } from "react-router-dom";
import React from "react";

export default function About1({ helperCls }) {
  const { callToAction, subTitle, iconList, text, title, backgroundImg } =
    content.about1;
  return (
    <>
      <section
        style={{ backgroundImage: `url(${backgroundImg})` }}
        className={`bg-fixed wide-100 about-section division ${
          helperCls ? helperCls : ""
        }`}
      >
        <div className="container">
          <div className="row">
            {/* ABOUT TEXT */}
            <div className="col-xl-10 offset-xl-1">
              <div className="about-1-txt text-center">
                {/* Title */}
                <h2>
                  <span className="yellow-color">{title}</span> {subTitle}
                </h2>
                {/* Text */}
                <p className="p-xl grey-color">{text}</p>
                {/* Icons List */}
                <div className="abox-1-wrapper ico-75">
                  <div className="row">
                    {/* ABOUT BOX #1 */}

                    {iconList?.map((item, index) => {
                      return (
                        <div key={index} className="col-sm-4 col-md-2">
                          <div className="abox-1 mb-40">
                            {/* Icon */}
                            <div className="abox-1-ico grey-color">
                              <span className={item.iconClass} />
                            </div>
                            {/* Text */}
                            <h6 className="h6-xl">{item.text}</h6>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>{" "}
                {/* End Icons List */}
                {/* Button */}
                <Link
                  href={callToAction.link}
                  className="btn btn-md btn-red tra-red-hover"
                >
                  {callToAction.text}
                </Link>
              </div>
            </div>{" "}
            {/* END ABOUT TEXT */}
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>
    </>
  );
}
