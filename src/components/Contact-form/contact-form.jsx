import React from "react";
import ContactFromDate from "../../data/sections/form-info.json";
import { Formik, Form, Field } from "formik";
import { useTranslation } from "react-i18next";
import i18n from "../../../config/i18n";
const ContactForm = () => {
  const messageRef = React.useRef(null);
  const {t} = useTranslation()
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="map" id="ieatmaps">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.2221574896103!2d31.3684443!3d30.0591659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583dc25f5e8555%3A0xbd4eaa7f7e796599!2sMedical%20Center%203!5e0!3m2!1sen!2sus!4v1693971911424!5m2!1sen!2sus" loading="lazy" ></iframe>

            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="cont-info" style={{textAlign:i18n.language === "ar" ? 'right' : 'left'}}>
              <h4 className="fw-700  mb-50">{t('contact.contactInfo')}</h4>
            
              <div className="item mb-40">
                <h5>
                  <a href="#0">info@drmaryamtamer.com</a>
                </h5>
                <a href="tel:201095125220"> <h5>01095125220</h5></a>
              </div>
              <h3 className="wow" data-splitting>
                {t('contact.visitUs')}
              </h3>
              <div className="item">
                <h6>
                 {t('contact.addressDesc')}

                </h6>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
