import React from "react";
import "../CSS/style.css";
import { FaArrowRight } from "react-icons/fa";
import course5 from "../Material/course5.webp";
import course4 from "../Material/course4.webp";
import features from "../Material/features.webp";
import bkimg from "../Material/joinUs.png";

export default function () {
  return (
    <>
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

      <div className="join-us" data-aos="fade-up" data-aos-duration="900">
        <div
          className="join-us-bk"
          style={{ backgroundImage: `url(${bkimg})` }}
        >
          <div className="para">
            <h3>Join us</h3>
            <h1>Join us today to upstep your IT Career</h1>
            <button className="btn btn-primary btn-contact">
              Contact Us
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
