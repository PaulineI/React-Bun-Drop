import React, { useEffect, useState } from "react";
import LocalStorageManager from "../utils/localstoremanager";

function AddtoDb() {
  function addOrder() {
    // Hämta local storage
    const newCart = new LocalStorageManager().getLocalStorage();

    // newCart är en array

    // Nu måste vi göra om newCart till ett objekt

    const orderId = String(Math.random()).slice(2);

    const order = {
      id: orderId,
      items: newCart,
    };

    // Skicka en ny order till databasen
    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    };

    fetch("http://localhost:3000/orders", postOptions);

    return order.id;
  }

  return { addOrder };
}

export default AddtoDb;
