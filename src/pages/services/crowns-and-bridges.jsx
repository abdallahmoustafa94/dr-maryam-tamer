import React from "react";
import Navbar from "../../components/Navbar/navbar";

import CallToAction from "../../components/Call-to-action/call-to-action";
import Footer from "../../components/Footer/footer";
import PagesHeader from "../../components/Pages-header";
import LightTheme from '../../layouts/Light'

import Split from "../../components/Split";

const About = () => {
 const navbarRef = React.useRef(null);
 const logoRef = React.useRef(null);

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
      <PagesHeader />
      <section className="intro-section py-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
                  <div className="wow imago valign " data-wow-delay=".3s">
                    <img src="/final/case1.jpeg" alt="" />
                  </div>
          </div>
               
                <div className="col-lg-8  col-md-8 valign" >
            <div className="text">
              <Split>
                <p
                  className="wow txt mb-10 words chars splitting"
                  data-splitting
                >
              Crowns and bridges are common dental restorations used to repair and restore damaged or missing teeth, helping patients achieve a healthy and functional smile.

A dental crown is a custom-made cap that covers the entire surface of a damaged tooth, providing protection, strength, and improved aesthetics. It is typically recommended for teeth that have undergone extensive decay, fractures, or root canal treatment, or to improve the appearance of misshapen or discolored teeth. The process of getting a dental crown involves preparing the tooth, taking impressions, and fabricating a custom crown that fits snugly over the tooth. Dental crowns are typically made from durable materials, such as porcelain, metal, or a combination of both, and are designed to blend seamlessly with the patient's natural teeth.

A dental bridge, on the other hand, is a fixed dental restoration that replaces one or more missing teeth by bridging the gap between adjacent teeth. It consists of one or more artificial teeth, called pontics, that are attached to dental crowns on either side. The dental crowns are then affixed to the adjacent teeth, anchoring the bridge in place. Dental bridges are used to restore the function and aesthetics of missing teeth, preventing issues such as shifting of surrounding teeth, bite problems, and speech difficulties.

Both dental crowns and bridges are custom-made to fit each patient's unique dental anatomy and are created to match the shape, size, and color of the patient's natural teeth, ensuring a seamless and natural-looking result. They are durable, long-lasting, and can significantly improve the functionality, aesthetics, and overall oral health of patients with damaged or missing teeth.

To determine if dental crowns or bridges are appropriate for your dental needs, it's essential to consult with a qualified dentist. Your dentist will conduct a comprehensive evaluation, consider your oral health, dental history, and treatment goals, and recommend the most appropriate treatment plan to restore the health and beauty of your smile.
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
