import React from "react";
import "./About.css";
import { FcCustomerSupport } from "react-icons/fc";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-intro">
        <h1>
          About <span>Us</span>
        </h1>
        <hr align="left" />
        <p>This is a quick introduction to our store and our values.</p>
        <p>We enjoy selling products!</p>
      </div>
      <FcCustomerSupport size="250px" />
    </div>
  );
};

export default About;
