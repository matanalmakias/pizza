import { content } from "../../../utils/content/content.js";
import { Link } from "react-router-dom";
import React from "react";

export default function Promo1({ helperCls }) {
  const { items } = content.promo1;
  return (
    <>
      <section
        id="promo-1"
        className={`promo-section division ${helperCls ? helperCls : ""}`}
      >
        <div className="container-fluid">
          <div className=" gap-1 d-flex align-items-center">
            {items?.map((item) => (
              <div key={item._id} className="col-sm">
                <div
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                  className="pbox-1 bg-fixed"
                >
                  <div className="pbox-1-txt white-color">
                    <h3 className="h3-sm">{item.title}</h3>
                    <p className="p-lg">{item.text}</p>
                    <Link
                      to={item.linkPath}
                      className="btn btn-red tra-white-hover"
                    >
                      {item.btnText}
                    </Link>
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
