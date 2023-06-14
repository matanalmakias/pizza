// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import { content } from "../../utils/content/content";
import React from "react";

export default function ReviewSlider1() {
  const testimonials = content.testimonials;
  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={30}
        // centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".block-gallery-pagination",
        }}
        className="slides text-center"
        tag={"ul"}
      >
        {/* TESTIMONIAL-1 */}

        {testimonials?.map((item) => (
          <SwiperSlide key={item._id} className="review-1" tag="li">
            <div className="review-1-txt">
              {/* Testimonial Author Avatar */}
              <img src={item.imgUrl} alt="testimonial-avatar" />
              {/* Text */}
              <p>{item.text}</p>
              {/* Rating */}
              <div className="review-rating">
                <div className="stars-rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                </div>
              </div>
              {/* Testimonial Author */}
              <p className="testimonial-autor">by {item.creator}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="swiper-pagination block-gallery-pagination" /> */}
    </>
  );
}
