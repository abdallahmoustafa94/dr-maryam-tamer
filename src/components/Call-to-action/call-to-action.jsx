import React from 'react'
import Split from '../Split'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import i18n from '../../../config/i18n'

const CallToAction = ({img}) => {
  const {t} = useTranslation()
    return (
      <section
        className="call-action section-padding sub-bg bg-img"
        style={{ backgroundImage: `url(${img ? img : "/img/patrn.svg"})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9">
              <div className={`content sm-mb30 text-center ${i18n.language === "ar" ? 'text-md-right' :'text-md-left'}`}>
                  <h6 className="wow" style={{color:'#111'}}>
                 {t('common.letsDiscuss')}
                  </h6>
                  <h2 className="wow">
                   <span style={{color:"#000"}}>{t('common.smileJourney')}</span>
                    .
                  </h2>
              </div>
            </div>

            <div className="col-md-4 col-lg-3 valign">
              <Link
                href={`/contact/`}
              >
                <a
                  className="butn bord curve wow fadeInUp m-auto ms-md-auto"
                  data-wow-delay=".5s"
                >
                  <span>{t('common.getInTouch')}</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
}

export default CallToAction