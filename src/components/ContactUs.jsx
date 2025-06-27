import React from 'react'
import girlImage from "../assests/contactUs/image.png"

const ContactUs = () => {
  return (
    <div className='contactUsContainer'>
      <img src={girlImage} alt='Girl Image'/>
      <div className='contactUsHeading'>
        <h1>You don't have to see the whole staircase just take the first step</h1>
        <p>Amet in a suspendisse convallis eget, Amet in A suspendisse convallis egetAmet in A </p>
        <div className='contactUsButtons'>
          <button className='button1'>Get Started</button>
          <button className='button2'>Place a Call</button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
