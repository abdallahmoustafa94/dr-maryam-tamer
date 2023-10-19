import React from "react";
import Link from 'next/link'
import { useTranslation } from "react-i18next";
import Image from 'next/image';

const Services = ({ style, lines }) => {
  const { t } = useTranslation();
  return (
    <section className={`services bords section-padding pb-0`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
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
          <div className="col-lg-4 wow fadeInLeft" data-wow-delay='.5'>
            <div className="item-box">
              <div>
                <Image src="/final/cavity.webp" width={60} height={60} alt="افضل دكتور اسنان في مدينة نصر" />
              </div>
              <div className="cont">
                <h6 style={{ fontWeight: 'bold' }}>{t('services.compositeTitle')}</h6>
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
          <div className="col-lg-4 wow fadeInLeft" data-wow-delay='.5'>
            <div className="item-box">
              <div>
                <Image src="/final/root-canal.webp" width={60} height={60} alt="دكتور اسنان" />
              </div>
              <div className="cont">
                <h6 style={{ fontWeight: 'bold' }}>{t('services.rootCanalTitle')}</h6>
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
          <div className="col-lg-4 wow fadeInLeft" data-wow-delay='.5'>
            <div className="item-box">
              <div>
                <Image src="/final/dental-veneer.webp" width={60} height={60} alt="طبيب اسنان" />
              </div>
              <div className="cont">
                <h6 style={{ fontWeight: 'bold' }}>{t('services.veneersTitle')}</h6>
                <p>{t('services.veneersShortDesc')}</p>
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
        </div>
        <div className="row mt-lg-4">
          <div className="col-lg-4 wow fadeInLeft" data-wow-delay='.5'>
            <div className="item-box">
              <div>
                <Image src="/final/tooth-extraction.webp" width={60} height={60} alt="دكتور اسنان قريب مني" />
              </div>
              <div className="cont">
                <h6 style={{ fontWeight: 'bold' }}>{t('services.extractionTitle')}</h6>
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
          <div className="col-lg-4 wow fadeInLeft" data-wow-delay='.5'>
            <div className="item-box">
              <div>
                <Image src="/final/bleaching.webp" width={60} height={60} alt="افضل عيادة اسنان في مدينة نصر" />
              </div>
              <div className="cont">
                <h6 style={{ fontWeight: 'bold' }}>{t('services.bleachingTitle')}</h6>
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
          <div className="col-lg-4 wow fadeInLeft" data-wow-delay='.5'>
            <div className="item-box">
              <div>
                <Image src="/final/bridge.webp" width={60} height={60} alt="افضل دكتور اسنان في مدينة نصر" />
              </div>
              <div className="cont">
                <h6 style={{ fontWeight: 'bold' }}>{t('services.crownsTitle')}</h6>
                <p>{t('services.crownsShortDesc')}</p>
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
        </div>
        <div className="row mt-lg-4">
          <div className="col-lg-4 wow fadeInLeft" data-wow-delay='.5'>
            <div className="item-box">
              <div>
                <Image src="/final/braces.webp" width={60} height={60} alt="افضل دكتور اسنان في مدينة نصر" />
              </div>
              <div className="cont">
                <h6 style={{ fontWeight: 'bold' }}>{t('services.bracesTitle')}</h6>
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
          <div className="col-lg-4 wow fadeInLeft" data-wow-delay='.5'>
            <div className="item-box">
              <div>
                <Image src="/final/implant.webp" width={60} height={60} alt="افضل دكتور اسنان في مدينة نصر" />
              </div>
              <div className="cont">
                <h6 style={{ fontWeight: 'bold' }}>{t('services.implantTitle')}</h6>
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
          <div className="col-lg-4 wow fadeInLeft" data-wow-delay='.5'>
            <div className="item-box">
              <div>
                <Image src="/final/children.webp" width={60} height={60} alt="افضل عيادة اسنان في مدينة نصر" />
              </div>
              <div className="cont">
                <h6 style={{ fontWeight: 'bold' }}>{t('services.childrenTitle')}</h6>
                <p>{t('services.childrenDesc')}</p>
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
      </div>
    </section>
  );
};

export default Services;
