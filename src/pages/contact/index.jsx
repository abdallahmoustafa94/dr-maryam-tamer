/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import LightTheme from "../../layouts/Light";
import ContactHeader from "../../components/Contact-header/contact-header";
import ContactForm from "../../components/Contact-form/contact-form";
import PagesHeader from "../../components/Pages-header";
import { useTranslation } from "react-i18next";


const Contact = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  const {t} = useTranslation()


  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <PagesHeader  />
      <div className="main-content">
        <ContactForm />
        <Footer hideBGCOLOR />
      </div>
    </LightTheme>
  );
};

export default Contact;
