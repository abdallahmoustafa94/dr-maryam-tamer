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
  const isMobile = useMediaQuery('(max-width: 768px)');
  const {t} = useTranslation()


  return (
    <LightTheme>
      <PagesHeader
        title={t('cases.caseOneTitle')}
      />
      <section className="blog-pg single section-padding " style={{ paddingTop: '100px' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4 order-2 order-md-1">
              <div className="mb-10">
                <Image width={400} height={600} src="/final/case1.webp" alt="" />
              </div>
            </div>
            <div className="col-lg-8 order-1 order-md-2">
              <div className="post">
                <video data-overlay-dark="6" className="bg-img valign hero-video" style={{ width: '100%', height: !isMobile && '50vh', margin: 'auto' }} autoPlay loop muted playsinline>
                  <source src={"/final/case1video.mp4"} type="video/mp4" />
                </video>
                <div className="content">
                  <div className="row justify-content-center">
                    <div className="col-lg-10">
                      <div className="text py-5">
                          <p
                            className="wow txt mb-10 words chars splitting"
                            style={{textAlign : i18n.language === 'ar' ? 'right' : 'left'}}
                          >
                          {t('cases.caseOneDesc')}
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
