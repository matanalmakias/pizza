import { content } from "../../../utils/content/content";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";

export default function Gallery2({ helperCls }) {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const { title, text, images } = content.gallery2;
  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <>
      <section
        id="gallery-2"
        className={`gallery-section division ${helperCls ? helperCls : ""}`}
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
          {/* IMAGES HOLDER */}
          <div className="row">
            {images.map((image, index) => (
              <div key={image._id} className="col-sm-6 col-lg-3">
                <div className="gallery-img">
                  <a className="image-link" onClick={() => openLightbox(index)}>
                    <div className="hover-overlay">
                      <img
                        className="img-fluid"
                        src={image.url}
                        alt={image.alt}
                      />
                      <div className="item-overlay" />
                      {/* Image Meta */}
                      <div className="img-meta white-color">
                        <h5 className="h5-xs">{image.title}</h5>
                        <div className="txt-block-rating">
                          <div className="stars-rating">
                            <span>4.5</span>
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <span>(23)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
            {isOpen && (
              <Lightbox
                mainSrc={images[photoIndex].url}
                nextSrc={images[(photoIndex + 1) % images.length].url}
                prevSrc={
                  images[(photoIndex + images.length - 1) % images.length].url
                }
                onCloseRequest={closeLightbox}
                onMovePrevRequest={() =>
                  setPhotoIndex(
                    (photoIndex + images.length - 1) % images.length
                  )
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
          {/* END IMAGES HOLDER */}
        </div>{" "}
        {/* End container */}
      </section>
    </>
  );
}
