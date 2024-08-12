import { useState } from "react";
import "./App.css";
import Header from "./assets/Components/header";
import Footer from "./assets/Components/footer";
import Main from "./assets/Components/main";
import About from "./assets/Components/about";
import Contact from "./assets/Components/contact";
import Coursess from "./assets/Components/coursess";
import Getstarted from "./assets/Components/getstarted";
import Aboutus from "./assets/Components/aboutus";
import Mission from "./assets/Components/mission";
import Chooseus from "./assets/Components/chooseus";
import Courses from "./assets/Components/courses";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/courses" element={<Coursess />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
