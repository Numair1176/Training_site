import React, { useState } from "react";
import aboutbanner from "../Material/AboutUs.png";
import data from "../data";

function coursess() {
  const [searchterm, setsearchterm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Course");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredCourses = data.filter((course) => {
    const matchesSearchTerm =
      searchterm === "" ||
      course.Title.toLowerCase().includes(searchterm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All Course" || course.category === selectedCategory;

    return matchesSearchTerm && matchesCategory;
  });

  return (
    <>
      <div
        className="about-banner mb-5"
        style={{ backgroundImage: `url(${aboutbanner})` }}
      >
        <h1>ALL COURSES</h1>
      </div>
      <div className="s-container">
        <div className="search-con">
          <input
            type="text"
            placeholder="Search Courses"
            onChange={(e) => {
              setsearchterm(e.target.value);
            }}
          />
          <div className="search-btns">
            <button onClick={() => handleCategoryClick("All Course")}>
              All Course
            </button>
            <button onClick={() => handleCategoryClick("Database")}>
              Database
            </button>
            <button onClick={() => handleCategoryClick("Automation")}>
              Automation
            </button>
          </div>
        </div>

        <div className="row courses-con mt-5">
          {
            // data
            // .filter((course) => {
            //   if (searchterm == "") {
            //     return course;
            //   } else if (
            //     course.Title.toLocaleLowerCase().includes(
            //       searchterm.toLocaleLowerCase()
            //     )
            //   ) {
            //     return course;
            //   }
            // })
            filteredCourses.map((course) => (
              <div key={course.ID} className="col-lg-3 card-courses mt-3">
                <img src={course.Image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h6 className="card-title">{course.Title.slice()}</h6>
                  <p>{course.Desc.slice(0, 45)}...</p>
                  <button className="course-btn">View Course</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default coursess;
