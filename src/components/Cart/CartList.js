import React from "react";
import CartItem from "./CartItem";

function CartList({ value }) {
  // value = props.value
  const { cart } = value; //cart = value.cart
  console.log(cart);
  return (
    <div className="container-fluid">
      {cart.map((item) => {
        return <CartItem key={item.id} item={item} value={value} />;
      })}
    </div>
  );
  return null;
}

export default CartList;
