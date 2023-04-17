/* eslint-disable @next/next/no-img-element */
import React from "react";
import cardMouseEffect from "../../common/cardMouseEffect";
import { thumparallaxDown } from "../../common/thumparallax";

const MinimalArea = () => {
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area" style={{marginTop : '100px'}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
          <div className="cool-box">
      <img className="cool-box__image" src="/final/maryam-2.png"  />
    </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content pt-0">
              <p className="wow txt mt-4 mt-md-0" data-splitting>
              Empowering Your Smile, Enriching Your Life: Learn About the Passion for Dentistry and the Patient-Centric Approach.
              </p>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>1</span>Mission
                  </h6>
                  <p>
                  Providing exceptional dental care in a warm and welcoming environment.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                    <span>2</span>Vision
                  </h6>
                  <p>
                  Becoming a trusted leader in dental care, known for innovative solutions and outstanding patient experience.luctus massa ipsum at tempus eleifend congue lectus bibendum
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6>
                    <span>3</span>Goals
                  </h6>
                  <p>
                  Comprehensive care, lasting relationships, patient satisfaction, preventive focus, and continuous innovation.
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
