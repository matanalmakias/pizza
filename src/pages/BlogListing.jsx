import Layout from "../components/layout/Layout";
import Newsletter1 from "../components/sections/newsletter/Newsletter1";
import { content } from "../utils/content/content";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function BlogListing() {
  const { articles } = content.blog;

  // State to keep track of the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the start and end index of the articles to be displayed
  const startIndex = (currentPage - 1) * 8;
  const endIndex = startIndex + 8;

  // Get the articles for the current page
  const currentArticles = articles.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Layout
        pageId={"blog-page"}
        activePage={"בלוג"}
        pageTitle={"בלוג"}
        headerStyle={1}
        footerStyle={1}
      >
        {/* BLOG POSTS LISTING */}
        <section
          id="blog-listing"
          className="wide-60 blog-page-section division"
        >
          <div className="container">
            {currentArticles.map((post) => (
              <div className="row gap-1" key={post._id}>
                <div className="col-sm blog-post-img mb-4">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src={post.imgUrl}
                      alt="blog-post-image"
                    />
                  </div>
                </div>
                <div className="col-sm blog-post-txt">
                  <h4 className="h4-xs">
                    <Link to={post.link.link}>{post.link.text}</Link>
                  </h4>
                  <p className="grey-color">{post.text}</p>
                  <div className="blog-post-meta grey-color">
                    <span>
                      <i className="fas fa-comment" /> {post.comments.length}
                    </span>
                    <span>
                      <i className="fas fa-heart" /> {post.likes.length}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PAGE PAGINATION */}
        <div className="pagination-container d-flex  align-items-center justify-content-center">
          {Array.from({ length: Math.ceil(articles.length / 8) }).map(
            (page, index) => (
              <div
                key={index}
                className={`card p-2 page ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                <Link onClick={() => handlePageChange(index + 1)} to="#">
                  {index + 1}
                </Link>
              </div>
            )
          )}
        </div>
        {/* END PAGE PAGINATION */}
        <Newsletter1 />
      </Layout>
    </>
  );
}
