import React from "react";
import Split from "../Split";
import AboutUs1Date from "../../data/sections/about-us1.json";
import { useTranslation } from "react-i18next";
import i18n from "../../../config/i18n";
const AboutIntro = () => {
  const {t} = useTranslation()
  return (
    <section className="intro-section py-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h5 style={{textAlign:i18n.language === "ar" ? 'right' : 'left'}}> {t('about.about')} <br /> {t('common.drMaryamTamer')}</h5>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8" style={{textAlign:i18n.language === "ar" ? 'right' : 'left'}}>
            <div className="text">
                <p
                  className="wow txt mb-10 words chars splitting"
                  data-splitting
                >
                  {t('about.aboutDesc')}
                </p>
               
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
