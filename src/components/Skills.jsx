import React from 'react'
import skill1 from "../assests/skill/Frame 6530 (7).png"
import skill2 from "../assests/skill/Frame 6530 (8).png"
import skill3 from "../assests/skill/Frame 6530 (9).png"
import star from "../assests/skill/Vector (3).png"
import follower from "../assests/skill/Vector (4).png"

const Skills = () => {
  return (
    <div className='skillContainer'>
      <p>Learn a new skill in two hours</p>

      <div className='skillCards'>
        <div className='skillCard'>
          <img src={skill1} alt=''/>
          <div className='skillHeading'>
            <p>All you need in Business Strategy</p>
            <div className='skillRating'>
            <img src={star} alt='star'/>
            <p>4.5</p>
          </div>
          </div>
          <div className='skillDetails'>
            <p>6 weeks</p>
            <div className='skillFollowers'>
              <img src={follower} alt=''/>
              <p>1.5k Students</p>
            </div>
            <p>30.5$</p>
          </div>
        </div>

        <div className='skillCard'>
          <img src={skill2} alt=''/>
          <div className='skillHeading'>
            <p>The amazing hack in Figma prototyping</p>
            <div className='skillRating'>
            <img src={star} alt='star'/>
            <p>4.5</p>
          </div>
          </div>
          <div className='skillDetails'>
            <p>6 weeks</p>
            <div className='skillFollowers'>
              <img src={follower} alt=''/>
              <p>1.5k Students</p>
            </div>
            <p>30.5$</p>
          </div>
        </div>

        <div className='skillCard'>
          <img src={skill3} alt=''/>
          <div className='skillHeading'>
            <p>Introduction to basic game developement</p>
            <div className='skillRating'>
            <img src={star} alt='star'/>
            <p>4.5</p>
          </div>
          </div>
          <div className='skillDetails'>
            <p>6 weeks</p>
            <div className='skillFollowers'>
              <img src={follower} alt=''/>
              <p>1.5k Students</p>
            </div>
            <p>30.5$</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
