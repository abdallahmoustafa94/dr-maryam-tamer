/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import AboutUs1Date from "../../data/sections/about-us1.json";
import useMediaQuery from "../../hooks/useMediaQuery";
import ReactPlayer from "react-player";
import { useTranslation } from "react-i18next";
import i18n from "../../../config/i18n";

const AboutUs = () => {
  const isDesktop = useMediaQuery('(min-width: 769px)');
  const {t} = useTranslation()
  return (
    <section className="about-us section-padding pb-0" style={{ paddingBottom: '0' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-2 order-md-1 valign mb-0 md-mb50">
            <div style={{textAlign :i18n.language === 'ar' ? 'right' : 'left'}}>
              <h6 className="fw-100 text-u ls10 mb-10" style={{textAlign :i18n.language === 'ar' ? 'right' : 'left'}}>
                {t('about.about')}
              </h6>
              <h3 className="fw-600 text-u ls1 mb-30 " style={{textAlign :i18n.language === 'ar' ? 'right' : 'left'}}> 
                {t('common.drMaryamTamer')}
              </h3>
              <p style={{textAlign :i18n.language === 'ar' ? 'right' : 'left'}}>{t('about.aboutDesc')}</p>
              <Link href="/about/" >
                <a className="butn bord curve mb-30"  >
                  <span>{t('common.readMore')}</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 order-2 order-md-2 img" >
          <ReactPlayer
      url={"/final/case3video.mp4"}
      playing
      loop
      muted
      playsinline
      width="100%"
      height={isDesktop && '70vh'}
      style={{ margin: 'auto' }}
    />

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
