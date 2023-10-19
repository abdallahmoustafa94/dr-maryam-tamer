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
import { useTranslation } from "react-i18next";
import i18n from "../../../config/i18n";
import Image from 'next/image';

const BlogDetailsLight = () => {

  const {t} = useTranslation()

  return (
    <LightTheme>
      <PagesHeader
        title={t('cases.caseTwoTitle')}
      />
      <section className="blog-pg single section-padding " style={{ paddingTop: '100px' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4 order-2 order-md-1">
              <div className="mb-10">
              <img src="/final/case2.jpg" alt="افضل عيادة اسنان في مدينة نصر" />
              </div>
            </div>
            <div className="col-lg-8 order-1 order-md-2">
              <div className="post">
                {/* <video data-overlay-dark="6" className="bg-img valign hero-video" style={{width:'100%',height:'50vh',margin:'auto'}}  autoPlay loop muted>
<source src={ "/final/case1video.mp4"} type="video/mp4" />
</video> */}
                <div className="content">
                  <div className="row justify-content-center">
                    <div className="col-lg-10">
                      <div className="text py-5">
                          <p
                            className="wow txt mb-10 words chars splitting"
                            style={{textAlign : i18n.language === 'ar' ? 'right' : 'left'}}
                          >
                             {t('cases.caseTwoDesc')}
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
