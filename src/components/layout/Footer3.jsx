import { Link } from "react-router-dom";
import React from "react";

import styles from "../../styles/Style.module.scss";
import { content } from "../../utils/content/content";
export default function Footer3() {
  const { socials, links } = content.footer3;
  return (
    <>
      <footer id="footer-3" className={`footer division ${styles.bg2}`}>
        <div className="container ">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="footer-logo">
                <img src="/images/logo-01.png" alt="footer-logo" />
              </div>

              <div className="footer-socials-links ">
                <ul
                  className={`${styles.bg1} foo-socials text-center clearfix p-1 align-items-center d-flex justify-content-center `}
                >
                  {socials?.map((item) => (
                    <li key={item._id}>
                      <Link href={item.link} className="ico-facebook">
                        <i className={item.icon} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-links">
                <ul className=" d-flex align-items-center justify-content-center text-center gap-4">
                  {links?.map((item) => (
                    <li key={item._id}>
                      <p>
                        <Link href={item.link}>{item.text}</Link>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-copyright">
                <p>© {new Date().getFullYear()} פיצה רומי. כל הזכויות שמורות</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
