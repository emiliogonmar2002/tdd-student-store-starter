import React from "react";
import { FcCallback } from "react-icons/fc";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <FcCallback size="200px" className="contact-icon" />
      <div className="contact-intro">
        <h1>
          Contact <span>Us</span>
        </h1>
        <hr align="right" />
        <p>This is a quick introduction to our store and our values.</p>
        <p>We enjoy selling products!</p>
      </div>
    </div>
  );
};

export default Contact;
