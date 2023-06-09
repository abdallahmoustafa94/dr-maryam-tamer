/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";

const Navbar = ({ lr, nr, theme }) => {
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
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <Link href={`/`}>
                <a className="nav-link">Home</a>
              </Link>
          </li>
          <li className="nav-item">
              <Link href={`/about`}>
                <a className="nav-link">About</a>
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
                Services
              </span>
              <div className="dropdown-menu">
                <Link href={`/services/composite-restoration`}>
                  <a className="dropdown-item">Composite Restoration</a>
                </Link>
                <Link href={`/services/root-canal-treatment`}>
                  <a className="dropdown-item">Root Canal treatment</a>
                </Link>
                <Link href={`/services/veneers`}>
                  <a className="dropdown-item">Veneers</a>
                </Link>
                <Link href={`/services/extraction`}>
                  <a className="dropdown-item">Extraction</a>
                </Link>
                <Link href={`/services/bleaching`}>
                  <a className="dropdown-item">Bleaching</a>
                </Link>
                <Link href={`/services/crowns-and-bridges`}>
                  <a className="dropdown-item">Crowns And Bridges</a>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href={`/cases`}>
                <a className="nav-link">Cases</a>
              </Link>
          </li>
           
          
           
            <li className="nav-item">
              <Link href={`/contact/`}>
                <a className="nav-link">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
