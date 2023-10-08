import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  Parallax,
  Mousewheel,
} from 'swiper';
import Link from 'next/link';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';
import tooltipEffect from '../../common/tooltipEffect';
import useMediaQuery from '../../hooks/useMediaQuery';
import { useTranslation } from 'react-i18next';

SwiperCore.use([Navigation, Pagination, Parallax, Mousewheel]);

export default () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { t } = useTranslation();

  return (
    <div className="container">
      <header className="slider" dir="ltr">
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
        >
          <SwiperSlide>
            <div className="text-center">
              <div>
                <a className="">
                  <Image
                    src="/final/case1.webp"
                    alt="image"
                    width={isMobile ? 400 : 400}
                    height={isMobile ? 600 : 600 /* Adjust the height as needed */}
                  />
                </a>
              </div>
              <div className="cont">
                <h6>{t('cases.caseOneTitle')}</h6>
              </div>
              <div className="btn-more">
                <Link href="/cases/1">
                  <a className="simple-btn mt-3">{t('common.readMore')}</a>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <div>
                <a className="">
                  <Image
                    src="/final/case2.webp"
                    alt="image"
                    width={isMobile ? 400 : 400}
                    height={isMobile ? 600 : 600 /* Adjust the height as needed */}
                  />
                </a>
              </div>
              <div className="cont">
                <h6>{t('cases.caseTwoTitle')}</h6>
              </div>
              <div className="btn-more">
                <Link href="/cases/2">
                  <a className="simple-btn mt-3">{t('common.readMore')}</a>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <div>
                <a className="">
                  <Image
                    src="/final/case3.webp"
                    alt="image"
                    width={isMobile ? 400 : 400}
                    height={isMobile ? 600 : 600 /* Adjust the height as needed */}
                  />
                </a>
              </div>
              <div className="cont">
                <h6>{t('cases.caseThreeTitle')}</h6>
              </div>
              <div className="btn-more">
                <Link href="/cases/3">
                  <a className="simple-btn mt-3">{t('common.readMore')}</a>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <div>
                <a className="">
                  <Image
                    src="/final/case4.webp"
                    alt="image"
                    width={isMobile ? 400 : 400}
                    height={isMobile ? 600 : 600 /* Adjust the height as needed */}
                  />
                </a>
              </div>
              <div className="cont">
                <h6>{t('cases.caseFourTitle')}</h6>
              </div>
              <div className="btn-more">
                <Link href="/cases/4">
                  <a className="simple-btn mt-3">{t('common.readMore')}</a>
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
              <span>{t('common.next')}</span>
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
              <span>{t('common.previous')}</span>
            </div>
          </div>
          <div className="swiper-pagination dots" ref={paginationRef}></div>
        </div>
      </header>
    </div>
  );
};
