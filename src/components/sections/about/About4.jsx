import { content } from "@/utils/content/content";
import React from "react";

export default function About4({ helperCls }) {
  const { items } = content.about4;
  return (
    <>
      <section
        id="about-4"
        className={`wide-60 about-section division ${
          helperCls ? helperCls : ""
        }`}
      >
        <div className="container">
          <div className="row">
            {items?.map((item, index) => {
              let first;

              if (index % 2 !== 0) {
                first = false;
              } else {
                first = true;
              }

              return (
                <div
                  key={index}
                  className={first ? "col-md-7 col-lg-6" : "col-md-5 col-lg-6"}
                >
                  <div className="about-4-txt mb-40">
                    {!first && (
                      <img
                        className="img-fluid"
                        src={item.imgUrl}
                        alt="about-image"
                      />
                    )}
                    <h2 className="h2-sm">{item.title}</h2>
                    <p className="p-md grey-color">{item.text}</p>
                    {first && (
                      <img
                        className="img-fluid"
                        src={item.imgUrl}
                        alt="about-image"
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          {/* End row */}
        </div>
        {/* End container */}
      </section>
    </>
  );
}
