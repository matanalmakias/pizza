import Layout from "../components/layout/Layout";
import Gallery2 from "../components/sections/gallery/Gallery2";
import Newsletter1 from "../components/sections/newsletter/Newsletter1";
import React from "react";
import Hero4 from "../components/sections/hero/Hero4";
export default function Gallery() {
  return (
    <>
      <Layout
        pageId={"gallery-page"}
        activePage={"גלריה"}
        pageTitle={" גלריה"}
        headerStyle={1}
        footerStyle={1}
      >
        <Hero4 />
        <Gallery2 />
        <Newsletter1 />
      </Layout>
    </>
  );
}
