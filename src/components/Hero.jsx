import React from "react";
import girl from "../assests/Hero/i-m-prepared-exam-very-well 1.png";
import boys from "../assests/Hero/Frame 6512.png";
import personIcon from "../assests/Hero/Frame 6515@2x.png";
import sideImage from "../assests/Hero/Frame 6516.png";

const Hero = () => {
  return (
    <div className="executionContainer">
      <div className="executionContainerLeft">
        <h1>
          Quality <span className="greenText">Education </span>By Any Means
          Necessary.
        </h1>
        <button>Get Started</button>
      </div>
      <div className="execuionContainerRight">
        <img src={girl} alt="" className="image1" />
        <div className="cardLeft">
          <p>
            Learn from best <span className="greenText">instructors </span>
            around the globe
          </p>
          <img src={boys} alt=""/>
        </div>
        <div className="cardRight">
          <img src={personIcon} alt=""/>
          <h1>15k </h1>
          <p>Amazing students around the globe</p>
        </div>
      </div>
      <img src={sideImage} alt="" className="executionContainerBackground" />
    </div>
  );
};

export default Hero;
