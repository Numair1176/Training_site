import React from "react";
import contactbanner from "../Material/contactHeader.png";
import bkimg from "../Material/joinUs.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";

function contact() {
  return (
    <>
      <div
        className="about-banner mb-5"
        style={{ backgroundImage: `url(${contactbanner})` }}
      >
        <h1>CONTACT US</h1>
      </div>
      <div className="courses mt-5 pt-5 pb-5 contact2">
        <div className="form text-center mt-5 form2">
          <h1>Contact Us</h1>
          <div className="contact-form">
            <div className="row">
              <div className="col-lg-6 contact-left contactl2">
                <h5>Leave Us a Message</h5>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="Phone No" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="All Programs" />
                <textarea name="" id=""></textarea>
                <button className="btn btn-primary btn-lg">Send</button>
              </div>
              <div className="col-lg-6 contact-right contactr2">
                <h5>201 Hillside CT, Stafford, VA 2255</h5>
                <h5>United States</h5>
                <a href="tel:+1 571-839-6049">
                  <h5> +1 571-839-6049 </h5>
                </a>
                <a href="mailto:contact@trainingnet.net">
                  <h5>contact@trainingnet.net</h5>
                </a>

                <div className="icons">
                  <div>
                    <a href="https://www.facebook.com/">
                      <FaFacebook />
                    </a>
                  </div>
                  <div>
                    <a href="https://www.instagram.com/">
                      <FaInstagram />
                    </a>
                  </div>
                  <div>
                    <a href="https://web.whatsapp.com/">
                      <IoLogoWhatsapp />
                    </a>
                  </div>
                  <div>
                    <a href="https://web.twitter.com/">
                      <FaTwitter />
                    </a>
                  </div>
                </div>
                <div className="map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1701.5426355776797!2d73.12691785171512!3d31.466840417617668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1721897425238!5m2!1sen!2s"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="last-con mt-5 mb-5">
        <div className="join-us">
          <div
            className="join-us-bk join-us-2"
            style={{ backgroundImage: `url(${bkimg})` }}
          >
            <div className="para">
              <h3>Join us</h3>
              <h1>Join us today to upstep your IT Career</h1>
              <p>
                Take a quantum leap in your QA career. Enroll in TrainingNet and
                master the fusion of QA and quantum computing. Let us guide you
                towards success in the world of quality assurance. Your journey
                to excellence begins here at TrainingNet. Subscribe today!
              </p>
              <div className="combine-btn">
                <input type="text" placeholder="Enter Your Email" />
                <button className="btn btn-primary btn-contact">Contact</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default contact;