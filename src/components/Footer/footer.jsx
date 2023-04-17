/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6> Address</h6>
                    <p>9 Omarat Al Saudeya, Masaken Al Mohandesin, Nasr City, Cairo Governorate 4451701</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email</h6>
                    <p>info@drmaryamtamer.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Phone</h6>
                    <p>01024188478</p>
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
                    <a target="_blank" style={{color:'gray'}}>Dr.Maryam Tamer</a>
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
