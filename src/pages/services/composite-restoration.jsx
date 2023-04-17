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
      <PagesHeader title="Composite Restoration"/>
      <section className="intro-section py-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
                  <div className="wow imago valign " data-wow-delay=".3s">
                    <img src="/final/services1-2.jpeg" alt="" style={{width:isMobile ? '100%': '90%'}}/>
                  </div>
          </div>
               
                <div className="col-lg-8  col-md-8 valign" >
            <div className="text">
              <Split>
                <p
                  className="wow txt mb-10 words chars splitting"
                  data-splitting
                >
                  Composite restoration, also known as tooth-colored filling, is a modern dental procedure used to restore decayed or damaged teeth with a natural-looking and durable material. It involves the use of a tooth-colored composite resin that is carefully matched to the color of the patient's natural teeth, making it virtually indistinguishable from the surrounding tooth structure. Composite restoration is a conservative and minimally invasive approach, as it requires the removal of only the decayed or damaged portion of the tooth, preserving the remaining healthy tooth structure. The composite resin is then applied in layers, sculpted to the desired shape, and bonded to the tooth using a special curing light. The result is a seamless and aesthetically pleasing restoration that blends seamlessly with the natural teeth, restoring both the form and function of the tooth. Composite restorations are not only durable and long-lasting but also biocompatible and free of harmful metals, making them a popular choice for achieving a beautiful and healthy smile.
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
