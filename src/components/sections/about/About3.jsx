import { content } from "../../../utils/content/content";
import React from "react";

export default function About3({ icon, helperCls, newImg }) {
  const { title, text, items, notIcon } = content.about3;
  return (
    <>
      <section
        id="about-3"
        className={`wide-60 about-section division ${
          helperCls ? helperCls : ""
        }`}
      >
        <div className="container">
          <div className="row d-flex align-items-center">
            {/* ABOUT IMAGE */}
            <div className="col-md-5 col-lg-6">
              <div className="about-3-img text-center mb-40">
                <img
                  className="img-fluid"
                  src={notIcon.imgUrl}
                  alt="about-image"
                />
              </div>
            </div>
            {/* ABOUT TEXT */}
            <div className="col-md-7 col-lg-6">
              <div className="about-3-txt mb-40">
                {icon ? (
                  <>
                    {/* Title */}
                    <h2 className="h2-sm coffee-color">{title}</h2>
                    {/* Text */}
                    <p className="p-md grey-color">{text}</p>
                    {/* Icons List */}
                    <div className="abox-2-wrapper ico-70">
                      <div className="row text-center">
                        {items?.map((item, index) => (
                          <div key={item._id} className="col-sm-3">
                            <div className="abox-2">
                              {/* Icon */}
                              <div className="abox-2-ico grey-color">
                                <span className={item.icon} />
                              </div>
                              {/* Text */}
                              <h6 className="h6-lg">{item.text}</h6>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>{" "}
                    {/* End Icons List */}
                  </>
                ) : (
                  <>
                    {/* Title */}
                    <h2 className="h2-sm">{notIcon.title}</h2>
                    {/* Text */}
                    <p className="p-md">{notIcon.desc}</p>
                    {/* List */}
                    <ul className="txt-list">
                      {content.about3.notIcon.list?.map((item, index) => (
                        <li key={index} className="list-item">
                          <p className="p-md">{item.text}</p>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
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
