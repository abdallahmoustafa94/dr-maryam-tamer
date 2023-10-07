import React,{useState} from "react";
import Navbar from "../../components/Navbar/navbar";
import IntroWithSlider from "../../components/Intro-with-slider/intro-with-slider";
import AboutUs from "../../components/About-us/about-us";
import Services from "../../components/Services/services";
import Works from "../../components/Works/works";
import Numbers from "../../components/Numbers/numbers";
import VideoWithTestimonials from "../../components/Video-with-testimonials/video-with-testimonials";
import SkillsCircle from "../../components/Skills-circle/skills-circle";
import Clients from "../../components/Clients/clients";
import Blogs1 from "../../components/blogs/Blogs1/blogs1";
import appData from '../../data/app.json'
import CallToAction from "../../components/Call-to-action/call-to-action";
import Footer from "../../components/Footer/footer";
import LightTheme from "../../layouts/Light";
import Cases from "../../components/cases";
import Portfolio from "../../components/Portfolio/portfolio";
import ShowcasesGrid from "../../components/Showcases-grid/Showcases-grid";
import { useTranslation } from "react-i18next";
import { Col, Container, Modal, Row } from "react-bootstrap";
import { FaWhatsapp } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai';

const Homepage1 = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  const [offerModal, setOfferModal] = useState(false)
const {t} = useTranslation()
  React.useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }

    }, 0);
  
    
  }, [fixedSlider, MainContent, navbarRef]);

  React.useEffect(() => {
    // Set a timer to show the modal after 1 second
    const timer = setTimeout(() => {
      // Check the screen width and decide whether to show the modal
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setOfferModal(true); // Show the modal for screens smaller than Bootstrap's 'sm' (576px)
      }
    }, 2000);

    // Clear the timer if the component unmounts or if you want to cancel it for some reason
    return () => clearTimeout(timer);
  }, []);
  


  const buttonStyle = {
    padding: '15px', 
    backgroundColor: '#25d366',
    color: 'white',
    border: 'none',
    borderRadius: '15px',
    cursor: 'pointer',
    outline: 'none',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
    zIndex:'9999',
  };
  return (
    <LightTheme>
      <IntroWithSlider sliderRef={fixedSlider} />
      <div ref={MainContent} className="main-content">
        <AboutUs />
        <Services />
        <div className="row justify-content-center section-padding pb-70">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
               {t('home.casesSlogan')}
              </h6>
              <h3 className="wow">
                {t('home.casesTitle')}
              </h3>
            </div>
          </div>
        </div>
        <ShowcasesGrid />
        <CallToAction />
        <Footer />
      </div>
     
      <Modal
      style={{ zIndex:10000000}}
        size="lg"
        show={offerModal}
        onHide={() => setOfferModal(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
        dir="rtl"
      >
        
        <Modal.Header >
    <AiOutlineClose  onClick={() => setOfferModal(false)} style={{cursor:'pointer'}} size={24}/>
        </Modal.Header>
        <Modal.Body>
            <Row style={{height:'70vh'}}>
              <Col xs={{span:12, order:1}} sm={6} >
            <h1 style={{ fontSize: '32px', fontFamily: 'Cairo', fontWeight: '700' }} className="text-center">مرحبًا بك في  </h1>
            <h1 style={{ fontSize: '32px', fontFamily: 'Cairo', fontWeight: '700' }} className="text-center">  عيادة د.مريم تامر</h1>
  <h2 style={{ fontSize: '20px', fontFamily: 'Cairo' }} className="text-right mt-4">اتصل بنا الأن واسأل عن عروض شهر اكتوبر</h2>
  
      
      
      <a
      className="call"
        style={{ ...buttonStyle, backgroundColor: '#007bff',bottom:'150px', marginTop:40 }}
        href="tel:00201095125220"
      >
          <FiPhoneCall  className="call" style={{fontSize:'22px'}}/>
          <span className="call inline-block mr-2" >اتصل بنا</span>
      </a>    

      <a
  className="whatsapp"
  style={{ ...buttonStyle, backgroundColor: '#25d366', marginTop:12 }}
  href="https://wa.me/201095125220"
>
  <FaWhatsapp className="whatsapp" style={{fontSize:'22px'}}/>
  <span className="whatsapp inline-block mr-2" >احجز الان على واتساب</span>
</a>

              </Col>
              <Col xs={{span:12, order:2}} sm={6} style={{background:`url(/final/popup.jpeg)`,backgroundSize:'cover', backgroundPosition:'center center', minHeight: '200px'}}>
              
              </Col>
            </Row>
          
        </Modal.Body>
      </Modal>
    </LightTheme>
  );
};

export default Homepage1;
