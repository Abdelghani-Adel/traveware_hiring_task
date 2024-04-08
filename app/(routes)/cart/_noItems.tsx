import Link from "next/link";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const NoItems = () => {
  return (
    <div>
      <div className="text-center">
        <h4>You cart is empty</h4>
        <button className="btn btn-success">
          <Link href="/" className="text-white text-decoration-none">
            Start shopping <FiShoppingCart />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default NoItems;
