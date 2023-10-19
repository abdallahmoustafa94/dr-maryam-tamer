/* eslint-disable @next/next/no-img-element */
import React from "react";
import cardMouseEffect from "../../common/cardMouseEffect";
import { thumparallaxDown } from "../../common/thumparallax";
import useMediaQuery from "../../hooks/useMediaQuery";
import ReactPlayer from "react-player";
import { useTranslation } from "react-i18next";
import  i18n from "../../../config/i18n";
import Image from 'next/image';

const MinimalArea = () => {
  const {t} = useTranslation()
  const isDesktop = useMediaQuery('(min-width: 769px)');
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area" >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
          {/* <ReactPlayer
      url={"/final/video-about.mp4"}
      playing
      loop
      muted
      playsinline
      width="100%"
      height={isDesktop && '50vh'}
      style={{ margin: 'auto' }}
    /> */}
<img src="/final/dental-about.jpeg" alt="افضل دكتور اسنان في مدينة نصر"/>        </div>
          <div className="col-lg-12 valign">
            <div className="content pt-0">
              <p className="wow txt mt-4 mt-md-0" data-splitting style={{textAlign : i18n.language === "ar" ? "right" : 'left'}}>
                {t('about.missionSlogan')}
              </p>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6 style={{textAlign : i18n.language === "ar" ? "right" : 'left'}}>
                    <span>1</span>{t('about.missionTitle')}
                  </h6>
                  <p style={{textAlign : i18n.language === "ar" ? "right" : 'left'}}>
                    {t('about.missionDesc')}
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6 style={{textAlign : i18n.language === "ar" ? "right" : 'left'}}>
                    <span>2</span>{t('about.visionTitle')}
                  </h6>
                  <p style={{textAlign : i18n.language === "ar" ? "right" : 'left'}}>
                    {t('about.visionDesc')}
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s" style={{textAlign : i18n.language === "ar" ? "right" : 'left'}}>
                  <h6 >
                    <span>3</span>{t('about.goalsTitle')}
                  </h6>
                  <p>
                    {t('about.goalsDesc')}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
