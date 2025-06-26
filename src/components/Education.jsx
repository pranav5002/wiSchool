import React from "react";
import main from "../assests/education/Frame 6550.png";
import bag from "../assests/education/Frame 6515.png";
import educationFeature1 from "../assests/education/Frame 6541.png";
import educationFeature2 from "../assests/education/Frame 6542.png";
import educationFeature3 from "../assests/education/Frame 6544.png";
import educationFeature4 from "../assests/education/Frame 6543.png";
import jobLine from "../assests/education/Vector 21.png";

const Education = () => {
  return (
    <div className="educationContainer">
      <p className="educationHeading">We Bring The Good Education To Life</p>

      <div className="educationBox">
        <div className="educationLeft">
          <img src={main} alt="" />
          <div className="educationCard">
            <img src={bag} alt="" />
            <div>
              <span>Job</span>
              <img src={jobLine} alt="line" />
              <span>Opportunities</span>
            </div>
          </div>
        </div>

        <div className="educationRight">
          <h1>Let Your Education Do The Walking</h1>

          <div className="educationFeatures">
            <img src={educationFeature1} alt="" />
            <p>Free E-book, Videos and kits</p>
          </div>
          <div className="educationFeatures">
            <img src={educationFeature2} alt="" />
            <p>Learn at your own pace</p>
          </div>
          <div className="educationFeatures">
            <img src={educationFeature3} alt="" />
            <p>Collaborate with different learners around the globe</p>
          </div>
          <div className="educationFeatures">
            <img src={educationFeature4} alt="" />
            <p>Top instructors around the globe</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
