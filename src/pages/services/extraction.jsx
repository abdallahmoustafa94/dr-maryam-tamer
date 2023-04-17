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
      <PagesHeader title="Tooth Extraction"/>
      <section className="intro-section py-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
                  <div className="wow imago valign " data-wow-delay=".3s">
                    <img src="/final/tooth-extraction.png" alt="" style={{width:isMobile ? '100%': '90%'}}/>
                  </div>
          </div>
               
                <div className="col-lg-8  col-md-8 valign" >
            <div className="text">
              <Split>
                <p
                  className="wow txt mb-10 words chars splitting"
                  data-splitting
                >
                Tooth extraction, also known as dental extraction, is a dental procedure that involves the removal of a tooth from its socket in the jawbone. This may be necessary for various reasons, such as severe tooth decay, advanced gum disease, trauma, overcrowding, or orthodontic purposes.

The process of tooth extraction typically begins with a thorough examination and evaluation by a dentist or oral surgeon. The patient may be given local anesthesia or sedation to ensure comfort during the procedure. The tooth is carefully loosened and then gently removed using specialized dental instruments. In some cases, the tooth may need to be sectioned or extracted in pieces for more complex extractions.

Following the extraction, the dentist may provide instructions for post-operative care, including pain management, oral hygiene, and dietary restrictions. Proper aftercare is crucial to promote healing and prevent complications.

While tooth extraction may seem intimidating, modern dental techniques and technology have made the procedure relatively quick and comfortable. Dentists prioritize conservative approaches and strive to save natural teeth whenever possible. However, in cases where tooth extraction is necessary, it can help alleviate pain, prevent further dental issues, and create a healthier foundation for future dental treatments, such as dental implants or dentures.

If you require a tooth extraction, it's important to consult with a qualified dentist or oral surgeon to discuss the best treatment plan and ensure a safe and successful extraction procedure.
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
