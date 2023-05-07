import React from "react";
import ContactFromDate from "../../data/sections/form-info.json";
import { Formik, Form, Field } from "formik";

const ContactForm = () => {
  const messageRef = React.useRef(null);
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
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13810.673262364526!2d31.3398875!3d30.0750406!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fbb0347a73b%3A0xb23ab6a228633253!2sGlobal%20dental%20clinic!5e0!3m2!1sen!2seg!4v1681711231950!5m2!1sen!2seg" loading="lazy" ></iframe>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="cont-info">
              <h4 className="fw-700  mb-50">Contact Info.</h4>
              <h3 className="wow" data-splitting>
                Let's Talk.
              </h3>
              <div className="item mb-40">
                <h5>
                  <a href="#0">info@drmaryamtamer.com</a>
                </h5>
                <a href="tel:201024188478"> <h5>01024188478</h5></a>
              </div>
              <h3 className="wow" data-splitting>
                Visit Us.
              </h3>
              <div className="item">
                <h6>
                  9 Omarat Al Saudeya, Masaken Al Mohandesin, Nasr City, Cairo Governorate 4451701

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
