import React, { useState, useEffect } from "react";
import AddtoDb from "../hooks/addToDb";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Card() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [cvv, setCvv] = useState("");
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
        <h2>Betala med kort</h2>
        <form className="form-wrapper" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cardNumber">Cardnumber</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              maxLength="16"
              minLength="16"
              pattern="\d*"
              inputMode="numeric"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardHolder">Card Holder</label>
            <input
              type="text"
              id="cardHolder"
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date</label>
            <input type="month" id="expiryDate" min="2024-06" required />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              maxLength="3"
              minLength="3"
              pattern="\d*"
              inputMode="numeric"
              required
            />
          </div>
          <h1>Delivery information</h1>
          <div className="form-group">
            <label htmlFor="cardHolder">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="cardHolder">Adress</label>
            <input
              type="text"
              id="adress"
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardHolder">Phonenumber</label>
            <input
              type="text"
              id="phoneNumber"
              value={phonenumber}
              onChange={(e) => setPhone(e.target.value)}
              required
              maxLength="10"
              minLength="10"
              pattern="\d*"
              inputMode="numeric"
            />
          </div>
          <button className="submitBtn" onSubmit={handleSubmit} type="submit">
            Genomför betalning
          </button>
        </form>
      </div>
    </>
  );
}

export default Card;
