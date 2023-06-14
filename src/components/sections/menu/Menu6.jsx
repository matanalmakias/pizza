import { content } from "../../../utils/content/content.js";
import { productCategories } from "../../../utils/content/products";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import styles from "../../../styles/Menu6.module.scss";
export default function Menu6({ helperCls }) {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const { productList } = content;
  const [productsState, setProductsState] = useState(productList);
  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };
  const { title, text } = content.menu6;
  useEffect(() => {}, [productsState]);
  const sortProducts = (key) => {
    if (key === `פיצות`) {
      const sortedProducts = productList.filter(
        (item) => item.category === `פיצות`
      );

      setProductsState(sortedProducts);
    } else if (key === `זיוות`) {
      const sortedProducts = productList.filter(
        (item) => item.category === `זיוות`
      );

      setProductsState(sortedProducts);
    } else if (key === `טוסטים`) {
      const sortedProducts = productList.filter(
        (item) => item.category === `טוסטים`
      );

      setProductsState(sortedProducts);
    } else if (key === `סלטים`) {
      const sortedProducts = productList.filter(
        (item) => item.category === `סלטים`
      );

      setProductsState(sortedProducts);
    } else if (key === `reset`) {
      setProductsState(productList);
    }
  };
  return (
    <>
      <section
        id="menu-6"
        className={`wide-70 menu-section division ${
          helperCls ? helperCls : ""
        }`}
      >
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="section-title mb-60 text-center">
                {/* Title 	*/}
                <h2 className="h2-xl red-color">{title}</h2>
                {/* Text */}
                <p className="p-xl">{text}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className={styles.sort}>
              סינון:
              {productCategories.map((item, index) => (
                <button key={index} onClick={() => sortProducts(item)}>
                  {item}
                </button>
              ))}
              <button
                className={styles.reset}
                onClick={() => sortProducts("reset")}
              >
                איפוס
              </button>
            </div>
            {productsState?.map((item, index) => (
              <div className="col-sm-6 col-lg-3" key={index}>
                <div className="menu-6-item bg-white">
                  {/* IMAGE */}
                  <div className="menu-6-img rel">
                    <div className="hover-overlay">
                      {/* Image */}
                      <img
                        className="img-fluid"
                        src={item.imageUrl}
                        alt="menu-image"
                      />
                      {/* Item Code */}
                      <span className="item-code bg-tra-dark">
                        Code: {item.code}
                      </span>
                      {/* Zoom Icon */}
                      <div className="menu-img-zoom ico-25">
                        <a
                          onClick={() => openLightbox(index)}
                          className="image-link"
                        >
                          <span className="flaticon-zoom" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* TEXT */}
                  <div className="menu-6-txt rel">
                    {/* Rating */}
                    <div className="item-rating">
                      <div className="stars-rating stars-lg">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                    {/* Like Icon */}
                    <div className="like-ico ico-25">
                      <Link href="">
                        <span className="flaticon-heart" />
                      </Link>
                    </div>
                    {/* Title */}
                    <h5 className="h5-sm coffee-color">{item.title}</h5>
                    {/* Description */}
                    <p className="grey-color">{item.desc}</p>
                    {/* Price */}
                    <div className="menu-6-price bg-coffee">
                      <h5 className="h5-xs yellow-color">
                        &#8362;{item.price}
                      </h5>
                    </div>
                    {/* Add To Cart */}
                    <div className="add-to-cart bg-yellow ico-10">
                      <Link href="/product-single">
                        <span className="flaticon-shopping-bag" /> הוסף לסל
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex].url}
              nextSrc={images[(photoIndex + 1) % images.length].url}
              prevSrc={
                images[(photoIndex + images.length - 1) % images.length].url
              }
              onCloseRequest={closeLightbox}
              onMovePrevRequest={() =>
                setPhotoIndex((photoIndex + images.length - 1) % images.length)
              }
              onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % images.length)
              }
              // imageTitle={images[photoIndex].title}
              // imageCaption={images[photoIndex].description}
              className="abc"
            />
          )}
        </div>{" "}
        {/* End container */}
      </section>
    </>
  );
}
