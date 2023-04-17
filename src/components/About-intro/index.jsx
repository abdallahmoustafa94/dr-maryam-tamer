import React from "react";
import Split from "../Split";
import AboutUs1Date from "../../data/sections/about-us1.json";

const AboutIntro = () => {
  return (
    <section className="intro-section py-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h5> About <br /> Dr.Maryam Tamer</h5>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p
                  className="wow txt mb-10 words chars splitting"
                  data-splitting
                >
                  {AboutUs1Date.content}
                </p>
               
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
