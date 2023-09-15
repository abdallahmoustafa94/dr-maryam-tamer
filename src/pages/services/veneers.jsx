import React from "react";
import Navbar from "../../components/Navbar/navbar";

import CallToAction from "../../components/Call-to-action/call-to-action";
import Footer from "../../components/Footer/footer";
import PagesHeader from "../../components/Pages-header";
import LightTheme from '../../layouts/Light'

import Split from "../../components/Split";
import useMediaQuery from "../../hooks/useMediaQuery";
import Carousel from 'react-bootstrap/Carousel';
import { useTranslation } from "react-i18next";
import i18n from "../../../config/i18n";

const About = () => {
 const navbarRef = React.useRef(null);
 const logoRef = React.useRef(null);
 const isMobile = useMediaQuery('(max-width: 768px)');

 const {t} = useTranslation()


 React.useEffect(() => {
   var navbar = navbarRef.current,
     logo = logoRef.current;
   if (window.pageYOffset > 300) {
     navbar?.classList.add("nav-scroll");
   } else {
     navbar?.classList.remove("nav-scroll");
   }
   window.addEventListener("scroll", () => {
     if (window.pageYOffset > 300) {
       navbar?.classList.add("nav-scroll");
     } else {
       navbar?.classList.remove("nav-scroll");
     }
   });
 }, [navbarRef]);
  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <PagesHeader title={t('services.veneersTitle')}/>
      <section className="intro-section py-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
                  {/* <div className="wow imago valign " data-wow-delay=".3s">
                    <img src="/final/case3.jpg" alt="" style={{width:isMobile ? "100%" : "90%"}}/>
                  </div> */}

<Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/case3.JPG"
          alt=""
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/case3-2.JPG"
          alt=""
        />

     
      </Carousel.Item>
   
    </Carousel>
  

          </div>
               
                <div className="col-lg-8  col-md-8 valign py-5" >
            <div className="text">
                <p
                  className="wow txt mb-10 words chars splitting"
                  data-splitting
                  style={{textAlign : i18n.language === 'ar' ? 'right' : 'left'}}
                >
                {t('services.veneersLongDesc')}?
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
