import React from 'react'
import feature1 from "../assests/feature/Frame 6520.png"
import feature2 from "../assests/feature/Frame 6520 (1).png"
import feature3 from "../assests/feature/Frame 6520 (2).png"
import feature4 from "../assests/feature/Frame 6520 (3).png"
import feature5 from "../assests/feature/Frame 6520 (4).png"

const Features = () => {
  return (
    <div className='featuresContainer'>
      <div className='feature'>
        <img src={feature1}/>
        <p>Problem Solving</p>
      </div>
      <div className='feature'>
        <img src={feature2}/>
        <p>Live Chat</p>
      </div>
      <div className='feature'>
        <img src={feature3}/>
        <p>Group Reading</p>
      </div>
      <div className='feature'>
        <img src={feature4}/>
        <p>10K Courses</p>
      </div>
      <div className='feature'>
        <img src={feature5}/>
        <p>Hand-on activities</p>
      </div>
    </div>
  )
}

export default Features
