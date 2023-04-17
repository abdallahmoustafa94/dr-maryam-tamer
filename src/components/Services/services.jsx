import React from "react";
import Link from 'next/link'



const Services = ({ style, lines }) => {

  return (
    <section
      className={`services bords section-padding pb-0`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
              Discover the Art of Dentistry with Our
              </h6>
              <h3 className="wow">
              Services
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
                <div
                  className="col-lg-4 wow fadeInLeft"
                  data-wow-delay='.5'
            >
                  <div className="item-box">
                    <div>
                      <img src="/final/cavity.png" style={{width:'60px'}}/>
                    </div>
                    <div className="cont">
                      <h6>Composite restoration</h6>
                      <p>Natural-Looking Smile Repair. Minimally invasive, tooth-colored composite resin repairs cavities, chips, breaks, and gaps for a restored and aesthetically pleasing smile.</p>
                      <div className="btn-more">
                    <Link href="/services/composite-restoration">
                    <a className="simple-btn mt-3">
                      Read More
                    </a>
                    </Link>
                  </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 wow fadeInLeft"
                  data-wow-delay='.5'
            >
                  <div className="item-box">
                    <div>
                      <img src="/final/root-canal.png" style={{width:'60px'}}/>
                    </div>
                    <div className="cont">
                      <h6>Root canal treatment</h6>
                      <p>Saving Teeth, Relieving Pain. Preserve your smile with this common dental procedure that treats infected or decayed teeth, offering effective and comfortable endodontic therapy.</p>
                    <div className="btn-more">
                    <Link href="/services/root-canal-treatment">
                    <a className="simple-btn mt-3">
                      Read More
                    </a>
                    </Link>
                  </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 wow fadeInLeft"
                  data-wow-delay='.5'
            >
                  <div className="item-box">
                    <div>
                      <img src="/final/dental-veneer.png" style={{width:'60px'}}/>
                    </div>
                    <div className="cont">
                      <h6>Veneers</h6>
                      <p>Smile Transformations. Custom-made shells for stunning results. Enhance your smile with thin covers that mask imperfections and create a beautiful, natural-looking appearance.</p>
                    </div>
                    <div className="btn-more">
                    <Link href="/services/veneers">
                    <a className="simple-btn mt-3">
                      Read More
                    </a>
                    </Link>
                  </div>
                  </div>
                </div>
               
        </div>
        <div className="row mt-lg-4">
                <div
                  className="col-lg-4 wow fadeInLeft"
                  data-wow-delay='.5'
            >
                  <div className="item-box">
                    <div>
                      <img src="/final/tooth-extraction.png" style={{width:'60px'}}/>
                    </div>
                    <div className="cont">
                      <h6>Extraction</h6>
                      <p>Problem Teeth Removed. Resolve dental issues with this common procedure that removes problematic teeth, alleviating pain and improving oral health for a brighter smile.</p>
                      <div className="btn-more">
                    <Link href="/services/extraction">
                    <a className="simple-btn mt-3">
                      Read More
                    </a>
                    </Link>
                  </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 wow fadeInLeft"
                  data-wow-delay='.5'
            >
                  <div className="item-box">
                    <div>
                      <img src="/final/bleaching.png" style={{width:'60px'}}/>
                    </div>
                    <div className="cont">
                      <h6>Bleaching</h6>
                      <p>Enhance Your Smile. Safe, effective tooth whitening for a brighter appearance. Boost confidence with radiant results, improving dental aesthetics and smile.</p>
                    <div className="btn-more">
                    <Link href="/services/bleaching">
                    <a className="simple-btn mt-3">
                      Read More
                    </a>
                    </Link>
                  </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 wow fadeInLeft"
                  data-wow-delay='.5'
            >
                  <div className="item-box">
                    <div>
                      <img src="/final/bridge.png" style={{width:'60px'}}/>
                    </div>
                    <div className="cont">
                      <h6>Crowns and bridges</h6>
                      <p>Restore Your Smile. Customized solutions for missing or damaged teeth. Enhance dental aesthetics and functionality with safe, effective crowns and bridges.</p>
                    </div>
                    <div className="btn-more">
                    <Link href="/services/crowns-and-bridges">
                    <a className="simple-btn mt-3">
                      Read More
                    </a>
                    </Link>
                  </div>
                  </div>
                </div>
               
        </div>
      </div>
      <section>
      
     
   
     

    </section>
    
    </section>
    
  );
};

export default Services;
