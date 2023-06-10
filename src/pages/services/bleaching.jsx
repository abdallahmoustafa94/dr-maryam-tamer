import React from "react";
import Navbar from "../../components/Navbar/navbar";

import CallToAction from "../../components/Call-to-action/call-to-action";
import Footer from "../../components/Footer/footer";
import PagesHeader from "../../components/Pages-header";
import LightTheme from '../../layouts/Light'
import useMediaQuery from "../../hooks/useMediaQuery";
import Split from "../../components/Split";

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
      <PagesHeader title="Bleaching" />
      <section className="intro-section py-5 pb-5">
        <div className="container">
          <div className="row">
          <div className="col-lg-4">
                  <div className="wow imago valign " data-wow-delay=".3s">
                    <img src="/final/bleaching.jpg" alt="" />
                  </div>
          </div>

            <div className="col-lg-8  col-md-8 valign" >
              <div className="text">
                <Split>
                  <p
                    className="wow txt mb-10 words chars splitting"
                    data-splitting
                  >
                    Teeth bleaching, also known as teeth whitening, is a popular cosmetic dental treatment that aims to lighten the color of teeth and improve their overall appearance. Teeth can become stained or discolored due to various factors, such as aging, genetics, certain foods and beverages, tobacco use, and poor oral hygiene.

                    The process of teeth bleaching typically involves the application of a bleaching agent to the teeth, which breaks down the stains and discoloration. There are several methods of teeth bleaching, including in-office bleaching performed by a dentist, at-home bleaching using custom-made trays and bleaching gel provided by a dentist, or over-the-counter bleaching products available in stores.

                    Teeth bleaching is a safe and effective procedure when performed under the guidance of a qualified dentist. The dentist will evaluate the patient's oral health and determine the most appropriate bleaching method based on their individual needs and goals. The bleaching process may take multiple sessions or weeks, depending on the desired level of whitening and the method used.

                    After teeth bleaching, it's important to follow the dentist's instructions for post-treatment care, including avoiding foods and beverages that may stain the teeth, maintaining good oral hygiene, and attending regular dental check-ups. Teeth bleaching can produce noticeable results, creating a brighter and more youthful smile that can boost self-confidence and improve overall dental aesthetics.

                    It's essential to consult with a qualified dentist before undergoing any teeth bleaching treatment to ensure safety and efficacy. Your dentist will provide personalized care and guidance, taking into consideration your oral health, dental history, and desired outcome, to help you achieve a whiter and more radiant smile.
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
