"use client";
import React from "react";
import { useAppSelector } from "../_redux/store";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import styles from "./mainHeader.module.css";

const MainHeader = () => {
  const cartState = useAppSelector((state) => state.cart);

  return (
    <div className="bg-secondary py-3">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <Link href="/" className="m-0 text-white text-decoration-none">
            <h4>TraveWare Hiring Task</h4>
          </Link>
          {/* <h4 className="m-0 text-white">TraveWare Hiring Task</h4> */}

          <Link href="/cart" className={styles.cartIcon_wrapper} data-testid="cartCount">
            <FiShoppingCart />
            <span className={styles.cartItemsCount}>
              <span>{cartState.items.length}</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
