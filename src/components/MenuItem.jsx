import React, { useState, useEffect } from "react";
import useSpecialStyle from "../hooks/useSpecialStyle";
import LocalStorageManager from "../utils/localstoremanager";

function MenuItem(props) {
  const { headerStyle, pictureStyle } = useSpecialStyle();
  const cart = new LocalStorageManager().getLocalStorage();
  const [message, setMessage] = useState("");

  function handleClick() {
    new LocalStorageManager().setLocalStorage(props.item);
    console.log(cart);
    setMessage(`Added to cart!`);
    setTimeout(() => setMessage(""), 3000);
  }

  return (
    <>
      <div class="DisplayMenuContainer">
        <h1 style={headerStyle}>{props.item.title}</h1>
        <p>{props.item.description}</p>
        <h2>{props.item.price}</h2>
        <img style={pictureStyle} src={props.item.image} />
        <button onClick={handleClick} class="addtoCartBtn">
          Add to cart
        </button>
        {message && <div className="message">{message}</div>}
      </div>
    </>
  );
}

export default MenuItem;
