import { content } from "../../utils/content/content";
import { Link } from "react-router-dom";
import React from "react";

export default function Footer1() {
  const { street, city } = content.companyInfo.location1;
  const { email, tel, social } = content.companyInfo;
  return (
    <>
      <footer id="footer-1" className="footer division  ">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-4">
              <div className="footer-info mb-40">
                <div className="footer-logo">
                  <img src="/images/logo-01.png" alt="footer-logo" />
                </div>

                <p>
                  © {new Date().getFullYear()} {content.companyName}. All Rights
                  Reserved
                </p>
              </div>
            </div>

            <div className="col-md-7 col-lg-4 col-xl-5">
              <div className="footer-contacts mb-40">
                <p className="p-xl mt-10">{city}</p>
                <p className="p-xl">{street}</p>

                <p className="p-lg foo-email">
                  אימייל:{" "}
                  <Link className="text-light" href={`/mailto:${email}`}>
                    {email}
                  </Link>
                </p>
                <p className="p-lg">
                  התקשרו עכשיו:{" "}
                  <span className="yellow-color">
                    <Link href={`/tel:${tel}`}>{tel}</Link>
                  </span>
                </p>
              </div>
            </div>

            <div className="col-md-12 col-lg-4 col-xl-3">
              <div className="footer-img mb-40">
                <ul className="text-center clearfix">
                  <li>
                    <Link href={social.instagram} target="_blank">
                      <img
                        className="insta-img"
                        src="/images/instagram/img-01.jpg"
                        alt="insta-img"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" target="_blank">
                      <img
                        className="insta-img"
                        src="/images/instagram/img-02.jpg"
                        alt="insta-img"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" target="_blank">
                      <img
                        className="insta-img"
                        src="/images/instagram/img-03.jpg"
                        alt="insta-img"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" target="_blank">
                      <img
                        className="insta-img"
                        src="/images/instagram/img-04.jpg"
                        alt="insta-img"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" target="_blank">
                      <img
                        className="insta-img"
                        src="/images/instagram/img-05.jpg"
                        alt="insta-img"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" target="_blank">
                      <img
                        className="insta-img"
                        src="/images/instagram/img-06.jpg"
                        alt="insta-img"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
