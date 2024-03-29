import React from "react";
import blog3Data from "../../data/blog3.json";
import LightTheme from "../../layouts/Light";
import Navbar from "../../components/Navbar/navbar";
import BlogDetails from "../../components/Blog-details/blog-details";
import PageHeader from "../../components/Page-header/page-header";
import Footer from "../../components/Footer/footer";
import CallToAction from "../../components/Call-to-action/call-to-action";
import PagesHeader from "../../components/Pages-header";
import Split from "../../components/Split";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useTranslation } from "react-i18next";
import i18n from "../../../config/i18n";
import Image from 'next/image'; 

const BlogDetailsLight = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  const {t} = useTranslation()

  const isMobile = useMediaQuery('(max-width: 768px)');
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
      <PagesHeader
        title={t('cases.caseFourTitle')}
      />
      <section className="blog-pg single section-padding " style={{ paddingTop: '100px' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4 order-2 order-md-1">
              <div className="mb-10">
              <img src="/final/case4.JPG" alt="افضل دكتور اسنان في مدينة نصر" />
              </div>
            </div>
            <div className="col-lg-8 order-1 order-md-2">
              <div className="post">
                <video data-overlay-dark="6" className="bg-img valign hero-video" style={{ width: '100%', height: !isMobile && '50vh', margin: 'auto' }} autoPlay loop muted playsinline>
                  <source src={"/final/case4video.mp4"} type="video/mp4" />
                </video>
                <div className="content">
                  <div className="row justify-content-center">
                    <div className="col-lg-10">
                      <div className="text py-5">
                          <p
                            className="wow txt mb-10 words chars splitting"
                            style={{textAlign : i18n.language === 'ar' ? 'right' : 'left'}}
                          >
                          {t('cases.caseFourDesc')}
                          </p>

                      </div>

                    </div>
                  </div>
                </div>
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

export default BlogDetailsLight;
