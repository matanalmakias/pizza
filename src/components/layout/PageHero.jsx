import { content } from "../../utils/content/content";
import { Link } from "react-router-dom";
import React from "react";

export default function PageHero({ pageTitle, activePage, pageId }) {
  return (
    <>
      <div id={pageId} className="page-hero-section division">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="hero-txt text-center white-color">
                {/* Breadcrumb */}
                <div id="breadcrumb">
                  <div className="row">
                    <div className="col">
                      <div className="breadcrumb-nav">
                        <nav aria-label="breadcrumb">
                          <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                              <Link href="/">
                                {content.header1.menu[0].name}
                              </Link>
                              {" | "}
                            </li>{" "}
                            {activePage}{" "}
                          </ol>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Title */}
                <h2 className="h2-xl">{pageTitle}</h2>
              </div>
            </div>
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </div>
    </>
  );
}
