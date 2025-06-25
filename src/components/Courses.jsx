import React from "react";
import marketing from "../assests/courses/Component 21.png";
import design from "../assests/courses/Component 23.png";
import programming from "../assests/courses/Component 25.png";
import technology from "../assests/courses/Component 22.png";
import Slider from "react-slick";
import leftArrow from "../assests/courses/Vector (1).png";
import rightArrow from "../assests/courses/Vector (2).png";

const CoursesList = [
  {
    id: 1,
    img: marketing,
    title: "",
  },
  {
    id: 2,
    img: design,
    title: "",
  },
  {
    id: 3,
    img: programming,
    title: "",
  },
  {
    id: 4,
    img: technology,
    title: "",
  },
];

export const nextArrow = () => {
  return (
    <div>
      <img src={rightArrow} alt="arrow" />
    </div>
  );
};

export const previousArrow = () => {
  return (
    <div>
      <img src={leftArrow} alt="arrow" />
    </div>
  );
};

const Courses = () => {
  var settings = {
    dots: false,
    arrows: true,
    slidesToShow: 4,
    nextArrow: <nextArrow />,
    previousArrow: <previousArrow />,
  };

  return (
    <div className="coursesContainer">
      <div className="courseCategories">
        <p>Choose favourite course from top cartegories</p>
        <a href="#">See all</a>
      </div>

      <Slider {...settings}>
        {CoursesList.map((data) => (
          <div key={data.id} className="courseSlide">
            <img src={data.img} />
            <p>{data.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Courses;
