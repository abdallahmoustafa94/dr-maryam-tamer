import React from "react";
import Navbar from "../../components/Navbar/navbar";
import IntroWithSlider from "../../components/Intro-with-slider/intro-with-slider";
import AboutUs from "../../components/About-us/about-us";
import Services from "../../components/Services/services";
import Works from "../../components/Works/works";
import Numbers from "../../components/Numbers/numbers";
import VideoWithTestimonials from "../../components/Video-with-testimonials/video-with-testimonials";
import SkillsCircle from "../../components/Skills-circle/skills-circle";
import Clients from "../../components/Clients/clients";
import Blogs1 from "../../components/blogs/Blogs1/blogs1";
import appData from '../../data/app.json'
import CallToAction from "../../components/Call-to-action/call-to-action";
import Footer from "../../components/Footer/footer";
import LightTheme from "../../layouts/Light";
import Cases from "../../components/cases";
import Portfolio from "../../components/Portfolio/portfolio";
import ShowcasesGrid from "../../components/Showcases-grid/Showcases-grid";
import { useTranslation } from "react-i18next";
const Homepage1 = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
const {t} = useTranslation()
  React.useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }

    }, 0);
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
        logo?.setAttribute("src", appData.darkLogo);
      } else {
        navbar?.classList.remove("nav-scroll");
        logo?.setAttribute("src", appData.lightLogo);
      }
    });
  }, [fixedSlider, MainContent, navbarRef]);
  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <IntroWithSlider sliderRef={fixedSlider} />
      <div ref={MainContent} className="main-content">
        <AboutUs />
        <Services />
        <div className="row justify-content-center section-padding pb-70">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
               {t('home.casesSlogan')}
              </h6>
              <h3 className="wow">
                {t('home.casesTitle')}
              </h3>
            </div>
          </div>
        </div>
        <ShowcasesGrid />
        <CallToAction />
        <Footer />
      </div>
    </LightTheme>
  );
};

export default Homepage1;
