import React from "react";
import Navbar from "../../components/Navbar/navbar";

import CallToAction from "../../components/Call-to-action/call-to-action";
import Footer from "../../components/Footer/footer";
import PagesHeader from "../../components/Pages-header";
import LightTheme from '../../layouts/Light'

import Split from "../../components/Split";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useTranslation } from "react-i18next";
import i18n from "../../../config/i18n";
import Image from 'next/image';

const About = () => {

 const isMobile = useMediaQuery('(max-width: 768px)');
 const {t} = useTranslation()


  return (
    <LightTheme>
      <PagesHeader title={t('services.extractionTitle')}/>
      <section className="intro-section py-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
                  <div className="wow imago valign " data-wow-delay=".3s">
                    <Image src="/final/tooth-extraction.webp" alt="" width={400} height={400} />
                  </div>
          </div>
               
                <div className="col-lg-8  col-md-8 valign py-5" >
            <div className="text">
                <p
                  className="wow txt mb-10 words chars splitting"
                  data-splitting
                  style={{textAlign : i18n.language === 'ar' ? 'right' : 'left'}}
                >
              {t('services.extractionLongDesc')}
                </p>
               
            </div>
          </div>
              </div>
      </div>
    </section>
      <CallToAction />
      <Footer />
    </LightTheme>
  );
};

export default About;
