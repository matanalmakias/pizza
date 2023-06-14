import Layout from "../components/layout/Layout";
import Newsletter1 from "../components/sections/newsletter/Newsletter1";
import { content } from "../utils/content/content";
import { Link } from "react-router-dom";
import React from "react";

export default function Terms() {
  const { endText, lastUpdate, points, text, title } = content.terms;

  return (
    <>
      <Layout
        pageId={"terms-page"}
        activePage={title}
        pageTitle={title}
        headerStyle={1}
        footerStyle={1}
      >
        {/* TERMS & PRIVACY
			============================================= */}
        <section id="terms-1" className=" p-1 terms-section division">
          <div className="container d-flex flex-column gap-3">
            <span className="rounded card p-2 mb-2 m-2 fw-bold">{text}</span>
            <div className="row">
              {/* TERMS CONTENT */}
              {points?.map((item, index) => (
                <div key={index} className="col-sm d-flex flex-column">
                  <span className="h5">
                    {index + 1}.{item.title}
                  </span>
                  <span className="text-bold">{item.text}</span>
                </div>
              ))}
              {/* END TERMS CONTENT */}
            </div>{" "}
            <div className="bg-secondary text-white p-2">
              <span>{endText}</span>
              <div>
                <span>
                  {lastUpdate.text}
                  {lastUpdate.date}
                </span>
              </div>
            </div>
            {/* End row */}
          </div>{" "}
          {/* End container */}
        </section>{" "}
        {/* END TERMS & PRIVACY */}
        <Newsletter1 />
      </Layout>
    </>
  );
}
