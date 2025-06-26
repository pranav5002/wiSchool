import React from "react";
import group177 from "../assests/navbar/Group 177.png";
import vector from "../assests/navbar/Vector.png";
import "../App.css";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <img src={group177} className="navbarLogo" alt="logo" />

      <div className="navbarOptions">
        <a href="www" alt="">Home </a>
        <a href="www" alt="">Courses</a>
        <a href="www" alt="">Instructors</a>
        <a href="www" alt="">Schedules</a>
        <a href="www" alt="">Contact Us</a>
      </div>

      <div className="navbarLogin">
        <img src={vector} className="navbarLoginSearch" alt="searchIcon" />
        <div className="navbarLoginButtons">
          <button className="navbarLoginButton">Login</button>
          <button className="navbarRegisterButton">Register</button>
        </div>
      </div>
      <div className="navbarLoginMobile">
        <img/>
      </div>
    </div>
  );
};

export default Navbar;
