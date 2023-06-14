import { content } from "../../../utils/content/content";
import React from "react";

export default function About7({ helperCls }) {
  const { items } = content.about7;
  return (
    <>
      <section
        id="about-7"
        className={`about-section division ${helperCls ? helperCls : ""}`}
      >
        <div className="container">
          <div className="abox-4-wrapper ico-80">
            <div className="row">
              {items?.map((item, index) => {
                return (
                  <div key={index} className="col-md-4 col-lg-4">
                    <div className="abox-4 text-center mb-40">
                      {/* Icon */}
                      <div className="abox-4-ico">
                        <span className={item.icon} />
                      </div>
                      {/* Title */}
                      <h5 className="h5-lg">{item.title}</h5>
                      {/* Text */}
                      <p>{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>{" "}
            {/* End row */}
          </div>
        </div>{" "}
        {/* End container */}
      </section>
    </>
  );
}
