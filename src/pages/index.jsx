import React from "react";
import Homepage1 from "./homepage/home1-light";
import { FaWhatsapp } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import LanguageSwitcher from "../components/languageSwitcher";

const Home = () => {

  const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    padding: '15px', // Increased padding for larger buttons
    backgroundColor: '#25d366',
    color: 'white',
    border: 'none',
    borderRadius: '50%', // Rounded shape
    cursor: 'pointer',
    outline: 'none',
    fontSize: '28px', // Increased font size for larger buttons
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', // Add a subtle shadow
    zIndex:'9999'
  };
  return (
    <>
      <Homepage1 />
      <LanguageSwitcher />
      <a
      className="whatsapp"
        style={{ ...buttonStyle, backgroundColor: '#25d366' }}
        href="https://wa.me/201095125220"
      >
        <FaWhatsapp  className="whatsapp" />
      </a>
      
      
      <a
      className="call"
        style={{ ...buttonStyle, backgroundColor: '#007bff',bottom:'90px' }}
        href="tel:00201095125220"
      >
          <FiPhoneCall  className="call" />
      </a>    
    

    </>
  );
};

export default Home;
