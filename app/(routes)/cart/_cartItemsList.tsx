import { useAppSelector } from "@/app/_redux/store";
import React from "react";
import { v4 } from "uuid";
import CartItem from "./_cartItem";

const CartItemsList = () => {
  const items = useAppSelector((state) => state.cart.items);

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3">
      {items &&
        items.length > 0 &&
        items.map((item) => <CartItem key={v4()} data={item}></CartItem>)}
    </div>
  );
};

export default CartItemsList;
