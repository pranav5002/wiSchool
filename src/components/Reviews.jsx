import React from "react";
import Review1 from "../assests/reviews/Frame 6526.png";
import Review2 from "../assests/reviews/Frame 6526 (1).png";
import studentLine from "../assests/reviews/Vector 19.png";

const Reviews = () => {
  return (
    <div className="reviewsContainer">
      <p>Reviews</p>

      <div className="reviewHeading">
        <h2>
          What our <span>Students </span> <img src={studentLine} alt="line" />{" "}
          say about us
        </h2>
        <div className="reviewCards">
          <div className="reviewCard">
            <div className="reviewPerson">
              <img src={Review1} alt="Mohh Jumah" />
              <div className="reviewDetails">
                <p>Mohh Jumah</p>
                <p>Senior Developer</p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Consectetur ac blandit nam massa massa elementum mollis lectus.
              Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis
              imperdiet venenatis
            </p>
          </div>

          <div className="reviewCard">
            <div className="reviewPerson">
              <img src={Review2} alt="Mohh Jumah" />
              <div className="reviewDetails">
                <p>John Mark</p>
                <p>Data Analyst</p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Consectetur ac blandit nam massa massa elementum mollis lectus.
              Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis
              imperdiet venenatis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
