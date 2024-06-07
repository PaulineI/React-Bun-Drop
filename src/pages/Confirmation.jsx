import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LocalStorageManager from "../utils/localstoremanager";
import logoimage from "../assets/images/logocolor.png";

function Confirmation() {
  const [order, setOrder] = useState(null);
  const { orderId, totalPrice } = useParams();
  const [time, setTime] = useState(2700);

  useEffect(() => {
    fetch(`http://localhost:3000/orders/${orderId}`)
      .then((res) => res.json())
      .then((data) => {
        setOrder(data);
        new LocalStorageManager().clearLocalStorage();
      });
  }, [orderId]);

  useEffect(() => {
    let timer = setInterval(() => {
      setTime((time) => {
        if (time === 0) {
          clearInterval(timer);
          return 0;
        } else return time - 1;
      });
    }, 1000);
  }, []);

  return (
    <>
      {order && (
        <>
          <h3 className="orderHeader">ORDER ID: {order.id}</h3>
          <h4>Your order has been received!</h4>
          <div className="Timer">
            <p>
              Estimated time for delivery <br />{" "}
              {`${Math.floor(time / 60)}`.padStart(2, 0)}:
              {`${time % 60}`.padStart(2, 0)}
            </p>
          </div>
          <div className="wrapper">
            <div className="orderWrapper1">
              <img src={logoimage} alt="" />
            </div>
            <div className="orderWrapper2">
              {order.items.map((i) => (
                <div className="contentWrapper" key={i.id}>
                  <h3>{i.title}</h3>
                  <p>Quantity: {i.quantity}</p>
                  <p>Price: ${i.price}</p>
                  <hr></hr>
                </div>
              ))}
              <h2>TotalPrice: ${totalPrice}</h2>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Confirmation;
