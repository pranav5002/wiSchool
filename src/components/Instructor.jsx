import React from "react";
import instructor1 from "../assests/Instructors/unsplash_3JmfENcL24M.png"
import instructor2 from "../assests/Instructors/unsplash_5n3JP9WAJTs.png"
import instructor3 from "../assests/Instructors/unsplash_sx1x4lXBrqc.png" 

const Instructor = () => {
  return (
    <div className="instructorContainer">
      <h2 className="instructorHeading">Meet our Instructor</h2>
      <div className="instructorsBox">
        <div className="instructorBox">
          <img src={instructor1} alt="instructor"/>
          <h4>John Mark</h4>
          <p>Senior Developer</p>
          <p>“Education will be for you what you want it to be” </p>
        </div>
        <div className="instructorBox">
          <img src={instructor2} alt="instructor"/>
          <h4>Lora Shrof</h4>
          <p>Marketing Lead</p>
          <p>“Knowledge has to be improved, challenged, and increased constantly, or it vanishes”</p>
        </div>
        <div className="instructorBox">
          <img src={instructor3} alt="instructor"/>
          <h4>Zeng Chin</h4>
          <p>Data Analist at Meta</p>
          <p>“To know that we know what we know, and to know that we do not know what we do not know, that is true knowledge”</p>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
