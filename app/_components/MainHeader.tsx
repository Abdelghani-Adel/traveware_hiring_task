"use client";
import React from "react";
import { useAppSelector } from "../_redux/store";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

const MainHeader = () => {
  const cartState = useAppSelector((state) => state.cart);

  return (
    <div className="bg-warning py-3">
      <div className="container">
        <Link href="/cart" className="fs-4 text-white text-decoration-none">
          <FiShoppingCart /> {cartState.items.length}
        </Link>
      </div>
    </div>
  );
};

export default MainHeader;
