import { content } from "../../../utils/content/content";
import React from "react";

export default function Newsletter1({ helperCls }) {
  const { emailPlaceHolder, submitText, text, title } = content.newsLetter;
  return (
    <>
      <section
        id="newsletter-1"
        className={`mb-20 newsletter-section division ${
          helperCls ? helperCls : ""
        }`}
      >
        <div className="container">
          <div className="inner-bg bg-lightgrey">
            <div className="row">
              {/* NEWSLETTER FORM */}
              <div className="col-md-10 col-xl-8 offset-md-1 offset-xl-2">
                <div className="newsletter-txt text-center">
                  {/* Title */}
                  <h3 className="h3-sm">{title}</h3>
                  {/* Text */}
                  <p className="p-md grey-color">{text}</p>
                  {/* Form */}
                  <form className="newsletter-form">
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder={emailPlaceHolder}
                        required
                        id="s-email"
                      />
                      <span className="input-group-btn">
                        <button
                          type="submit"
                          className="btn btn-red tra-red-hover"
                        >
                          {submitText}
                        </button>
                      </span>
                    </div>
                    {/* Newsletter Form Notification */}
                    <label htmlFor="s-email" className="form-notification" />
                  </form>
                </div>
              </div>{" "}
              {/* END NEWSLETTER FORM */}
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* End Inner Bg */}
        </div>{" "}
        {/* End container */}
      </section>
    </>
  );
}
