import React, { useState, useEffect } from "react";
import AddtoDb from "../hooks/addToDb";
import LocalStorageManager from "../utils/localstoremanager";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Swish() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [phonenumber, setPhone] = useState("");
  const { totalPrice } = useParams();
  const parsedTotalPrice = parseFloat(totalPrice);

  const { addOrder } = AddtoDb();
  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderId = addOrder();

    navigation(`/Confirmation/${orderId}/${totalPrice}`);
  };

  return (
    <>
      <div className="payment-form">
        <h1>Total Price: $ {parsedTotalPrice}</h1>
        <h2>Betala med Swish</h2>
        <form className="form-wrapper" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phonenumber</label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="0768973564"
              maxLength="10"
              minLength="10"
              pattern="\d*"
              inputMode="numeric"
              required
            />
          </div>
          <h1>Delivery information</h1>
          <div className="form-group">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Adress">Adress</label>
            <input
              type="text"
              id="adress"
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phonenumber</label>
            <input
              type="text"
              id="phoneNumber"
              value={phonenumber}
              onChange={(e) => setPhone(e.target.value)}
              maxLength="10"
              minLength="10"
              pattern="\d*"
              inputMode="numeric"
              required
            />
          </div>
          <button className="submitBtn" onSubmit={handleSubmit} type="submit">
            Place Order
          </button>
        </form>
      </div>
    </>
  );
}

export default Swish;
