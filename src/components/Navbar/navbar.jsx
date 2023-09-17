/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";
import { useTranslation } from 'react-i18next';
import i18n from "../../../config/i18n";


const Navbar = ({ lr, nr, theme }) => {
  const { t } = useTranslation();
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link href="/">
          <a className="logo">
            {theme ? (
              theme === "themeL" ? (
                <img ref={lr} src="/final/logo.png" alt="logo" />
              ) : (
                <img ref={lr} src="/final/logo.png" alt="logo" />
              )
            ) : (
              <img ref={lr} src="/final/logo.png" alt="logo" style={{width:'50px'}}/>
            )}
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className={`navbar-nav ${ i18n.language === "ar" ? "mr-auto" :  "ml-auto"}`}>
          <li className="nav-item">
              <Link href={`/`}>
                <a className="nav-link">{t('menu.home')}</a>
              </Link>
          </li>
          <li className="nav-item">
              <Link href={`/about`}>
                <a className="nav-link">{t('menu.about')}</a>
              </Link>
          </li>
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {t('menu.services')}
              </span>
              <div className="dropdown-menu"  style={{textAlign: i18n.language === "ar" ? 'center' : 'center'}}>
                <Link href={`/services/composite-restoration`}>
                  <a className="dropdown-item">{t('services.compositeTitle')}</a>
                </Link>
                <Link href={`/services/root-canal-treatment`}>
                  <a className="dropdown-item">{t('services.rootCanalTitle')}</a>
                </Link>
                <Link href={`/services/veneers`}>
                  <a className="dropdown-item">{t('services.veneersTitle')}</a>
                </Link>
                <Link href={`/services/extraction`}>
                  <a className="dropdown-item">{t('services.extractionTitle')}</a>
                </Link>
                <Link href={`/services/bleaching`}>
                  <a className="dropdown-item">{t('services.bleachingTitle')}</a>
                </Link>
                <Link href={`/services/crowns-and-bridges`}>
                  <a className="dropdown-item">{t('services.crownsTitle')}</a>
                </Link>
                <Link href={`/services/braces`}>
                  <a className="dropdown-item">{t('services.bracesTitle')}</a>
                </Link>
                <Link href={`/services/implant`}>
                  <a className="dropdown-item">{t('services.implantTitle')}</a>
                </Link>
                <Link href={`/services/children`}>
                  <a className="dropdown-item">{t('services.childrenTitle')}</a>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href={`/cases`}>
                <a className="nav-link">{t('menu.cases')}</a>
              </Link>
          </li>
           
          
           
            <li className="nav-item">
              <Link href={`/contact/`}>
                <a className="nav-link">{t('menu.contact')}</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  }
}
export default Navbar;
