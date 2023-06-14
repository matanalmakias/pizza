import { content } from "../../utils/content/content";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function Header1({
  headerCls,
  scroll,
  isToggled,
  handleToggle,
}) {
  const [isActive, setActive] = useState({
    status: false,
    key: "",
  });
  const { menu, callUsBtn } = content.header1;

  const handleNav = (key) => {
    setActive((prevState) => ({
      status: prevState.key === key ? !prevState.status : true,
      key: prevState.key === key ? "" : key,
    }));
  };

  return (
    <>
      <header
        id="header-1"
        className={`header navik-header header-shadow center-menu-1 header-transparent ${
          headerCls ? headerCls : ""
        } ${scroll ? "sticky" : "header-transparent-on"}`}
      >
        <div className="container">
          <div className="navik-header-container">
            <div className="callusbtn">
              <Link to={`tel:${callUsBtn.tel}`}>
                <i className={callUsBtn.icon} />
              </Link>
            </div>

            <div
              className="logo"
              data-mobile-logo="images/logo-01.png"
              data-sticky-logo="images/logo-01.png"
            >
              <Link to="/">
                <img src="/images/logo-01.png" alt="header-logo" />
              </Link>
            </div>
            <div
              className={`burger-menu ${isToggled ? "menu-open" : ""}`}
              onClick={handleToggle}
            >
              <div className="line-menu line-half first-line" />
              <div className="line-menu" />
              <div className="line-menu line-half last-line" />
            </div>

            <nav className="navik-menu menu-caret navik-yellow">
              <ul className={`top-list ${isToggled ? "d-block" : "d-none"}`}>
                {menu?.map((item, index) => {
                  return (
                    <li
                      key={item._id}
                      className={item.dropdown ? "dropdown_menu" : ""}
                    >
                      <Link to={item.linkPath}>{item.name}</Link>
                      {item.dropdown && (
                        <ul
                          className={
                            isActive.key === item._id ? "d-block" : "d-none"
                          }
                        >
                          {item.items?.map((subItem) => (
                            <li key={subItem._id}>
                              <Link to={subItem.link}>{subItem.text}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                      <span
                        className={
                          isActive.key === item._id
                            ? "dropdown-plus dropdown-open"
                            : "dropdown-plus"
                        }
                        onClick={() => handleNav(item._id)}
                      ></span>
                    </li>
                  );
                })}
              </ul>
              <ul className={isToggled ? "d-block" : "d-none"}>
                <li className="basket-ico ico-30">
                  <Link to="/cart">
                    <span className="ico-holder">
                      <span className="flaticon-shopping-bag" />{" "}
                      <em className="roundpoint">2</em>
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
