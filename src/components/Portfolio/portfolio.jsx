/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import { useTranslation } from "react-i18next";
import i18n from "../../../config/i18n";
const Portfolio = ({ grid, filterPosition }) => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  const {t} = useTranslation()
  return (
    <section className="portfolio ">
      <div className="container">

      </div>
      <div className={`${grid === 3 ? "container-fluid" : "container"}`}>
        <div className="row">


          <div className="gallery full-width">
            <div
              className={`${grid === 3
                ? "col-lg-4 col-md-6"
                : grid === 2
                  ? "col-md-6 lg-mr"
                  : "col-12"
                } items graphic wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/final/case1.JPG" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              <div className="cont">
                <h6   style={{textAlign : i18n.language === 'ar' ? 'right' : 'left'}}> {t('cases.caseOneTitle')}</h6>

              </div>
              <div className="btn-more"   style={{textAlign : i18n.language === 'ar' ? 'right' : 'left'}}>
                <Link href="/cases/1">
                  <a className="simple-btn mt-3">
                  {t('common.readMore')}
                  </a>
                </Link>
              </div>
            </div>

            <div
              className={`${grid === 3
                ? "col-lg-4 col-md-6"
                : grid === 2
                  ? "col-md-6"
                  : "col-12"
                } items web wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/final/case2.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              <div className="cont">
                <h6   style={{textAlign : i18n.language === 'ar' ? 'right' : 'left'}}> {t('cases.caseTwoTitle')}</h6>

              </div>
              <div className="btn-more"   style={{textAlign : i18n.language === 'ar' ? 'right' : 'left'}}>
                <Link href="/cases/2">
                  <a className="simple-btn mt-3">
                  {t('common.readMore')}
                  </a>
                </Link>
              </div>
            </div>
            <div
              className={`${grid === 3
                ? "col-lg-4 col-md-6"
                : grid === 2
                  ? "col-md-6"
                  : "col-12"
                } items web wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/final/case3.JPG" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              <div className="cont">
                <h6   style={{textAlign : i18n.language === 'ar' ? 'right' : 'left'}}>{t('cases.caseThreeTitle')}</h6>

              </div>
              <div className="btn-more"   style={{textAlign : i18n.language === 'ar' ? 'right' : 'left'}}>
                <Link href="/cases/3">
                  <a className="simple-btn mt-3">
                  {t('common.readMore')}
                  </a>
                </Link>
              </div>
            </div>
            <div
              className={`${grid === 3
                ? "col-lg-4 col-md-6"
                : grid === 2
                  ? "col-md-6"
                  : "col-12"
                } items web wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/final/case4.JPG" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              <div className="cont">
                <h6   style={{textAlign : i18n.language === 'ar' ? 'right' : 'left'}}>{t('cases.caseFourTitle')}</h6>

              </div>
              <div className="btn-more" style={{textAlign : i18n.language === 'ar' ? 'right' : 'left'}}>
                <Link href="/cases/4"   style={{textAlign : i18n.language === 'ar' ? 'right' : 'left'}}>
                  <a className="simple-btn mt-3">
                  {t('common.readMore')}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
