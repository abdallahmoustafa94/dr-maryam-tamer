import React, { useRef } from "react";
import Link from "next/link";
import introData from "../../data/sections/intro.json";
import { Swiper, SwiperSlide } from "swiper/react";
import useMediaQuery from '../../hooks/useMediaQuery'
import { useTranslation } from 'react-i18next';


import SwiperCore, { Navigation, Pagination, Parallax } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import removeSlashFromPagination from "../../common/removeSlashpagination";
import fadeWhenScroll from "../../common/fadeWhenScroll";


SwiperCore.use([Navigation, Pagination, Parallax]);

const IntroWithSlider = ({ sliderRef }) => {
  const [load, setLoad] = React.useState(true);
  const videoRef = useRef(null);

  React.useEffect(() => {
    fadeWhenScroll(document.querySelectorAll(".fixed-slider .caption"));
    setTimeout(() => {
      removeSlashFromPagination();
      setLoad(false);
    }, 0);


  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);
  const { t } = useTranslation();

  const isMobile = useMediaQuery('(max-width: 768px)');

  const backgroundImage = isMobile
    ? '/final/covermob.jpeg'
    : '/final/cover-2.jpeg';

  return (
    <header
      ref={sliderRef}
      className="slider slider-prlx fixed-slider text-center"
    >
      <div className="swiper-container parallax-slider">
        {!load ? (
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
                className="bg-img valign"
                style={{ backgroundImage: isMobile ? `url(/final/slider-new.webp)` : `url(/final/cover-2.jpeg)` }}
                data-overlay-dark="6"
              >
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                      <div className="caption center mt-30" >
                      <div style={{ background: 'rgba(254, 228, 123, 0.6)', padding: '16px 6px' }}>
  <h1>{t('common.drMaryamTamerClinic')}</h1>
  <p style={{ fontSize: '24px' }}>{t('home.sliderOne')}</p>
  <Link href="tel:00201095125220">
    <a className="butn bord curve mt-30" >
      <span >{t('common.getAnAppointment')}</span>
    </a>
  </Link>
</div>

                          
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div
                className="bg-img move valign"
                style={{ backgroundImage: isMobile ? `url(/final/slide-new-2.jpeg)` : `url(/final/cover.jpeg)` }}
                data-overlay-dark="6"
              >

                {/* {isMobile && (

                  <video id="my-video" data-overlay-dark="6" className="bg-img valign hero-video" style={{ height: '100vh' }} playsInline preload="auto" autoPlay loop muted>
                    <source src={"/final/case1video.mp4"} type="video/mp4" />
                  </video>
                )} */}
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                      <div className="caption center mt-30" style={{ background: 'rgba(254, 228, 123, 0.6)', padding: '16px 6px' }}>
                        <h1>{t('common.drMaryamTamerClinic')}</h1>
                        <p style={{ fontSize: '24px' }}>{t('home.sliderTwo')}</p>
                        <Link href="tel:00201095125220">
                          <a className="butn bord curve mt-30">
                            <span>{t('common.getAnAppointment')}</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        ) : null}
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
