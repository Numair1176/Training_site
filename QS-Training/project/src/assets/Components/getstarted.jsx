import React from "react";
import "../CSS/style.css";
import girl from "../Material/girl.webp";
import { FaArrowRight } from "react-icons/fa";

export default function getstarted() {
  return (
    <div className="container gs-con">
      <svg
        width="356"
        height="414"
        viewBox="0 0 356 414"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="circle-svg absolute -z-10 hidden sm:flex"
      >
        <circle
          cx="207"
          cy="207"
          r="80.5"
          stroke="#20B486"
          stroke-opacity="0.25"
        ></circle>
        <circle
          cx="207.5"
          cy="207.5"
          r="132"
          stroke="#20B486"
          stroke-opacity="0.25"
        ></circle>
        <circle
          cx="207"
          cy="207"
          r="171.5"
          stroke="#20B486"
          stroke-opacity="0.25"
        ></circle>
        <circle
          cx="207"
          cy="207"
          r="206.5"
          stroke="#20B486"
          stroke-opacity="0.25"
        ></circle>
      </svg>
      <svg
        width="356"
        height="414"
        viewBox="0 0 356 414"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="circle-svg2 absolute -z-10 hidden sm:flex"
      >
        <circle
          cx="207"
          cy="207"
          r="80.5"
          stroke="#20B486"
          stroke-opacity="0.25"
        ></circle>
        <circle
          cx="207.5"
          cy="207.5"
          r="132"
          stroke="#20B486"
          stroke-opacity="0.25"
        ></circle>
        <circle
          cx="207"
          cy="207"
          r="171.5"
          stroke="#20B486"
          stroke-opacity="0.25"
        ></circle>
        <circle
          cx="207"
          cy="207"
          r="206.5"
          stroke="#20B486"
          stroke-opacity="0.25"
        ></circle>
      </svg>
      <div data-aos="fade-right" data-aos-duration="800" className="vc">
        <div className="svg-div">
          <svg
            width="30"
            height="30"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_204_94)">
              <path
                d="M20.6999 28.3499H14.3999L13.6499 26.3249H2.32489V7.0499C2.32489 6.1499 3.07489 5.3999 3.97489 5.3999H32.0249C32.9249 5.3999 33.6749 6.1499 33.6749 7.0499V26.3999H22.1999L20.6999 28.3499ZM15.2249 27.2249H20.1749L21.6749 25.1999H32.5499V7.0499C32.5499 6.7499 32.3249 6.5249 32.0249 6.5249H3.97489C3.67489 6.5249 3.44989 6.7499 3.44989 7.0499V25.2749H14.4749L15.2249 27.2249Z"
                fill="white"
              ></path>
              <path
                d="M30.5999 30.6H5.3999C2.6999 30.6 0.524902 28.425 0.524902 25.725V25.125H14.3999L15.1499 27.15H20.0999L21.5999 25.125H35.3999V25.725C35.4749 28.425 33.2249 30.6 30.5999 30.6ZM1.7249 26.325C2.0249 28.125 3.5249 29.475 5.3999 29.475H30.5249C32.3999 29.475 33.9749 28.125 34.1999 26.325H22.1999L20.6999 28.35H14.3999L13.6499 26.325H1.7249Z"
                fill="white"
              ></path>
              <path
                d="M12.5249 9.375H6.74988V14.4H12.5249V9.375Z"
                fill="white"
              ></path>
              <path
                d="M13.0499 14.9249H6.1499V8.7749H13.0499V14.9249ZM7.2749 13.7999H11.9249V9.8999H7.2749V13.7999Z"
                fill="white"
              ></path>
              <path
                d="M12.5249 17.325H6.74988V22.3499H12.5249V17.325Z"
                fill="white"
              ></path>
              <path
                d="M13.0499 22.95H6.1499V16.8H13.0499V22.95ZM7.2749 21.825H11.9249V17.925H7.2749V21.825Z"
                fill="white"
              ></path>
              <path
                d="M29.5499 11.25H16.1249V12.375H29.5499V11.25Z"
                fill="white"
              ></path>
              <path
                d="M29.5499 19.2749H16.1249V20.3999H29.5499V19.2749Z"
                fill="white"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_204_94">
                <rect width="36" height="36" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="vc-p">
          <h4>5</h4>
          <p>View Courses</p>
        </div>
      </div>
      <div data-aos="fade-left" data-aos-duration="800" className="oc">
        <svg
          width="70"
          height="70"
          viewBox="0 0 81 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40.36 4.36011C45.0876 4.36011 49.7689 5.29128 54.1366 7.10044C58.5043 8.90961 62.4729 11.5614 65.8158 14.9043C69.1587 18.2472 71.8105 22.2158 73.6197 26.5835C75.4288 30.9512 76.36 35.6325 76.36 40.3601C76.36 45.0877 75.4288 49.769 73.6196 54.1367C71.8105 58.5044 69.1587 62.473 65.8158 65.816C62.4729 69.1589 58.5043 71.8106 54.1366 73.6198C49.7689 75.4289 45.0876 76.3601 40.36 76.3601C35.6324 76.3601 30.9511 75.4289 26.5834 73.6198C22.2156 71.8106 18.247 69.1589 14.9041 65.8159C11.5612 62.473 8.90948 58.5044 7.10032 54.1367C5.29115 49.769 4.35998 45.0877 4.35999 40.3601C4.35999 35.6325 5.29116 30.9512 7.10033 26.5835C8.9095 22.2158 11.5612 18.2472 14.9042 14.9042C18.2471 11.5613 22.2157 8.9096 26.5834 7.10044C30.9511 5.29127 35.6324 4.3601 40.36 4.36011L40.36 4.36011Z"
            stroke="#EAECF0"
            stroke-width="8"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M40.36 4.36011C47.9624 4.36011 55.3697 6.76689 61.5203 11.2355C67.6708 15.7041 72.2487 22.0051 74.598 29.2355C76.9473 36.4659 76.9473 44.2544 74.598 51.4847C72.2487 58.7151 67.6708 65.0161 61.5203 69.4847"
            stroke="#009b5d"
            stroke-width="8"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <div className="oc-p">
          <h4>5</h4>
          <p>Online Courses</p>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="800" className="tt">
        <div className="tt-svg-div">
          <svg
            width="28"
            height="28"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_204_109)">
              <path
                d="M28.2713 21.2588H27.1876V20.3026H28.2713C29.0363 20.3026 29.6738 19.6651 29.6738 18.9001V12.2063C29.6738 10.9951 28.6538 9.97508 27.4426 9.97508H20.4301C19.2188 9.97508 18.1988 10.9951 18.1988 12.2063V18.9001C18.1988 19.6651 18.8363 20.3026 19.6013 20.3026H20.6851V21.2588H19.6013C18.2626 21.2588 17.2426 20.1751 17.2426 18.9001V12.2063C17.2426 10.4213 18.6451 9.01883 20.4301 9.01883H27.5063C29.2913 9.01883 30.6938 10.4213 30.6938 12.2063V18.9001C30.6938 20.2388 29.6101 21.2588 28.2713 21.2588ZM23.9363 7.99883C22.0238 7.99883 20.4301 6.40508 20.4301 4.49258C20.4301 2.58008 22.0238 0.986328 23.9363 0.986328C25.8488 0.986328 27.4426 2.58008 27.4426 4.49258C27.4426 6.40508 25.9126 7.99883 23.9363 7.99883ZM23.9363 2.00633C22.5338 2.00633 21.3863 3.15383 21.3863 4.55633C21.3863 5.95883 22.5338 7.10633 23.9363 7.10633C25.3388 7.10633 26.4863 5.95883 26.4863 4.55633C26.4863 3.15383 25.3388 2.00633 23.9363 2.00633Z"
                fill="#F5F5F4"
              ></path>
              <path
                d="M25.5937 30.6937C24.9562 30.6937 24.3825 30.3749 24 29.9287C23.6175 30.3749 23.0437 30.6937 22.4062 30.6937C21.2587 30.6937 20.3025 29.7374 20.3025 28.5899V13.0349H21.2587V28.5899C21.2587 29.2274 21.7687 29.7374 22.4062 29.7374C23.0437 29.7374 23.49 29.1637 23.49 28.5899V20.8124H24.4462V28.5899C24.4462 29.2274 24.9562 29.7374 25.5937 29.7374C26.2312 29.7374 26.7412 29.2274 26.7412 28.5899V13.0349H27.6975V28.5899C27.6975 29.7374 26.7412 30.6937 25.5937 30.6937Z"
                fill="#F5F5F4"
              ></path>
              <path
                d="M18.7088 24.0636H1.05005V4.04614H19.0275V5.00239H2.0063V23.1074H18.7088V24.0636Z"
                fill="#F5F5F4"
              ></path>
              <path
                d="M15.585 12.9712H4.62V13.9274H15.585V12.9712Z"
                fill="#F5F5F4"
              ></path>
              <path
                d="M15.585 16.2224H4.62V17.1787H15.585V16.2224Z"
                fill="#F5F5F4"
              ></path>
              <path
                d="M15.585 19.5374H4.62V20.4936H15.585V19.5374Z"
                fill="#F5F5F4"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_204_109">
                <rect
                  width="30.6"
                  height="30.6"
                  fill="white"
                  transform="translate(0.540039 0.540039)"
                ></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="tt-p">
          <p>Tutor</p>
          <h4>2</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 gs-left">
          <div
            className="dot"
            data-aos="fade-right"
            data-aos-duration="1200"
          ></div>
          <div
            className="dot2"
            data-aos="fade-up"
            data-aos-duration="1200"
          ></div>
          <div
            className="dot3"
            data-aos="fade-down"
            data-aos-duration="1200"
          ></div>
          <h1>
            Welcome to <span>TrainingNet:</span> Your <span>QA Game</span> with
            a <span>Quantum Leap</span>!
          </h1>
          <p>
            At TrainingNet, we're committed to equipping aspiring IT
            professionals with the skills and expertise needed to thrive in the
            dynamic world of software testing. Our comprehensive courses are
            meticulously designed to meet the demands of the ever-evolving IT
            industry, ensuring that you're not just prepared, but ahead of the
            curve.
          </p>
          <button className="btn btn-primary btn-lg gs-btn">
            Get Started{" "}
            <span>
              <FaArrowRight />
            </span>
          </button>
        </div>
        <div className="col-lg-6 gs-right">
          <svg
            viewBox="0 0 497 626"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute left-[4rem] top-[3.4rem] -z-10 w-[27.4rem] h-[33rem]"
          >
            <path
              d="M17 160C17 71.6344 88.6344 0 177 0H330C418.366 0 490 71.6345 490 160V463C490 551.366 418.366 623 330 623H27C21.4772 623 17 618.523 17 613V160Z"
              fill="#009b5d"
            ></path>
            <circle cx="115" cy="142" r="7" fill="white"></circle>
            <circle cx="490" cy="198" r="7" fill="white"></circle>
            <circle cx="51" cy="619" r="7" fill="white"></circle>
            <circle cx="419" cy="37" r="15" fill="white"></circle>
            <circle cx="15" cy="135" r="15" fill="white"></circle>
            <circle cx="69" cy="52" r="15" fill="white"></circle>
          </svg>
          <div className="g-con img-fluid">
            <img
              data-aos="zoom-in-up"
              data-aos-duration="1600"
              src={girl}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
