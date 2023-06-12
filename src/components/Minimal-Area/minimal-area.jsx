/* eslint-disable @next/next/no-img-element */
import React from "react";
import cardMouseEffect from "../../common/cardMouseEffect";
import { thumparallaxDown } from "../../common/thumparallax";
import useMediaQuery from "../../hooks/useMediaQuery";

const MinimalArea = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area" style={{ marginTop: '100px' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <video data-overlay-dark="6" className="bg-img valign hero-video" style={{ width: '100%', height: !isMobile && '50vh', margin: 'auto' }} autoPlay loop muted playsinline>
              <source src={"/final/video-about.mp4"} type="video/mp4" />
            </video>
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
                    Becoming a trusted leader in dental care, known for innovative solutions and outstanding patient experience.
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
