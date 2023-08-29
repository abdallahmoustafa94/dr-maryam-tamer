import React from "react";
import Homepage1 from "./homepage/home1-light";
import { FaWhatsapp } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'


const Home = () => {
  return (
    <>
      <Homepage1 />
      <FaWhatsapp onClick={() => window.location.href = "https://wa.me/201095125220"} size={50} style={{ color: '#25D366', cursor: 'pointer', position: 'fixed', bottom: '12%', right: '2%', zIndex: '9999' }} />
      <FiPhoneCall onClick={() => window.location.href = "tel:201095125220"} size={50} style={{ color: '#15B2F7', cursor: 'pointer', position: 'fixed', bottom: '20%', right: '2%', zIndex: '9999' }} />

    </>
  );
};

export default Home;
