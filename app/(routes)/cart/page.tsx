"use client";
import { useAppSelector } from "@/app/_redux/store";
import React from "react";
import NoItems from "./_noItems";
import CartItemsList from "./_cartItemsList";

const Page = () => {
  const cart = useAppSelector((state) => state.cart);

  return (
    <main>
      <div className="container py-4">
        {cart.items.length == 0 ? <NoItems /> : <CartItemsList />}
      </div>
    </main>
  );
};

export default Page;
