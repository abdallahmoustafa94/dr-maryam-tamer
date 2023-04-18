import React from "react";
import Link from "next/link";
import introData from "../../data/sections/intro.json";
import { Swiper, SwiperSlide } from "swiper/react";
import useMediaQuery from '../../hooks/useMediaQuery'

import SwiperCore, { Navigation, Pagination, Parallax } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import removeSlashFromPagination from "../../common/removeSlashpagination";
import fadeWhenScroll from "../../common/fadeWhenScroll";


SwiperCore.use([Navigation, Pagination, Parallax]);

const IntroWithSlider = ({ sliderRef }) => {
  const [load, setLoad] = React.useState(false);
  React.useEffect(() => {
    fadeWhenScroll(document.querySelectorAll(".fixed-slider .caption"));
    removeSlashFromPagination();
  }, []);
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);

  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <header
      ref={sliderRef}
      className="slider slider-prlx fixed-slider text-center"
    >
      <div className="swiper-container parallax-slider">
        <Swiper

          speed={1000}
          parallax={true}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          pagination={{
            type: "fraction",
            clickable: true,
            el: paginationRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.params.pagination.el = paginationRef.current;
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              for (var i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].childNodes[0].setAttribute(
                  "data-swiper-parallax",
                  0.75 * swiper.width
                );
              }

              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;

              swiper.params.pagination.el = paginationRef.current;

              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();

              swiper.pagination.destroy();
              swiper.pagination.init();
              swiper.pagination.update();
            });
          }}
          className="swiper-wrapper"
          slidesPerView={1}
        >
          <SwiperSlide className="swiper-slide">
            <div
              className="bg-img move valign"
              style={{ backgroundImage: isMobile ? `none` : `url(/final/cover.jpeg)` }}
              data-overlay-dark="6"
            >

              {isMobile && (

                <video data-overlay-dark="6" className="bg-img valign hero-video" style={{ height: '100vh' }} autoPlay loop muted>
                  <source src={"/final/video-2.mp4"} type="video/mp4" />
                </video>
              )}
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8 col-md-10">
                    <div className="caption center mt-30">
                      <h1>Dr.Maryam Tamer</h1>
                      <p style={{ fontSize: '24px' }}>The perfect smile is just a visit away</p>
                      <Link href="/contact/">
                        <a className="butn bord curve mt-30">
                          <span>Get an appointment</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="bg-img valign"
              style={{ backgroundImage: isMobile ? `url(/final/covermob.jpeg)` : `url(/final/cover-2.jpeg)` }}
              data-overlay-dark="6"
            >

              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8 col-md-10">
                    <div className="caption center mt-30">
                      <h1 >Dr.Maryam Tamer</h1>
                      <p style={{ fontSize: '24px' }}>Beyond Dentistry, Above Expectations!</p>
                      <Link href="/contact/">
                        <a className="butn bord curve mt-30">
                          <span>Get an appointment</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="setone setwo">
          <div
            ref={navigationNextRef}
            className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
          >
            <i className="fas fa-chevron-right"></i>
          </div>
          <div
            ref={navigationPrevRef}
            className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
          >
            <i className="fas fa-chevron-left"></i>
          </div>
        </div>
        <div ref={paginationRef} className="swiper-pagination top botm"></div>


      </div>
    </header>
  );
};

export default IntroWithSlider;
