import React from "react";
import logoimage from "../assets/images/logocolor.png";

function Contact() {
  return (
    <>
      <div className="ContactContainer">
        <img src={logoimage} alt="" />
        <div className="Contact">
          <h1>Bun drop</h1>
          <p>
            Delivers the most delicious food by drone. It's faster then anything
            else. Do you have any remarks on the food or the delivery, or do you
            have any questions? Don't hestitate to send us an email, and we will
            get back to you within 24 hours.
          </p>{" "}
          <br />
          <p className="infoEmail">info@bundrop.com</p>
        </div>
      </div>
    </>
  );
}

export default Contact;
