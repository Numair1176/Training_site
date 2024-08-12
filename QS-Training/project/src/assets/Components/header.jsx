import React, { useState } from "react";
// import logo from "../Material/QS Training.svg";
import logo from "../Material/Logo.webp";
import "../CSS/header.css";
import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";

export default function header() {
  const [baseclass, setbaseclass] = useState("sidebar");
  const [opac, setopac] = useState("opac");

  function changeclass() {
    if (baseclass === "sidebar") {
      setbaseclass("sidebar-show");
    } else {
      setbaseclass("sidebar");
    }
  }

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="Logo" className="logo" />
            <span className="brand-name">Training Net</span>
          </a>
          <ul className="nav-links">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/courses">Courses</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
          <div className="search-bar">
            <CiSearch className="search-icon" />
            <input type="text" placeholder="Search" />
          </div>

          <IoMenu
            style={{ fontSize: "xx-large" }}
            className="menu-icon"
            onClick={changeclass}
          />
        </div>
        {/* style={{ display: `${state}` }} */}
        <div className={`${baseclass}`}>
          <h5>Home</h5>
          <h5>Home</h5>
          <h5>Home</h5>
          <h5>Home</h5>
        </div>
        {/* <div className="opac"></div> */}
      </nav>
    </>
  );
}
