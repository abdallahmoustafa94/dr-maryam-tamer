/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import AboutUs1Date from "../../data/sections/about-us1.json";
import useMediaQuery from "../../hooks/useMediaQuery";
import ReactPlayer from "react-player";

const AboutUs = () => {
  const isDesktop = useMediaQuery('(min-width: 769px)');

  return (
    <section className="about-us section-padding pb-0" style={{ paddingBottom: '0' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-2 order-md-1 valign mb-0 md-mb50">
            <div>
              <h6 className="fw-100 text-u ls10 mb-10">
                {AboutUs1Date.smallTitle}
              </h6>
              <h3 className="fw-600 text-u ls1 mb-30 ">
                {AboutUs1Date.title}
              </h3>
              <p>{AboutUs1Date.content}</p>
              <Link href="/about/">
                <a className="butn bord curve mt-30">
                  <span>Read More</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-md-2 img">
          <ReactPlayer
      url={"/final/case3video.mp4"}
      playing
      loop
      muted
      playsinline
      width="100%"
      height={isDesktop && '70vh'}
      style={{ margin: 'auto' }}
    />

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
