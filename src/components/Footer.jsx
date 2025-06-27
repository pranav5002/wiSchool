import React from "react";
import facebook from "../assests/footer/Vector (5).png";
import twitter from "../assests/footer/Vector (7).png";
import instagram from "../assests/footer/Vector (8).png";
import linkdIn from "../assests/footer/Vector (9).png";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerLeft">
        <h2>WiSchool</h2>
        <p>
          We are not here to sell you products, we sell value through our
          expertise.
        </p>
        <div className="footerIcons">
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={instagram} alt="" />
          <img src={linkdIn} alt="" />
        </div>
      </div>
      <div className="footerRight">
        <div className="footerElements">
          <a href="www.">Home</a>
          <a href="www.">Sevices</a>
          <a href="www.">Training</a>
          <a href="www.">Resources</a>
          <a href="www.">About Us</a>
        </div>
        <div className="footerElements">
          <a href="www.">SME</a>
          <a href="www.">Solution</a>
          <a href="www.">Reviews</a>
          <a href="www.">Blog</a>
        </div>
        <div className="footerElements">
          <a href="www.">Contac Us</a>
          <a href="www.">Place a Call</a>
          <a href="www.">Email</a>
          <a href="www.">Wischool@gmail.com</a>
        </div>
        <div className="footerElements">
          <a href="www.">Job Opening</a>
          <a href="www.">News</a>
          <a href="www.">Research</a>
        </div>
        <div className="footerElements">
          <a href="www.">Uk Privacy Policy</a>
          <a href="www.">Terms Of Use</a>
        </div>
      </div>
      <div className="footerUpdates">
        <p>Subscribe to get latest updates</p>
        <div>
          <input type="email" placeholder="Your Email address"/>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
