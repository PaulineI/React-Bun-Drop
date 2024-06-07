import React, { useState, useEffect } from "react";
import LocalStorageManager from "../utils/localstoremanager";
import { useNavigate } from "react-router-dom";
import useSpecialStyle from "../hooks/useSpecialStyle";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigation = useNavigate();

  useEffect(() => {
    if (cart && cart.length > 0) {
      const sum = cart.reduce((acc, c) => acc + c.price * c.quantity, 0);
      const roundedSum = parseFloat(sum.toFixed(2));
      setTotalPrice(roundedSum);
    }
  }, [cart]);

  useEffect(() => {
    setCart(new LocalStorageManager().getLocalStorage());
  }, []);

  function handleOnUpdateCart() {
    setCart(new LocalStorageManager().getLocalStorage());
  }

  function handleCardPayment() {
    navigation(`/Card/${totalPrice}`);
    console.log(totalPrice);
  }

  function handleSwishPayment() {
    navigation(`/Swish/${totalPrice}`);
    console.log(totalPrice);
  }

  return (
    <>
      <div className="cartWrapper">
        {cart && cart.length >= 1 ? (
          <>
            {cart.map((c) => (
              <CartItem key={c.id} item={c} onUpdateCart={handleOnUpdateCart} />
            ))}
            <h2>Total Price: </h2>
            <h1>{totalPrice}$</h1>
            <div className="paymentWrapper">
              <button onClick={handleCardPayment} className="paymentBtn">
                Pay with card
              </button>

              <button onClick={handleSwishPayment} className="paymentBtn">
                Swish
              </button>
            </div>
          </>
        ) : (
          <h1>No items in cart!</h1>
        )}
      </div>
    </>
  );
}

export default Cart;
