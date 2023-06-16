import React from "react";
import Navbar from "../../components/Navbar/navbar";

import CallToAction from "../../components/Call-to-action/call-to-action";
import Footer from "../../components/Footer/footer";
import PagesHeader from "../../components/Pages-header";
import LightTheme from '../../layouts/Light'

import Split from "../../components/Split";
import useMediaQuery from "../../hooks/useMediaQuery";
import Carousel from 'react-bootstrap/Carousel';


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
      <PagesHeader title="Veneers"/>
      <section className="intro-section py-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
                  {/* <div className="wow imago valign " data-wow-delay=".3s">
                    <img src="/final/case3.jpg" alt="" style={{width:isMobile ? "100%" : "90%"}}/>
                  </div> */}

<Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/case3.jpg"
          alt=""
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/case3-2.jpg"
          alt=""
        />

     
      </Carousel.Item>
   
    </Carousel>
  

          </div>
               
                <div className="col-lg-8  col-md-8 valign" >
            <div className="text">
              <Split>
                <p
                  className="wow txt mb-10 words chars splitting"
                  data-splitting
                >
                Veneers are a popular cosmetic dental treatment that can transform the appearance of teeth by improving their color, shape, size, and alignment. Veneers are thin, custom-made shells typically made of porcelain or composite resin that are bonded to the front surface of the teeth. They are designed to look like natural teeth and can create a dramatically enhanced and aesthetically pleasing smile.

The process of getting veneers typically involves a consultation with a cosmetic dentist to discuss the desired outcome and determine the most appropriate treatment plan. During the procedure, a small amount of enamel is removed from the front surface of the teeth to create space for the veneers. Then, precise impressions of the teeth are taken to fabricate the custom veneers in a dental lab. Once the veneers are ready, they are carefully bonded to the teeth using a strong adhesive. The dentist will ensure that the veneers fit perfectly and look natural, making any necessary adjustments to achieve the desired results.

Veneers are known for their durability and resistance to staining, making them a long-lasting cosmetic solution for improving the appearance of teeth. They can correct a variety of cosmetic concerns, such as discoloration, chips, cracks, gaps, and misalignment, resulting in a stunning and flawless smile. With proper oral hygiene and regular dental check-ups, veneers can provide patients with a radiant and confident smile for many years to come.
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
