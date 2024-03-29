import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/navbar";
import Services from "../../components/Services/services";
import VideoWithTestimonials from "../../components/Video-with-testimonials/video-with-testimonials";
import SkillsCircle from "../../components/Skills-circle/skills-circle";
import Clients from "../../components/Clients/clients";
import CallToAction from "../../components/Call-to-action/call-to-action";
import Footer from "../../components/Footer/footer";
import PagesHeader from "../../components/Pages-header";
import AboutIntro from "../../components/About-intro";
import LightTheme from '../../layouts/Light'
import Team from "../../components/Team/team";
import MinimalArea from "../../components/Minimal-Area/minimal-area";
import { useTranslation } from "react-i18next";

const About = () => {

  const {t} = useTranslation()
 

  return (
    <LightTheme>
      <PagesHeader title={t('home.sliderTwo')} />
      <AboutIntro />
      <MinimalArea />
      <CallToAction />
      <Footer />
    </LightTheme>
  );
};

export default About;
