import React from "react";
import aboutbanner from "../Material/AboutUs.png";
import { FaArrowRight } from "react-icons/fa";

import features from "../Material/features.webp";
import Aboutus from "./aboutus";
import Chooseus from "./chooseus";

function about() {
  return (
    <>
      <div
        className="about-banner mb-5"
        style={{ backgroundImage: `url(${aboutbanner})` }}
      >
        <h1>ABOUT US</h1>
      </div>
      <Aboutus />

      <div className="container mission-con">
        <div className="row">
          <div className="col-lg-6 mission-left">
            <div className="m-left" data-aos="zoom-in" data-aos-duration="600">
              <div className="m-left-bk">
                <img className="img-fluid" src={features} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="m-right">
              <h4>Our Mission</h4>
              <h1>
                We believe that excellence in IT Software goes beyond achieving
                remarkable results
              </h1>
              <p>
                Our mission at QS is clear: to empower individuals with the
                skills and knowledge needed to thrive in the ever-evolving
                landscape of IT. It's about nurturing confident, innovative
                thinkers who are ready to tackle the challenges of tomorrow.
                Join us as we embark on a journey of learning and discovery,
                shaping the future of IT Software together.
              </p>

              <button className="btn btn-primary btn-lg btn-join">
                Learn More{" "}
                <span>
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Chooseus />
    </>
  );
}

export default about;
