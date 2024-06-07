import React from "react";
import logoimage from "../assets/images/logocolor.png";
import burger1 from "../assets/images/burger-3.png";
import burger2 from "../assets/images/burger-2.png";
import burger3 from "../assets/images/burger-3.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="container">
        <div className="logo">
          <img className="logoLanding" src={logoimage} />
          <div className="overlay">
            <div className="wanted">
              <h2>Our most wanted</h2>
            </div>
            <div className="burgerContainer">
              <img className="burger1" src={burger1} alt="" />
              <img className="burger2" src={burger2} alt="" />
              <img className="burger2" src={burger3} alt="" />
            </div>
            <Link to="/Menu">
              <button className="overlayButton">I'm hungry!</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
