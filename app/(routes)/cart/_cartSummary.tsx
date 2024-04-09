import { useAppSelector } from "@/app/_redux/store";
import Link from "next/link";
import React from "react";

const CartSummary = () => {
  const cartState = useAppSelector((state) => state.cart);
  const items = cartState.items;

  return (
    <div className="border rounded-3 p-3">
      <h4>You have added {items.length} items to you cart!</h4>
      <button className="btn btn-success">
        <Link href="/checkout" className="text-white text-decoration-none">
          Checkout <strong>({cartState.totalPrice.toFixed(2)} EGP)</strong>
        </Link>
      </button>
    </div>
  );
};

export default CartSummary;
