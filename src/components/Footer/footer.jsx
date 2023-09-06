/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { useTranslation } from "react-i18next";
import i18n from "../../../config/i18n";
const Footer = ({ hideBGCOLOR }) => {
  const {t} = useTranslation()
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="item md-mb50">
              <div className="title" style={{textAlign: i18n.language === 'ar' ? 'right' : 'left'}}>
                <h5>{t('contact.contactUs')}</h5>
              </div>
              <ul>
                <li style={{textAlign: i18n.language  === 'ar' ? 'right' : 'left'}}>
                <span className="icon pe-7s-map-marker" style={{
  marginRight: i18n.language === 'ar' ? 'unset' : '30px',
}}></span>

                  <div className="cont">
                    <h6 > {t('contact.address')}</h6>
                    <p>{t('contact.addressDesc')}</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail" style={{
  marginRight: i18n.language === 'ar' ? 'unset' : '30px',
}}></span>
                  <div className="cont">
                  <h6 style={{textAlign: i18n.language  === 'ar' ? 'right' : 'left'}}>{t('contact.email')}</h6>
                    <p>info@drmaryamtamer.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call" style={{
  marginRight: i18n.language === 'ar' ? 'unset' : '30px',
}}></span>
                  <div className="cont">
                    <h6 style={{textAlign:i18n.language === "ar" ? "right" : "left"}}>{t('contact.phone')}</h6>
                    <a href="tel:201095125220"> <p>01095125220</p></a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="item">
              <div className="logo">
                <img src={appData.lightLogo} alt="" />
              </div>
              <div className="social">
                <a href="#0">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-instagram"></i>
                </a>

              </div>
              <div className="copy-right">
                <p>
                  © 2023 {''}
                  <Link
                    href="#"

                  >
                    <a target="_blank" style={{ color: 'gray' }}>{t('common.drMaryamTamerClinic')}</a>
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
