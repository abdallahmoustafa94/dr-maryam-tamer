import React from "react";
import Navbar from "../../components/Navbar/navbar";

import CallToAction from "../../components/Call-to-action/call-to-action";
import Footer from "../../components/Footer/footer";
import PagesHeader from "../../components/Pages-header";
import LightTheme from '../../layouts/Light'

import Split from "../../components/Split";
import useMediaQuery from "../../hooks/useMediaQuery";
const About = () => {
 const navbarRef = React.useRef(null);
 const logoRef = React.useRef(null);
 const isMobile = useMediaQuery('(max-width: 768px)');
 React.useEffect(() => {
   var navbar = navbarRef.current,
     logo = logoRef.current;
   if (window.pageYOffset > 300) {
     navbar.classList.add("nav-scroll");
   } else {
     navbar.classList.remove("nav-scroll");
   }
   window.addEventListener("scroll", () => {
     if (window.pageYOffset > 300) {
       navbar.classList.add("nav-scroll");
     } else {
       navbar.classList.remove("nav-scroll");
     }
   });
 }, [navbarRef]);
  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <PagesHeader title="Root Canal Treatment"/>
      <section className="intro-section py-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
                  <div className="wow imago valign " data-wow-delay=".3s">
                    <img src="/final/services1.jpeg" alt="" style={{width:isMobile ? '100%' : '90%'}}/>
                  </div>
          </div>
               
                <div className="col-lg-8  col-md-8 valign" >
            <div className="text">
              <Split>
                <p
                  className="wow txt mb-10 words chars splitting"
                  data-splitting
                >
                 Root canal treatment, also known as endodontic therapy, is a specialized dental procedure designed to save a tooth that has been severely infected or damaged. It involves the removal of the infected pulp from the tooth's inner chamber, known as the root canal, followed by cleaning, shaping, and sealing of the canal to prevent further infection. Root canal treatment is typically performed under local anesthesia to ensure patient comfort. Once the infected pulp is removed and the canal is thoroughly cleaned, a biocompatible material is used to seal the canal, preventing bacteria from re-entering the tooth. A dental crown or filling is then placed on top of the treated tooth to restore its strength, function, and appearance. Root canal treatment is a highly effective way to save a tooth that would otherwise require extraction, allowing patients to retain their natural teeth and avoid the need for more extensive dental procedures. With advancements in modern dentistry, root canal treatment can be completed with minimal discomfort, and the restored tooth can last for many years with proper care, helping patients maintain a healthy and functional smile.
                </p>
               
              </Split>
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
