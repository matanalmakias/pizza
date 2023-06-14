import { Helmet } from "react-helmet";
import React from "react";

const PageHead = ({ headTitle }) => {
  return (
    <>
      <Helmet>
        <title>{headTitle ? headTitle : "פיצה רומי - החנות הרשמית"}</title>

        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://use.fontawesome.com/releases/v5.11.0/css/all.css"
          rel="stylesheet"
          crossorigin="anonymous"
        />
      </Helmet>
    </>
  );
};

export default PageHead;
