import React from "react";
import Link from 'next/link'
import { useTranslation } from "react-i18next";



const Services = ({ style, lines }) => {
const {t} = useTranslation()
  return (
    <section
      className={`services bords section-padding pb-0`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
              {t('home.servicesSlogan')}
              </h6>
              <h3 className="wow">
              {t('menu.services')}
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
                <div
                  className="col-lg-4 wow fadeInLeft"
                  data-wow-delay='.5'
            >
                  <div className="item-box">
                    <div>
                      <img src="/final/cavity.png" style={{width:'60px'}}/>
                    </div>
                    <div className="cont">
                      <h6 style={{fontWeight:'bold'}}>{t('services.compositeTitle')}</h6>
                      <p>{t('services.compositeShortDesc')}</p>
                      <div className="btn-more">
                    <Link href="/services/composite-restoration">
                    <a className="simple-btn mt-3">
                     {t('common.readMore')}
                    </a>
                    </Link>
                  </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 wow fadeInLeft"
                  data-wow-delay='.5'
            >
                 <div className="item-box">
                    <div>
                      <img src="/final/root-canal.png" style={{width:'60px'}}/>
                    </div>
                    <div className="cont">
                      <h6 style={{fontWeight:'bold'}}>{t('services.rootCanalTitle')}</h6>
                      <p>{t('services.rootCanalShortDesc')}</p>
                      <div className="btn-more">
                    <Link href="/services/root-canal-treatment">
                    <a className="simple-btn mt-3">
                     {t('common.readMore')}
                    </a>
                    </Link>
                  </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 wow fadeInLeft"
                  data-wow-delay='.5'
            >
                  <div className="item-box">
                    <div>
                      <img src="/final/dental-veneer.png" style={{width:'60px'}}/>
                    </div>
                    <div className="cont">
                      <h6 style={{fontWeight:'bold'}}>{t('services.veneersTitle')}</h6>
                      <p>{t('services.veneersShortDesc')}</p>
                    </div>
                    <div className="btn-more">
                    <Link href="/services/veneers">
                    <a className="simple-btn mt-3">
                      {t('common.readMore')}
                    </a>
                    </Link>
                  </div>
                  </div>
                </div>
               
        </div>
        <div className="row mt-lg-4">
                <div
                  className="col-lg-4 wow fadeInLeft"
                  data-wow-delay='.5'
            >
                  <div className="item-box">
                    <div>
                      <img src="/final/tooth-extraction.png" style={{width:'60px'}}/>
                    </div>
                    <div className="cont">
                      <h6 style={{fontWeight:'bold'}}>{t('services.extractionTitle')}</h6>
                      <p>{t('services.extractionShortDesc')}</p>
                      <div className="btn-more">
                    <Link href="/services/extraction">
                    <a className="simple-btn mt-3">
                      {t('common.readMore')}
                    </a>
                    </Link>
                  </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 wow fadeInLeft"
                  data-wow-delay='.5'
            >
                  <div className="item-box">
                    <div>
                      <img src="/final/bleaching.png" style={{width:'60px'}}/>
                    </div>
                    <div className="cont">
                      <h6 style={{fontWeight:'bold'}}>{t('services.bleachingTitle')}</h6>
                      <p>{t('services.bleachingShortDesc')}</p>
                    <div className="btn-more">
                    <Link href="/services/bleaching">
                    <a className="simple-btn mt-3">
                      {t('common.readMore')}
                    </a>
                    </Link>
                  </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 wow fadeInLeft"
                  data-wow-delay='.5'
            >
                  <div className="item-box">
                    <div>
                      <img src="/final/bridge.png" style={{width:'60px'}}/>
                    </div>
                    <div className="cont">
                      <h6 style={{fontWeight:'bold'}}>{t('services.crownsTitle')}</h6>
                      <p>{t('services.crownsShortDesc')}</p>
                    </div>
                    <div className="btn-more">
                    <Link href="/services/crowns-and-bridges">
                    <a className="simple-btn mt-3">
                      {t('common.readMore')}
                    </a>
                    </Link>
                  </div>
                  </div>
                </div>
               
        </div>
        <div className="row mt-lg-4">
                <div
                  className="col-lg-4 wow fadeInLeft"
                  data-wow-delay='.5'
            >
                  <div className="item-box">
                    <div>
                      <img src="/final/braces.png" style={{width:'60px'}}/>
                    </div>
                    <div className="cont">
                      <h6 style={{fontWeight:'bold'}}>{t('services.bracesTitle')}</h6>
                      <p>{t('services.bracesDesc')}</p>
                      <div className="btn-more">
                    <Link href="/services/braces">
                    <a className="simple-btn mt-3">
                      {t('common.readMore')}
                    </a>
                    </Link>
                  </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 wow fadeInLeft"
                  data-wow-delay='.5'
            >
                  <div className="item-box">
                    <div>
                      <img src="/final/implant.png" style={{width:'60px'}}/>
                    </div>
                    <div className="cont">
                      <h6 style={{fontWeight:'bold'}}>{t('services.implantTitle')}</h6>
                      <p>{t('services.implantDesc')}</p>
                    <div className="btn-more">
                    <Link href="/services/implant">
                    <a className="simple-btn mt-3">
                      {t('common.readMore')}
                    </a>
                    </Link>
                  </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 wow fadeInLeft"
                  data-wow-delay='.5'
            >
                  <div className="item-box">
                    <div>
                      <img src="/final/children.png" style={{width:'60px'}}/>
                    </div>
                    <div className="cont">
                      <h6 style={{fontWeight:'bold'}}>{t('services.childrenTitle')}</h6>
                      <p>{t('services.childrenDesc')}</p>
                    </div>
                    <div className="btn-more">
                    <Link href="/services/children">
                    <a className="simple-btn mt-3">
                      {t('common.readMore')}
                    </a>
                    </Link>
                  </div>
                  </div>
                </div>
               
        </div>
      </div>
      <section>
      
     
   
     

    </section>
    
    </section>
    
  );
};

export default Services;
