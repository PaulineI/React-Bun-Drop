import React, { useEffect, useState } from "react";
import useSpecialStyle from "../hooks/useSpecialStyle";
import LocalStorageManager from "../utils/localstoremanager";

function CartItem(order) {
  const { headerStyle, pictureStyle } = useSpecialStyle();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = new LocalStorageManager().getLocalStorage();
    setCart(storedCart);
  }, []);

  function handleClickAdd() {
    new LocalStorageManager().setLocalStorage(order.item);

    const newCart = new LocalStorageManager().getLocalStorage();

    order.onUpdateCart();

    setCart(newCart);
  }

  function handleClickDecrease() {
    new LocalStorageManager().decreaseFromLocalStorage(order.item);

    const newCart = new LocalStorageManager().getLocalStorage();

    order.onUpdateCart();
    setCart(newCart);
  }

  function handleClickRemove() {
    new LocalStorageManager().removeFromLocalStorage(order.item);
    const newCart = new LocalStorageManager().getLocalStorage();

    order.onUpdateCart();
    setCart(newCart);
  }

  function getItemQuantity() {
    const currentItem = cart.find((item) => item.id === order.item.id);
    return currentItem ? currentItem.quantity : order.item.quantity;
  }

  return (
    <>
      <div class="CartContainer">
        <h3>{order.item.title}</h3>
        <p>{order.item.price}</p>
        <p>Quantity:{getItemQuantity()}</p>
        <div className="qtyContainer">
          <button className="quantityBtn" onClick={handleClickAdd}>
            +
          </button>
          <button className="quantityBtn" onClick={handleClickDecrease}>
            -
          </button>
          <button className="quantityBtn" onClick={handleClickRemove}>
            Remove from Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default CartItem;
