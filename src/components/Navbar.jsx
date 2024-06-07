import React from "react";
import { Link } from "react-router-dom";
import useSpecialStyle from "../hooks/useSpecialStyle";

function Navbar() {
  return (
    <div className="navbar">
      <img className="logoNavbar" src="src/assets/images/logocolor.png" />
      <Link className="LinkNav" to="/">
        <h1>Home</h1>
      </Link>
      <Link className="LinkNav" to="/Menu">
        <h1>Menu</h1>
      </Link>
      <Link className="LinkNav" to="Contact">
        <h1>About us</h1>
      </Link>
      <Link className="LinkNav" to="Cart">
        <h1>Cart</h1>
      </Link>
    </div>
  );
}

export default Navbar;
