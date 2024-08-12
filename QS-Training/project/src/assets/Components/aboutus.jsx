import React, { useEffect } from "react";
import "../CSS/style.css";
import { FaArrowRight } from "react-icons/fa";
import course5 from "../Material/course5.webp";
import course4 from "../Material/course4.webp";
import Aos from "aos";
import "aos/dist/aos.css";

export default function aboutus() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="container about-con">
      <div className="dot4"></div>
      <div className="dot5"></div>
      <div className="row">
        <div className="col-lg-6 ">
          <div
            className="ab-left"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <h4>About Us</h4>
            <h1>
              Training Net providing the best opportunities to the students
              around the glob.
            </h1>
            <p>
              At TrainingNet Academy, we provide a nurturing space for
              inquisitive minds to thrive. Our commitment to excellence goes
              beyond achieving remarkable QA results. We foster confident and
              innovative thinkers, delivering an education that seamlessly
              aligns with the future of quality assurance. Join us on the
              journey of learning and shaping the future of QA with TrainingNet
            </p>
            <p>
              We are an early learning academy focused on social-emotional
              development and early literacy and numeracy. Our students walk out
              with the character and confidence to make their mark in the world,
              equipped with the knowledge and real-world skills that take them
              way ahead in the industry they may serve
            </p>
            <button className="btn btn-primary btn-lg btn-join">
              Join Us{" "}
              <span>
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="ab-right">
            <img
              data-aos="fade-down"
              data-aos-duration="900"
              className="ab-img-1"
              src={course5}
              alt=""
            />
            <img
              data-aos="fade-up"
              data-aos-duration="800"
              className="ab-img-2"
              src={course4}
              alt=""
            />
            <div className="ab-right-bk"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
