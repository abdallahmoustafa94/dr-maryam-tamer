// Import Swiper React components
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Parallax,
  Mousewheel,
} from "swiper";
import Link from "next/link";

// Import Swiper styles
import 'swiper/css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/mousewheel";
import tooltipEffect from "../../common/tooltipEffect";


SwiperCore.use([Navigation, Pagination, Parallax, Mousewheel]);
export default () => {

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);
  return (
    <div className="container">
      <header className='slider'>
        <Swiper
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            1024: {
              slidesPerView: 2,
            },
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {

              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;

              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          cent

        >
          <SwiperSlide>  <div className='text-center'>

            <div >
              <a className="">
                <img src="/final/case1.jpeg" alt="image" />
                {/* <div className="item-img-overlay"></div> */}
              </a>
            </div>
            <div className="cont">
              <h6 >A Complete Zirconium Makeover for Upper and Lower Arches!</h6>

            </div>
            <div className="btn-more">
              <Link href="/cases/1">
                <a className="simple-btn mt-3">
                  Read More
                </a>
              </Link>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='text-center'>

              <div >
                <a className="">
                  <img src="/final/case2.jpeg" alt="image" />
                  {/* <div className="item-img-overlay"></div> */}
                </a>
              </div>
              <div className="cont">
                <h6 >Stunning Zirconium Crowns and Bridge Makeover!</h6>

              </div>
              <div className="btn-more">
                <Link href="/cases/2">
                  <a className="simple-btn mt-3">
                    Read More
                  </a>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='text-center'>

              <div >
                <a className="">
                  <img src="/final/case3.jpeg" alt="image" />
                  {/* <div className="item-img-overlay"></div> */}
                </a>
              </div>
              <div className="cont">
                <h6 >Smile makeover done using 8 Emax porcelain veneers</h6>

              </div>
              <div className="btn-more">
                <Link href="/cases/3">
                  <a className="simple-btn mt-3">
                    Read More
                  </a>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='text-center'>

              <div >
                <a className="">
                  <img src="/final/case4.jpeg" alt="image" />
                  {/* <div className="item-img-overlay"></div> */}
                </a>
              </div>
              <div className="cont">
                <h6 >Restoring Fallen Crowns with Emax Replacements to Match Natural Teeth</h6>

              </div>
              <div className="btn-more">
                <Link href="/cases/4">
                  <a className="simple-btn mt-3">
                    Read More
                  </a>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="txt-botm">
          <div
            ref={navigationNextRef}
            className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
          >
            <div>
              <span>Next Slide</span>
            </div>
            <div>
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
          <div
            ref={navigationPrevRef}
            className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
          >
            <div>
              <i className="fas fa-chevron-left"></i>
            </div>
            <div>
              <span>Prev Slide</span>
            </div>
          </div>

          <div className="swiper-pagination dots" ref={paginationRef}></div>
        </div>
      </header>

    </div>

  );

};