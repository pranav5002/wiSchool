import React from "react";
import course1 from "../assests/PopularCourses/Frame 6530 (1).png";
import course2 from "../assests/PopularCourses/Frame 6530 (2).png";
import course3 from "../assests/PopularCourses/Frame 6530 (3).png";
import course4 from "../assests/PopularCourses/Frame 6530 (4).png";
import course5 from "../assests/PopularCourses/Frame 6530 (5).png";
import course6 from "../assests/PopularCourses/Frame 6530 (6).png";
import star from "../assests/PopularCourses/ant-design_star-outlined (1).png";
import follower from "../assests/PopularCourses/ci_group.png";
import arrow from "../assests/PopularCourses/ic_round-less-than.png";

const PopularCourses = () => {
  return (
    <div className="popularCoursesContainer">
      <div className="popularCourses">
        <p>Most Popular courses</p>
        <div className="sortButton">
          <img src={arrow} alt="" />
          <a>Sort by</a>
        </div>
      </div>

      <div className="courseCards">
        <div className="courseCard">
          <img src={course1} alt="" />
          <div className="courseHeading">
            <p>Learn Marketing from Top Instructors.</p>
            <div className="courseRating">
              <img src={star} alt="star" />
              <p>4.5</p>
            </div>
          </div>
          <div className="courseDetails">
            <p>6 weeks</p>
            <div className="courseFollowers">
              <img src={follower} alt="" />
              <p>1.5k Students</p>
            </div>
            <p>30.5$</p>
          </div>
        </div>

        <div className="courseCard">
          <img src={course2} alt="" />
          <div className="courseHeading">
            <p>Front-end development is not hard as you think</p>
            <div className="courseRating">
              <img src={star} alt="star" />
              <p>4.5</p>
            </div>
          </div>
          <div className="courseDetails">
            <p>6 weeks</p>
            <div className="courseFollowers">
              <img src={follower} alt="" />
              <p>1.5k Students</p>
            </div>
            <p>30.5$</p>
          </div>
        </div>

        <div className="courseCard">
          <img src={course3} alt="" />
          <div className="courseHeading">
            <p>Everrything you need to know in UX</p>
            <div className="courseRating">
              <img src={star} alt="star" />
              <p>4.5</p>
            </div>
          </div>
          <div className="courseDetails">
            <p>6 weeks</p>
            <div className="courseFollowers">
              <img src={follower} alt="" />
              <p>1.5k Students</p>
            </div>
            <p>30.5$</p>
          </div>
        </div>

        <div className="courseCard">
          <img src={course4} alt="" />
          <div className="courseHeading">
            <p>Learn photography with ease</p>
            <div className="courseRating">
              <img src={star} alt="star" />
              <p>4.5</p>
            </div>
          </div>
          <div className="courseDetails">
            <p>6 weeks</p>
            <div className="courseFollowers">
              <img src={follower} alt="" />
              <p>1.5k Students</p>
            </div>
            <p>30.5$</p>
          </div>
        </div>

        <div className="courseCard">
          <img src={course5} alt="" />
          <div className="courseHeading">
            <p>Be a pro in data analysis</p>
            <div className="courseRating">
              <img src={star} alt="star" />
              <p>4.5</p>
            </div>
          </div>
          <div className="courseDetails">
            <p>6 weeks</p>
            <div className="courseFollowers">
              <img src={follower} alt="" />
              <p>1.5k Students</p>
            </div>
            <p>30.5$</p>
          </div>
        </div>

        <div className="courseCard">
          <img src={course6} alt="" />
          <div className="courseHeading">
            <p>Ethical Harking is not hard as you think </p>
            <div className="courseRating">
              <img src={star} alt="star" />
              <p>4.5</p>
            </div>
          </div>
          <div className="courseDetails">
            <p>6 weeks</p>
            <div className="courseFollowers">
              <img src={follower} alt="" />
              <p>1.5k Students</p>
            </div>
            <p>30.5$</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
