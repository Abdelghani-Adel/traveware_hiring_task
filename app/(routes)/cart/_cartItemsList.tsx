import { useAppSelector } from "@/app/_redux/store";
import React from "react";
import { v4 } from "uuid";
import CartItem from "./_cartItem";
import CartSummary from "./_cartSummary";

const CartItemsList = () => {
  const cartState = useAppSelector((state) => state.cart);
  const items = cartState.items;

  return (
    <div className="d-flex flex-column gap-3">
      <CartSummary />

      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3">
        {items &&
          items.length > 0 &&
          items.map((item) => <CartItem key={v4()} data={item}></CartItem>)}
      </div>
    </div>
  );
};

export default CartItemsList;
