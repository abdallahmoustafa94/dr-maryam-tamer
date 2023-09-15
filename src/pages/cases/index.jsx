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
import Portfolio from "../../components/Portfolio/portfolio";
import { useTranslation } from "react-i18next";

const BlogDetailsLight = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const {t} = useTranslation()

  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  return (
    <LightTheme>
      <PagesHeader
      title={t('home.sliderTwo')} />
         <Portfolio grid={2}  />
    <CallToAction />
          <Footer />
    </LightTheme>
  );
};

export default BlogDetailsLight;
