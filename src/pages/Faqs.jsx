import Layout from "../components/layout/Layout";
import Newsletter1 from "../components/sections/newsletter/Newsletter1";
import { content } from "../utils/content/content";
import React from "react";

export default function Faqs() {
  const { list, callToAction } = content.faqs;
  return (
    <>
      <Layout
        pageId={"faqs-page"}
        activePage={"שאלות נפוצות"}
        pageTitle={"שאלות נפוצות"}
        headerStyle={1}
        footerStyle={1}
      >
        <section id="faqs-1" className=" faqs-section division">
          <div className="container card p-3 m-2">
            {/* FAQs-1 QUESTIONS */}
            <div className="faqs-1-questions">
              <div className="row">
                {/* QUESTIONS WRAPPER */}
                {list?.map((item, index) => {
                  return (
                    <div key={index} className="col-sm">
                      <div className="question">
                        {/* Question */}
                        <h5 className="h5-xs">
                          {index + 1}.{item.question}
                        </h5>
                        {/* Answer */}
                        <p className="grey-color">{item.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* End row */}
            </div>
            {/* END FAQs-1 QUESTIONS */}
            {/* MORE QUESTIONS BUTTON */}
            <div className="row">
              <div className="col-md-12">
                <div className="more-questions-btn text-center">
                  <a
                    href={callToAction.link}
                    className="btn btn-md btn-red tra-red-hover"
                  >
                    {callToAction.text}
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End container */}
        </section>
        {/* END FAQs-1 */}
        <Newsletter1 />
      </Layout>
    </>
  );
}
