import { content } from "../../../utils/content/content";
import { Link } from "react-router-dom";
import React from "react";

export default function Contacts3({ helperCls }) {
  const { title, text, locations } = content.contacts3;
  return (
    <>
      <section
        id="contacts-3"
        className={`bg-fixed contacts-section division ${
          helperCls ? helperCls : ""
        }`}
      >
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="section-title mb-60 text-center">
                {/* Title 	*/}
                <h2 className="h2-xl red-color">{title}</h2>
                {/* Text */}
                {locations.length > 1 && <p className="p-xl">{text}</p>}
              </div>
            </div>
          </div>
          <div className="row">
            {locations?.map((item) => (
              <div key={item._id} className="col-sm">
                <div className="cbox-3 text-center">
                  {/* Image */}
                  <div className="hover-overlay">
                    <img
                      style={{ height: `300px` }}
                      className="img-fluid"
                      src={item.imgUrl}
                      alt="location-image"
                    />
                  </div>
                  {/* Text */}
                  <div className="cbox-3-txt">
                    {/* Location */}
                    <h5 className="h5-xl red-color">{item.text}</h5>
                    {/* Phone */}
                    <h6 className="h6-xl">
                      Phone:{" "}
                      <span>
                        <a href={`tel:${item.phone}`}>{item.phone}</a>
                      </span>
                    </h6>
                    {/* Address */}
                    <h6 className="h6-lg mt-20">{item.address.text}</h6>
                    <p className="grey-color">{item.address.street}</p>
                    <p className="grey-color">{item.address.city}</p>
                    {/* Working Hours */}
                    <p className="grey-color">{item.workingHours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>
    </>
  );
}
